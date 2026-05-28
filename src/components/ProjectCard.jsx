import { CheckCircle2, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#dfe2e8] bg-white text-left transition duration-300 hover:-translate-y-1 hover:border-[#0d530e] hover:shadow-[0_18px_40px_rgba(13,83,14,0.08)]">
      <div className="relative overflow-hidden border-b border-[#dfe2e8] bg-[#f7f8f4]">
        <img
          alt={project.title}
          className="h-48 w-full object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
          src={project.image}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0d530e]">
              Featured project
            </p>
            <h4 className="mt-1 text-xl font-bold leading-tight text-[#111315]">
              {project.title}
            </h4>
          </div>
          {project.url && (
            <a
              aria-label={`Open ${project.title}`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              href={project.url}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              className="rounded-full bg-[#0d530e]/10 px-2.5 py-1 text-xs font-semibold text-[#0d530e]"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-4 space-y-2.5">
          {project.description.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-zinc-600" key={item}>
              <CheckCircle2
                className="mt-0.5 shrink-0 text-[#0d530e]"
                size={17}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
