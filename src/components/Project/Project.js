import React from "react";
// import "./Project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectInfo } from "../utils/constants";

export default function Project({ isDark }) {
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
      <div className="project-section" id="projects">
        <h1 className="project-heading">Project (Major)</h1>
        <div className="project-card-container">
          {projectInfo.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
