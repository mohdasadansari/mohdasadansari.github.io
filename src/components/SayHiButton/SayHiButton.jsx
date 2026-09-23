import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { trackProjectClick } from "../../utils/visitorTracker";
import "./SayHiButton.css";

const SayHiButton = () => {
  const chatUrl = "https://www.linkedin.com/messaging/thread/new/?recipient=asad-as2";

  const handleClick = () => {
    trackProjectClick("LinkedIn Say Hi FAB", chatUrl);
  };

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="say-hi-fab"
      aria-label="Say Hi to Mohd Asad Ansari on LinkedIn"
      onClick={handleClick}
    >
      <div className="say-hi-icon-wrap">
        <LinkedInIcon className="say-hi-linkedin-icon" />
      </div>
      <span className="say-hi-text">Say Hi <span className="say-hi-wave">👋</span></span>
    </a>
  );
};

export default SayHiButton;
