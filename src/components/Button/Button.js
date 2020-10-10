import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--button-color", "#8c00ff");
      return;
    }
    document.documentElement.style.setProperty("--button-color", "#55198b");
    return;
  })();

  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
