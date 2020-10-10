import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="main">
        <div className="footer-div">
          <p className="footer-text">{emoji("Made with ❤️ by Sanjit")}</p>
        </div>
      </div>
    </Fade>
  );
}
