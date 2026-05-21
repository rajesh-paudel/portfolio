import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <div className="contact-item">
            <div className="contact-label">Email:</div>
            <div className="contact-info"> rajeshpaudel9863@email.com </div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Phone:</div>
            <div className="contact-info">456-7890 </div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Address:</div>
            <div className="contact-info">Tokha-8, Kathmandu</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Follow Us</div>
            <div
              className="about-socials"
              style={{ gap: "20px", marginTop: "5px" }}
            >
              <a
                href="https://www.linkedin.com/in/rajesh-paudel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/rajesh-paudel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="contact-inputs">
              <div className="form-item">
                <label htmlFor="name" className="form-item-label">
                  Your Name
                </label>
                <input
                  placeholder="Your full name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="email" className="form-item-label">
                  Email address
                </label>
                <input
                  placeholder="Your email address"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="message" className="form-item-label">
                Message
              </label>
              <textarea
                placeholder="Write Something..."
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
