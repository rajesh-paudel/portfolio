import { CalendarDays, MapPin } from "lucide-react";

const EducationCard = ({ education }) => {
  if (!education) return null;
  return (
    <article className="group relative overflow-hidden rounded-lg border border-[#dfe2e8] bg-white p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#0d530e] hover:shadow-[0_18px_40px_rgba(13,83,14,0.08)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-gray-400 text-sm font-bold text-[#0d530e]">
          {education?.id}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe2e8] px-2.5 py-1 text-xs font-medium text-zinc-500">
          <CalendarDays size={14} />
          {education?.duration}
        </span>
      </div>

      <h4 className="text-xl font-bold leading-tight text-[#111315]">
        {education?.college}
      </h4>
      <p className="mt-2 text-sm font-semibold text-[#0d530e]">
        {education?.degree}
      </p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500">
        <MapPin size={15} />
        {education?.location}
      </p>
    </article>
  );
};

export default EducationCard;
