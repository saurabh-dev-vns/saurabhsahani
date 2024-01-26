import "./Contact.css";
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="title-container">
          <p className="title">contact</p>
        </div>
        <div className="contact-container">
          <span className="co">Don't be shy! Hit me up! 👇</span>
          <div className="c-mail">
            <div className="io-mail">
              <span className="io">
                <IoMailOpenOutline />
              </span>
            </div>
            <div className="text-mail">
              <span className="mail-text">mail</span>
              <span className="mail-to">saurabhsahani000@yahoo.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
