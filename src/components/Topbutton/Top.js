import React from "react";
import "./Top.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  border: 3px solid ${({ theme }) => theme.background};
  border-color: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  width: 50px;
  height: 50px;
  outline: none;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  color: white;
  text-align: center;
  position: fixed;
  cursor: pointer;
  right: 30px;
  bottom: 30px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  }`;

export default function Top({ isDark }) {
  (() => {
    if (isDark) {
      document.documentElement.style.setProperty("--arrow", "#ffc800");
      return;
    }
    document.documentElement.style.setProperty("--arrow", "#8c00ff");
    return;
  })();

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <Button
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
    >
      <i class="fas fa-hand-point-up" aria-hidden="true"></i>
    </Button>
  );
}
