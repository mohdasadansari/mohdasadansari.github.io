const LAST_TRACKED_AT_KEY = "portfolio:lastTrackedAt";
const VISITOR_ID_KEY = "portfolio:visitorId";
const SESSION_START_KEY = "portfolio:sessionStartedAt";
const SESSION_SENT_KEY = "portfolio:sessionSent";
const PAGE_VIEW_COUNT_KEY = "portfolio:pageViewCount";
const RECRUITER_REF_KEY = "portfolio:recruiterRef";
const TRACK_DEBOUNCE_MS = 30 * 60 * 1000;

export const getRecruiterRef = () => {
  try {
    // 1. Check URL query parameters (?ref=company_name or ?source=xyz)
    const searchParams = new URLSearchParams(window.location.search);
    const paramRef =
      searchParams.get("ref") ||
      searchParams.get("recruiter") ||
      searchParams.get("company") ||
      searchParams.get("source") ||
      searchParams.get("utm_source");

    if (paramRef && paramRef.trim()) {
      const cleanRef = paramRef.trim();
      sessionStorage.setItem(RECRUITER_REF_KEY, cleanRef);
      return cleanRef;
    }

    // 2. Check if already recorded in this active session
    const sessionRef = sessionStorage.getItem(RECRUITER_REF_KEY);
    if (sessionRef) {
      return sessionRef;
    }

    // 3. Fallback: check document.referrer
    const referrer = document.referrer || "";
    if (referrer.includes("drive.google.com") || referrer.includes("docs.google.com")) {
      const driveRef = "Resume (Google Drive)";
      sessionStorage.setItem(RECRUITER_REF_KEY, driveRef);
      return driveRef;
    }
    if (referrer.includes("linkedin.com")) {
      const liRef = "LinkedIn Profile";
      sessionStorage.setItem(RECRUITER_REF_KEY, liRef);
      return liRef;
    }
    if (referrer.includes("github.com")) {
      const ghRef = "GitHub Profile";
      sessionStorage.setItem(RECRUITER_REF_KEY, ghRef);
      return ghRef;
    }
  } catch {
    // fallback if window / sessionStorage is inaccessible
  }

  return "Direct / Resume";
};

const getVisitorId = () => {
  const existing = localStorage.getItem(VISITOR_ID_KEY);
  if (existing) return existing;

  const generated =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  localStorage.setItem(VISITOR_ID_KEY, generated);
  return generated;
};

const shouldTrackNow = () => {
  const lastTrackedAt = Number(localStorage.getItem(LAST_TRACKED_AT_KEY) || 0);
  return Date.now() - lastTrackedAt > TRACK_DEBOUNCE_MS;
};

const getWebhookUrl = () => import.meta.env.VITE_VISITOR_WEBHOOK_URL;

const getDeviceType = () => {
  const width = window.innerWidth || window.screen.width;
  if (width < 768) return "Mobile";
  if (width <= 1024) return "Tablet";
  return "Desktop";
};

const getBasePayload = () => ({
  visitorId: getVisitorId(),
  recruiterRef: getRecruiterRef(),
  url: window.location.href,
  referrer: document.referrer || null,
  timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  screen: `${window.screen.width}x${window.screen.height}`,
  device: getDeviceType(),
  language: navigator.language,
  platform: navigator.platform,
  userAgent: navigator.userAgent,
});

const sendTrackingPayload = async (payload, options = {}) => {
  const webhookUrl = getWebhookUrl();
  if (!webhookUrl) return;

  const { updateDebounce = false, useBeacon = false } = options;
  const body = JSON.stringify(payload);

  try {
    if (useBeacon && navigator.sendBeacon) {
      const blob = new Blob([body], { type: "text/plain" });
      navigator.sendBeacon(webhookUrl, blob);
    } else {
      // Use text/plain + no-cors to avoid CORS preflight block on Google Apps Script
      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body,
      });
    }

    if (updateDebounce) {
      localStorage.setItem(LAST_TRACKED_AT_KEY, String(Date.now()));
    }
  } catch {
    // Ignore tracking errors to avoid impacting user experience.
  }
};

const parseOrganization = (rawOrg) => {
  if (!rawOrg) return { asn: null, org: null, companyType: "Unknown" };

  const asnMatch = rawOrg.match(/^(AS\d+)\s*(.*)$/);
  const asn = asnMatch ? asnMatch[1] : null;
  const cleanOrg = asnMatch && asnMatch[2] ? asnMatch[2].trim() : rawOrg.trim();

  const isTechTarget = /google|microsoft|amazon|apple|meta|uber|netflix|adobe|goldman|morgan|cisco|oracle|salesforce|ibm|intel|tcs|infosys|wipro|cognizant|accenture|hcl|flipkart|swiggy|zomato|paytm|phonepe|razorpay|cred|atlassian|ola|deloitte|ey|pwc|kpmg/i.test(cleanOrg);
  const isIsp = /jio|airtel|vodafone|telecom|broadband|cable|comcast|verizon|at&t|bsnl|act fibernet|hathway/i.test(cleanOrg);

  const companyType = isTechTarget
    ? "Target Tech Company 🎯"
    : isIsp
    ? "ISP / Mobile Carrier"
    : "Company / Network";

  return { asn, org: cleanOrg, companyType };
};

const getIpLocation = async () => {
  // 1. Try ipinfo.io first (provides IP, City, Region, Country, and Org with ASN)
  try {
    const res = await fetch("https://ipinfo.io/json");
    const data = await res.json();
    if (data && data.ip) {
      const { asn, org, companyType } = parseOrganization(data.org);
      return {
        ip: data.ip || null,
        city: data.city || null,
        region: data.region || null,
        country: data.country || null,
        org: org || data.org || null,
        rawOrg: data.org || null,
        asn: asn || null,
        companyType,
      };
    }
  } catch {
    // fall through to next service
  }

  // 2. Fallback: ipwho.is
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();
    if (data && data.success !== false && data.ip) {
      const rawOrg = data.connection?.org || data.connection?.isp || null;
      const { asn, org, companyType } = parseOrganization(rawOrg);
      return {
        ip: data.ip || null,
        city: data.city || null,
        region: data.region || null,
        country: data.country || null,
        org: org || rawOrg,
        rawOrg,
        asn: asn || (data.connection?.asn ? `AS${data.connection.asn}` : null),
        companyType,
      };
    }
  } catch {
    // fall through
  }

  return null;
};

export const trackVisitor = async (path) => {
  if (!shouldTrackNow()) {
    return;
  }

  const pageViews = Number(sessionStorage.getItem(PAGE_VIEW_COUNT_KEY) || 0) + 1;
  sessionStorage.setItem(PAGE_VIEW_COUNT_KEY, String(pageViews));

  const ipLocation = await getIpLocation();

  const payload = {
    eventType: "portfolio_visit",
    path,
    pageViewsInSession: pageViews,
    ...getBasePayload(),
    ...ipLocation,
  };

  await sendTrackingPayload(payload, { updateDebounce: true });
};

export const trackProjectClick = (projectName, projectUrl) => {
  const payload = {
    eventType: "project_click",
    projectName,
    projectUrl,
    path: window.location.pathname,
    ...getBasePayload(),
  };

  sendTrackingPayload(payload);
};

export const initSessionTracking = () => {
  // Initialize recruiter ref detection immediately upon app load
  getRecruiterRef();

  if (!sessionStorage.getItem(SESSION_START_KEY)) {
    sessionStorage.setItem(SESSION_START_KEY, String(Date.now()));
    sessionStorage.setItem(SESSION_SENT_KEY, "0");
    sessionStorage.setItem(PAGE_VIEW_COUNT_KEY, "0");
  }

  const sendSessionDuration = () => {
    if (sessionStorage.getItem(SESSION_SENT_KEY) === "1") {
      return;
    }

    const startedAt = Number(sessionStorage.getItem(SESSION_START_KEY) || Date.now());
    const durationSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    const pageViews = Number(sessionStorage.getItem(PAGE_VIEW_COUNT_KEY) || 0);

    const payload = {
      eventType: "time_on_site",
      durationSeconds,
      pageViewsInSession: pageViews,
      path: window.location.pathname,
      ...getBasePayload(),
    };

    sessionStorage.setItem(SESSION_SENT_KEY, "1");
    sendTrackingPayload(payload, { useBeacon: true });
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      sendSessionDuration();
    }
  };

  window.addEventListener("beforeunload", sendSessionDuration);
  document.addEventListener("visibilitychange", onVisibilityChange);

  return () => {
    window.removeEventListener("beforeunload", sendSessionDuration);
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
};
