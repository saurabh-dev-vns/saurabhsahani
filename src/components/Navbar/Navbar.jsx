import "./Navbar.css";
import React from 'react'
import { useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <div className="nav-conatiner">
        <div className="logo-conatiner">
          <span className="logo">saurabh <span>sahani</span></span>
        </div>

        <div className="nav-links">
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
          <button className="change-color">change color</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
