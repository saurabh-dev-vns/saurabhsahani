import "./Footer.css";
import React from "react";
import { useState } from "react";
import {  IoHeart, IoLogoReact } from "react-icons/io5";


const Footer = () => {
  const year = new Date().getFullYear();
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-conatiner">
          <div className="footer-text">
            <span className="text-1">
              {" "}
              Copyright &copy; <span>{year}</span>. All rights are reserved
            </span>
            <pre className="text-2">Made with <IoHeart className="io-heart"/>  in  <IoLogoReact className="io-react-2"/></pre>
          </div>
          <div className="footer-links">
            <a
              href="#home"
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ? "active" : ""}
            >
              home
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              about
            </a>
            <a
              href="#experience"
              onClick={() => setActiveNav("#experience")}
              className={activeNav === "#experience" ? "active" : ""}
            >
              experience
            </a>
            <a
              href="#projects"
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              projects
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
