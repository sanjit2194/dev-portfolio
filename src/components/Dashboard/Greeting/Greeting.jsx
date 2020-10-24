import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";
import Button from "../../Button/Button";
import { greeting } from "../../utils/constants";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

const Greeting = ({ isDark }) => {
  var isCursor = false;
  const [cursor, setCursor] = useState({});
  const [title, setTitle] = useState("");
  const [titleEmoji, setTitleEmoji] = useState("");
  const [titleArrayIndex, setTitleArrayIndex] = useState(0);

  const typingDelay = 100;
  const erasingDelay = 100;
  const newTextDelay = 500;
  let localTitleArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (charIndex < greeting.titleArray[localTitleArrayIndex].length) {
      var char = greeting.titleArray[localTitleArrayIndex];
      setTitle((prevState) => prevState + char.charAt(charIndex));
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTitleEmoji(greeting.emojiArray[localTitleArrayIndex]);
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex >= 0) {
      setTitle((prevState) => prevState.slice(0, charIndex));
      setTitleEmoji("");
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      localTitleArrayIndex++;
      setTitleArrayIndex((prevState) => prevState + 1);
      if (localTitleArrayIndex >= greeting.titleArray.length) {
        localTitleArrayIndex = 0;
        setTitleArrayIndex(0);
      }
      setTimeout(type, newTextDelay);
    }
  };

  useEffect(() => {
    setInterval(() => {
      if (isCursor) {
        setCursor({
          opacity: 1,
        });
        isCursor = false;
      } else {
        setCursor({
          opacity: 0,
        });
        isCursor = true;
      }
    }, 300);

    type();
  }, []);

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {greeting.titleMain}
                <span className="wave-emoji-motion">{greeting.titleEmoji}</span>
              </h1>
              <h2 className="greeting-sub-text">
                {greeting.titlePre}
                <span
                  style={{
                    color: isDark ? "#8c00ff" : "#55198b",
                  }}
                >
                  {title}
                </span>
                <span className="wave-emoji">{emoji(titleEmoji)}</span>
                <span
                  style={{
                    ...cursor,
                    color: isDark ? "#8c00ff" : "#55198b",
                  }}
                >
                  |
                </span>
              </h2>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <p className="greeting-text-p subTitle">{greeting.subText}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Sanjit sitting on table"
              src={require("../../../assets/images/manOnTable.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
