import React, { createRef } from 'react';
import { Fade, Slide } from 'react-reveal';
import './EducationCard.css';

export default function EducationCard({ school }) {
  const imgRef = createRef();

  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={'anonymous'}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt=""
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>
            <div className="education-text-details">
              <h5 className="education-text-subHeader">{school.subHeader}</h5>
              <p className="education-text-duration">{school.duration}</p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
