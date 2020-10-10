import React from "react";
import { Fade, Slide } from "react-reveal";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div>
      <Fade left duration={1000}>
        <div className="project-card">
          <div className="project-card-right">
            <h5 className="project-text-school">
              <span>Role:</span>
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                {project.role}
              </span>
            </h5>
            <h5 className="project-text-subHeader">
              <span>Project:</span>
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                {project.project}
              </span>
            </h5>
            <h5 className="project-text-subHeader">
              <span>Desc:</span>
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                {project.desc}
              </span>
            </h5>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="project-card-border"></div>
      </Slide>
    </div>
  );
}
