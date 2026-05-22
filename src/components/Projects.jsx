import React from "react";
import { FaFolderOpen } from "react-icons/fa";

const projectData = [
  {
    title: "The Halton",
    image: "/thehalton.png",
    tech: "React, Vite, CSS",
    summary: "A premium landing page experience for a real estate brand.",
  },
  {
    title: "Task Manager",
    image: "/about.png",
    tech: "React, LocalStorage",
    summary: "A productivity app for creating, organizing, and tracking tasks.",
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-section-header">
        <FaFolderOpen className="projects-section-icon" size={30} />
        <h3>Projects</h3>
      </div>

      <div className="projects-container">
        {projectData.map((p) => (
          <div className="projects-card" key={p.title}>
            <div className="project-flip">
              <div className="project-face project-front">
                <div className="project-image-wrap">
                  <img className="project-image" src={p.image} alt={p.title} />
                </div>
                <div className="project-front-info">
                  <h3 className="project-name">{p.title}</h3>
                  <p className="project-techstack">{p.tech}</p>
                </div>
              </div>
              <div className="project-face project-back">
                <div className="project-back-content">
                  <p className="project-kicker">Description</p>
                  <p className="projects-desc">{p.summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
