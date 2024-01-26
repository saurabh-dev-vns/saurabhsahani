import "./Social.css";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";



const Social = () => {
  return (
    <div className="social-media-container">
      <div className="social-icons">
        <a href="https://instagram.com/__saurabh_sahani__" rel="noreferrer"  target="_blank" className="insta">
          <IoLogoInstagram />
        </a>
        <a href="https://github.com/saurabhvns01" rel="noreferrer"  target="_blank" className="insta">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/saurabh-sahani-403b662a5/" rel="noreferrer"  target="_blank" className="insta">
          <IoLogoLinkedin />
        </a>
      </div>
      <div className="follow-me-on">follow me</div>
    </div>
  );
};

export default Social;