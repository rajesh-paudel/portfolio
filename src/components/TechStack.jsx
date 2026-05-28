import { Code2 } from "lucide-react";

const techStackData = [
  {
    id: 1,
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 8,
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 9,
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 11,
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 12,
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 13,
    name: "Vite",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  },
  {
    id: 14,
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    id: 15,
    name: "Postman",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const TechStack = () => {
  return (
    <section
      className="mx-auto max-w-5xl px-5 py-14 text-left sm:px-8 lg:py-24"
      id="tech-stack"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#20222b] text-[#20222b]">
            <Code2 size={21} />
          </span>
          <h3 className="text-3xl font-bold text-[#111315]">Tech Stack</h3>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          Tools and technologies I have been learning and building with.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-6">
        {techStackData.map((tech) => (
          <article
            className="flex w-[200px] items-center gap-3 rounded-2xl border-2 border-[#0d530e]/10 bg-white px-4 py-2 text-left transition duration-300 hover:scale-105 hover:border-[#0d530e]"
            key={tech.id}
          >
            <img
              alt={tech.name}
              className="h-10 w-10 rounded-md object-contain"
              src={tech.image}
            />
            <p className="text-sm font-semibold text-[#20222b]">{tech.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
