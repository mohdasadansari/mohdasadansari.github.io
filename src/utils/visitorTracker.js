const LAST_TRACKED_AT_KEY = "portfolio:lastTrackedAt";
const VISITOR_ID_KEY = "portfolio:visitorId";
const SESSION_START_KEY = "portfolio:sessionStartedAt";
const SESSION_SENT_KEY = "portfolio:sessionSent";
const PAGE_VIEW_COUNT_KEY = "portfolio:pageViewCount";
const TRACK_DEBOUNCE_MS = 30 * 60 * 1000;

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

const getBasePayload = () => ({
  visitorId: getVisitorId(),
  url: window.location.href,
  referrer: document.referrer || null,
  timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  screen: `${window.screen.width}x${window.screen.height}`,
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

const getIpLocation = async () => {
  // Try ipinfo.io first (most reliable, HTTPS, no API key for basic fields)
  try {
    const res = await fetch("https://ipinfo.io/json");
    const data = await res.json();
    if (data && data.ip) {
      return {
        ip: data.ip || null,
        city: data.city || null,
        region: data.region || null,
        country: data.country || null,
        org: data.org || null,
      };
    }
  } catch {
    // fall through to next service
  }

  // Fallback: ipwho.is
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();
    if (data && data.success !== false && data.ip) {
      return {
        ip: data.ip || null,
        city: data.city || null,
        region: data.region || null,
        country: data.country || null,
        org: data.connection?.isp || data.connection?.org || null,
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
