import React from "react";
import "./WorkExperience.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { workExperiences } from "../utils/constants";
import { Fade } from "react-reveal";

export default function WorkExperience({ isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--bg-color", "black");
      return;
    }
    document.documentElement.style.setProperty("--bg-color", "white");
    return;
  })();

  if (workExperiences.viewExperiences) {
    return (
      <div className="main" id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card) => {
                  return (
                    <ExperienceCard
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
