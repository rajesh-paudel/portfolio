import React from "react";
import { FaFolderOpen } from "react-icons/fa";

const projectData = [
  {
    title: "The Halton",
    image: "/thehalton.png",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    description: [
      "Built a clean UI for a real estate listing website.",
      "Worked with a static rendering strategy for faster page delivery.",
      "Handled filtering, sorting, and pagination for listing data.",
      "used optimized techniques for large amount of image fetching and rendering from cdn",
    ],
  },
  {
    title: "WorkMomk",
    image: "/image.png",
    tech: ["React", "Next.js", "Python"],
    description: [
      "Updated email sending from Resend to Mailgun for a more reliable workflow.",
      "Improved UI details for a smoother user experience.",
      "Integrated a component-based email creation tool.",
      "Built a component-based form generation flow inspired by Typeform.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-section-header">
        <FaFolderOpen className="projects-section-icon" size={30} />
        <h3>Projects</h3>
      </div>
      <p className="section-subtitle">
        A few projects where I practiced building real interfaces and features.
      </p>

      <div className="projects-container">
        {projectData.map((p) => (
          <article className="projects-card" key={p.title}>
            <img className="project-image" src={p.image} alt={p.title} />

            <div className="project-content">
              <h4 className="project-title">{p.title}</h4>
              <p className="project-tech">
                <span>Tech:</span> {p.tech.join(", ")}
              </p>

              <ul className="project-description-list">
                {p.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
