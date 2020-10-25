import React from "react";
// import "./Project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectInfo } from "../utils/constants";

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
        <h1 className="education-heading">Project (Major)</h1>
        <div className="education-card-container">
          {projectInfo.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
