import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../utils/constants";

export default function socialMedia({ isDark }) {
  let color = isDark ? "color" : "";

  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--social-color", "white");
      return;
    }
    document.documentElement.style.setProperty("--social-color", "black");
    return;
  })();

  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-github ${color}`}></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-linkedin-in ${color}`}></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-google ${color}`}></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-facebook-f ${color}`}></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-instagram ${color}`}></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
