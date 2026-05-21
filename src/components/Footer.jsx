import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">Rajesh Paudel</div>
          <p>
            Creating polished web applications with React, Typescript, and clean
            design.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-meta">
          <p>Made with React + Vite</p>
          <p>© {new Date().getFullYear()} Rajesh Paudel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
