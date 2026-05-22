import React from "react";

import { ArrowRight, FileUser } from "lucide-react";
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
        <button className="hero-button">
          View My Work <ArrowRight size={18} />
        </button>

        <button className="cv-button">
          <FileUser size={16} />
          <span>Download CV</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
