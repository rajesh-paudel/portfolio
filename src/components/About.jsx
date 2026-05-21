import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-image"></div>
      </div>
      <div className="about-right">
        <h2>About Me</h2>
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
            href="https://www.linkedin.com/in/rajesh-paudel-9a1b4b1b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rajeshpaudel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/rajeshpaudel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/rajesh.paudel.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/rajeshpaudel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
