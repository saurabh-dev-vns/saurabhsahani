import "./Experience.css";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="title-container">
          <p className="title">experience</p>
        </div>
        <div className="experience-container">
          <div className="front-end">
            <div className="front-end-title">
              <span className="title">frontend development</span>
            </div>
            <div className="container">
              <div className="e-html">
                <IoLogoHtml5 className="io-html" />
                <span className="text">Intermediate</span>
              </div>
              <div className="e-css">
                <IoLogoCss3 className="io-css" />
                <span className="text">Intermediate</span>
              </div>
              <div className="e-javascript">
                <IoLogoJavascript className="io-javascript" />

                <span className="text">Beginner</span>
              </div>
              <div className="e-react">
                <IoLogoReact className="io-react" />
                <span className="text">just started</span>
              </div>
            </div>
          </div>
          <div className="back-end">
            <div className="back-end-title">
              <span className="title">backend development</span>
            </div>
            <p className="text">In learning phase...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
