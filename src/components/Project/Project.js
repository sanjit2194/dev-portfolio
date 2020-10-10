import React from "react";
import "./Project.css";
import { projectInfo } from "../utils/constants";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Education({ isDark }) {
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
      <div className="education-section" id="projects">
        <h1 className="education-heading">Projects</h1>
        <div className="education-card-container">
          {projectInfo.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
