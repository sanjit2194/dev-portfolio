import React from "react";
import "./Education.css";
import EducationCard from "../EducationCard/EducationCard";
import { educationInfo } from "../utils/constants";

export default function Education({isDark}) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--color", "white");
      return;
    }
    document.documentElement.style.setProperty("--color", "black");
    return;
  })();

  return (
    <div className="main">
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school) => (
            <EducationCard school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
