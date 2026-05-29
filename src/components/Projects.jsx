import { FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

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
          {projectData?.map((project) => (
            <ProjectCard key={project?.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
