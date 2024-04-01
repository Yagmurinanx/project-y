import React from "react";
import "../index.css";
import githubIcon from "../assets/icons/github-alt.svg";
import linkedinIcon from "../assets/icons/linkedin-in.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div id="footer-group">
        <a className="footer-element" href="https://github.com/Yagmurinanx">
          <img src={githubIcon} alt="Github icon" width="16" height="16" />
        </a>
        <div className="small ml-5 mr-5 text-dark">Yağmur İnan 2024</div>
        <a
          className="footer-element"
          href="https://www.linkedin.com/in/yagmur-inan-/"
        >
          <img src={linkedinIcon} alt="LinkedIn icon" width="16" height="16" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
