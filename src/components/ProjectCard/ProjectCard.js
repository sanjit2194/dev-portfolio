import React, { createRef } from "react";
import { Fade, Slide } from "react-reveal";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const imgRef = createRef();

  return (
    <div>
      <Fade left duration={1000}>
        <div className="project-card">
          <div className="project-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="project-roundedimg"
              src={project.logo}
              alt=""
            />
          </div>
          <div className="project-card-right">
            <h5 className="project-text-school">{project.company}</h5>
            <div className="project-text-details">
              <h5 className="project-text-subHeader">
                <span>Role:</span>
                <span style={{ fontWeight: 400 }}>{project.role}</span>
              </h5>
              <h5 className="project-text-subHeader">
                <span>Project:</span>
                <span style={{ fontWeight: 400 }}>{project.project}</span>
              </h5>
              <h5 className="project-text-subHeader">
                <span>Desc:</span>
                <span style={{ fontWeight: 400 }}>{project.desc}</span>
              </h5>
              <h5 className="project-text-subHeader">
                <span>Tech:</span>
                <span style={{ fontWeight: 400 }}>{project.tech}</span>
              </h5>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="project-card-border"></div>
      </Slide>
    </div>
  );
}
