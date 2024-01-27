import "./Footer.css";
import React from 'react'
import { useState} from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    const [activeNav, setActiveNav] = useState('#home');
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-conatiner">
          <div className="footer-text">Copyright &copy; <span>{year}</span>. All rights are reserved</div>
          <div className="footer-links">
          <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}>
            home
          </a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>
            about
          </a>
          <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}>
          experience
          </a>
          <a href="#projects"  onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}>
          projects
          </a>
          <a href="#contact"  onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active': ''}>
            contact
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
