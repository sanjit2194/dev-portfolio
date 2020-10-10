import React from "react";
import "./Progress.css";
import { techStack } from "../utils/constants";
import { Fade } from "react-reveal";

export default function StackProgress({ isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--pro-color", "#ffc800");
      return;
    }
    document.documentElement.style.setProperty("--pro-color", "#55198b");
    return;
  })();

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main">
          <div className="skills-container">
            <div className="skills-bar">
              <h1 className="skills-heading">Proficiency</h1>
              {techStack.experience.map((exp) => {
                const progressStyle = {
                  width: exp.progressPercentage,
                };
                return (
                  <div className="skill">
                    <p>{exp.Stack}</p>
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="skills-image">
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
