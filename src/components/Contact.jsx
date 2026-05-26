import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-section-top">
        <div className="contact-section-header">
          <CiMail className="contact-section-icon" size={30} />
          <h3 style={{ margin: "5px" }}>Get In Touch</h3>
        </div>
        <p className="contact-header-desc">
          Let's discuss your next project or just say hello!
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-left-title">Let's connect</h1>
          <p className="contact-left-description">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                rows="8"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {isSubmitted && (
              <p className="contact-form-message">Thanks for reaching out.</p>
            )}
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
