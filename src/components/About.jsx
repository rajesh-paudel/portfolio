import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaG } from "react-icons/fa6";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-image">
          <img src="/about.png" width={300} alt="Rajesh Paudel" />
        </div>
      </div>
      <div className="about-right">
        <h2 style={{ marginBottom: "0px" }}>About Me</h2>
        <p className="about-name">Rajesh Paudel - Frontend Developer</p>
        <p className="about-content">
          I am a passionate web developer with a strong focus on creating
          responsive and user-friendly websites. With experience in both
          frontend and backend development, I enjoy crafting seamless digital
          experiences. I am dedicated to continuous learning and staying updated
          with the latest technologies in the web development world.
        </p>
        <div className="about-socials">
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
    </section>
  );
};
export default About;
