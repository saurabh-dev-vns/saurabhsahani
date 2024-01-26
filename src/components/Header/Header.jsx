import "./Header.css";
import Profile from "../images/img-1.png";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import Mail from "../Mail/Mail";
const Header = () => {
  return (
    <>
      <section className="main" id="home">
        <div className="conatiner">
            <Navbar />
            <Social />
          <div className="contenet">
            <div className="image-content">
              <img src={Profile} alt="img-1" />
            </div>
            <div className="text-content">
              <p>
                <span>Hi, Friends!</span>
                <br />
                <span>
                  I'm a <span className="text-color">Coding Learner</span>,
                  exploring the world of{" "}
                  <span className="text-color">Programming</span> to create{" "}
                  <span className="text-color">Digital Solutions </span>and bring{" "}
                  <span className="text-color"> Ideas</span> to{" "}
                  <span className="text-color">Life</span>.
                </span>
              </p>
            </div>
          </div>
          <Mail />
        </div>
      </section>
    </>
  );
};


export default Header;