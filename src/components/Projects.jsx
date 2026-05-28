import { FolderOpen } from "lucide-react";
import thehalton from "../assets/thehalton.png";
import workmonk from "../assets/workmonk.png";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "The Halton",
    image: thehalton,
    tech: ["HTML", "CSS", "JavaScript", "React"],
    description: [
      "Built a clean UI for a real estate listing website.",
      "Worked with a static rendering strategy for faster page delivery.",
      "Handled filtering, sorting, and pagination for listing data.",
      "Used optimized techniques for large image fetching and CDN rendering.",
    ],
  },
  {
    title: "WorkMonk",
    image: workmonk,
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
    <section
      className="bg-white px-5 py-14 text-left sm:px-8 lg:py-16"
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#20222b] text-[#20222b]">
              <FolderOpen size={21} />
            </span>
            <h3 className="text-3xl font-bold text-[#111315]">Projects</h3>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            A few projects where I practiced building real interfaces and
            production-minded features.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
