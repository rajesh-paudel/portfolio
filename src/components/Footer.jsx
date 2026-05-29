import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactInfo from "../data/contactinfo";

const Footer = () => {
  const { email, phone, address, instagram, facebook, linkedin, github } =
    ContactInfo;
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-headers mb-5 ">
          <div className="footer-slogan">
            <p className="leading-12">
              Building ideas into reality through code
            </p>
          </div>
          <div className="footer-contact">
            <p className="footer-contact-header">Get In Touch!</p>
            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-email-input"
              />
              <button className="footer-subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-contact-info">
            <h3 className="footer-links-header">Contact Us</h3>
            <a
              className="footer-link flex items-center gap-2 "
              href={`mailto:${email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
              <span>{email}</span>
            </a>
            <a
              className="footer-link flex items-center gap-2"
              href={`tel:${phone}`}
            >
              <FaPhoneAlt />
              <span>{phone}</span>
            </a>
            <p className="footer-link flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{address}</span>
            </p>
          </div>
          <div className="footer-company">
            <h3 className="footer-links-header">Company</h3>
            <p className="footer-link">
              <Link to="/about">About</Link>
            </p>
            <p className="footer-link">
              <Link to="/#contact">Contact</Link>
            </p>
            <p className="footer-link">
              <Link to="/blog">Blog</Link>
            </p>
          </div>
          <div className="footer-help">
            <h3 className="footer-links-header">Help</h3>
            <p className="footer-link">
              <Link to="/faq">FAQ</Link>
            </p>
            <p className="footer-link">
              <Link to="/#projects">Projects</Link>
            </p>
          </div>
          <div className="footer-follow">
            <h3 className="footer-links-header">Follow Us</h3>
            <div
              className="about-socials"
              style={{ display: "flex", gap: "15px" }}
            >
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>&copy; 2026 Rajesh Paudel. All rights reserved.</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
