import { GraduationCap } from "lucide-react";
import EducationCard from "./EducationCard";

const educationData = [
  {
    id: "01",
    duration: "2012-2020",
    college: "Paramount Academy",
    degree: "Primary & Secondary Education",
    location: "Tokha, Nepal",
  },
  {
    id: "02",
    duration: "2020-2022",
    college: "SouthWestern State College",
    degree: "Higher Secondary Education",
    location: "Basundhara, Nepal",
  },
  {
    id: "03",
    duration: "2022-2026",
    college: "Amrit Science Campus",
    degree: "BSc. CSIT",
    location: "Lainchaur, Nepal",
  },
];

const Education = () => {
  return (
    <section
      className="mx-auto max-w-5xl px-5 py-14 text-left sm:px-8 lg:py-16"
      id="education"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#20222b] text-[#20222b]">
            <GraduationCap size={21} />
          </span>
          <h3 className="text-3xl font-bold text-[#111315]">Education</h3>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          My academic background and the path that shaped my learning journey.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {educationData.map((education) => (
          <EducationCard education={education} key={education.id} />
        ))}
      </div>
    </section>
  );
};

export default Education;
