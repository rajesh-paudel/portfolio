import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Rajesh Paudel</div>
      <div>
        <ul className="nav-links">
          <li>About</li>

          <li>Skills</li>

          <li>Projects</li>

          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className="hire-button">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
