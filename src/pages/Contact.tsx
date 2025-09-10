import "../App.css";
import "../components/contact.css";
import ContactImage from "../assets/contact/contactImage.jpg";

function Contact() {
  return (
    <>
      <div className="container">
        <h1>
          <br></br>Contact<br></br>
          <br></br>{" "}
        </h1>
      </div>

      <div className="contacts-container">
        <div className="contact-details-container">
          <div className="contacts-text ">
            <h1>
              <br></br>Phone: +44 7500 464211<br></br>
              <br></br>{" "}
            </h1>
          </div>

          <div className="contacts-text">
            <h1>
              <br></br>Email: YaqubRahman999@gmail.com<br></br>
              <br></br>{" "}
            </h1>
          </div>
          <div className="contacts-text">
            <h1>
              <br />
              Github:
              <br />
              <a href="https://github.com/YaqubRahman">
                https://github.com/YaqubRahman
              </a>
              <br />
              <br />
            </h1>
          </div>

          <div className="contacts-text">
            <h1>
              <br />
              Linkedin:
              <br />
              <a href="https://www.linkedin.com/in/yaqub-r">
                https://www.linkedin.com/in/yaqub-r
              </a>
              <br />
              <br />
            </h1>
          </div>
        </div>
        <img src={ContactImage} alt="Contact" className="contact-image" />

        <div className="hero-subtitle">
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
