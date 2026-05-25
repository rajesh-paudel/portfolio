import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/" onClick={closeSidebar}>
            Rajesh Paudel
          </Link>
        </div>
        <div className="nav-desktop">
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/#tech-stack">Tech Stack</a>
            </li>
            <li>
              <a href="/#education">Education</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-actions">
          <button className="hire-button">Hire Me</button>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isSidebarOpen}
          onClick={toggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`sidebar-backdrop ${isSidebarOpen ? "is-visible" : ""}`}
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${isSidebarOpen ? "is-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Link to="/" onClick={closeSidebar}>
              Rajesh Paudel
            </Link>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close navigation menu"
            onClick={closeSidebar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className="nav-links sidebar-links">
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <a href="/#tech-stack" onClick={closeSidebar}>
              Tech Stack
            </a>
          </li>
          <li>
            <a href="/#education" onClick={closeSidebar}>
              Education
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={closeSidebar}>
              Projects
            </a>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>
        <button className="hire-button sidebar-hire-button">Hire Me</button>
      </aside>
    </>
  );
};

export default Navbar;
