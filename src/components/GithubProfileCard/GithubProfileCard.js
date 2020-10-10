import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import { contactInfo } from "../utils/constants";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--bg-color", "black");
      document.documentElement.style.setProperty("--color", "white");
      return;
    }
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--color", "black");
    return;
  })();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="profile-main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">
              {emoji("App Developer | ReactJS | JavaScript | NodeJS 🚀")}
            </h2>
            <div className="location-div">
              <span className="desc-prof">
                <span>{emoji("📍")} Noida, India</span>
              </span>
            </div>
            <div className="opp-div">
              <span className="desc-prof">Open for opportunities: Yes</span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              style={{ width: "15rem", height: "15rem" }}
              src={require("../../assets/images/profile.jpg")}
              className="profile-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
