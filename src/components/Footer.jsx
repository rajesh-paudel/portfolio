import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-headers">
          <div className="footer-slogan">
            <p>Building ideas into reality through code</p>
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
            <p className="footer-link">Email:rajeshpaudel9863@gmail.com</p>
            <p className="footer-link">Phone: +977 9863-123456</p>
            <p className="footer-link">Address: Kathmandu, Nepal</p>
          </div>
          <div className="footer-company">
            <h3 className="footer-links-header">Company</h3>
            <p className="footer-link">
              <Link to="/about">About Us</Link>
            </p>
            <p className="footer-link">
              <Link to="/#contact">Contact</Link>
            </p>
            <p className="footer-link">
              <Link to="/pricing">Pricing</Link>
            </p>
          </div>
          <div className="footer-help">
            <h3 className="footer-links-header">Help</h3>
            <p className="footer-link">
              <Link to="/help">FAQ</Link>
            </p>
            <p className="footer-link">
              <Link to="/help">Support</Link>
            </p>
          </div>
          <div className="footer-follow">
            <h3 className="footer-links-header">Follow Us</h3>
            <div
              className="about-socials"
              style={{ display: "flex", gap: "15px" }}
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
