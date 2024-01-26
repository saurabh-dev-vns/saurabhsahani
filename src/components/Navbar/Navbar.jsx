import "./Navbar.css";
import React from 'react'
import { useState,useEffect} from 'react'

const getColorIndexFromLocalStorage = () => {
  const storedIndex = localStorage.getItem('colors');
  if (storedIndex) {
    try {
      return parseInt(storedIndex);
    } catch (error) {
      console.error('Error parsing color index from localStorage:', error);
      return 0; 
    }
  } else {
    return 0; 
  }
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [colorIndex, setColorIndex] = useState(getColorIndexFromLocalStorage());
  const colors = [
    ['#16213E', '#1A1A2E', '#E94560', '#aeccf0', '#ffffff', '#263969'],
    ['#2E4F4F', '#2C3333', '#0E8388', '#CBE4DE', '#ffffff', '#4e7f7f'],
    ['#91C8E4', '#F6F4EB', '#749BC2', '#4682A9', '#000000', '#a3d7f1'],
    ['#144272', '#0A2647', '#ff5a5a', '#70b1e9', '#ffffff', '#224d7b'],
  ];

  const handleColorChange = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  useEffect(() =>{
    const currentColors = colors[colorIndex];
    document.documentElement.style.setProperty('--primary-background', currentColors[0]);
    document.documentElement.style.setProperty('--secondary-background', currentColors[1]);
    document.documentElement.style.setProperty('--primary-font-color', currentColors[2]);
    document.documentElement.style.setProperty('--secondary-font-color', currentColors[3]);
    document.documentElement.style.setProperty('--tertiary-font-color', currentColors[4]);
    document.documentElement.style.setProperty('--image-background-color', currentColors[5]);
    localStorage.setItem('colors',JSON.stringify(colorIndex));
  },[colorIndex]);

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
          <button className="change-color" onClick={handleColorChange}>change color</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;