import { ArrowRight, FileUser } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const name = {
    color: "var(--accent)",
    fontSize: "0.95rem",
    fontWeight: "bold",
  };
  const design = {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "0",
  };
  const web = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "var(--accent)",
    margin: "0",
  };
  const content = {
    color: "rgb(106, 106, 106)",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    maxWidth: "550px",
  };
  const buttons = {
    display: "flex",
    gap: "1rem",
  };
  return (
    <section className="hero-section">
      <p style={name}>Hi I'm Rajesh Paudel</p>
      <p>
        <span style={{ ...design, display: "block", lineHeight: 1 }}>
          I design & build
        </span>
        <span style={{ ...web, display: "block", lineHeight: 1 }}>
          web applications
        </span>
      </p>
      <p style={content}>
        Full-stack developer specializing in React, Typescript and design
        systems. I can create clean, performant and user-focused web
        applications
      </p>
      <div style={buttons}>
        <Link className="hero-button" to="/#projects">
          View My Work <ArrowRight size={18} />
        </Link>

        <a className="cv-button" href="/rajesh-paudel-cv.pdf" download>
          <FileUser size={16} />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
