import { Code2 } from "lucide-react";
import techStackData from "../data/techStackData";

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
        {techStackData?.map((tech) => (
          <article
            className="flex w-[200px] items-center gap-3 rounded-2xl border-2 border-[#0d530e]/10 bg-white px-4 py-2 text-left transition duration-300 hover:scale-105 hover:border-[#0d530e]"
            key={tech?.id}
          >
            <img
              alt={tech?.name}
              className="h-10 w-10 rounded-md object-contain"
              src={tech?.image}
            />
            <p className="text-sm font-semibold text-[#20222b]">{tech?.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
