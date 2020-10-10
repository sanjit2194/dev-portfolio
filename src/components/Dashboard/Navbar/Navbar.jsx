import React from "react";
import Headroom from "react-headroom";

import "./Navbar.css";
import { greeting, navbarTitles } from "../../utils/constants";

export default function Navbar({ isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--font-color", "#8c00ff");
      document.documentElement.style.setProperty("--bg-color", "black");
      document.documentElement.style.setProperty("--header-color", "white");
      return;
    }
    document.documentElement.style.setProperty("--font-color", "#55198b");
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--header-color", "black");
    return;
  })();

  return (
    <Headroom>
      <header className="header">
        <a href="#" className="logo">
          <span className="grey-color">{"<"}</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">{"/>"}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">{navbarTitles.skills}</a>
          </li>
          <li>
            <a href="#education">{navbarTitles.education}</a>
          </li>
          <li>
            <a href="#experience">{navbarTitles.work}</a>
          </li>
          <li>
            <a href="#projects">{navbarTitles.projects}</a>
          </li>
          <li>
            <a href="#contact">{navbarTitles.contact}</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
