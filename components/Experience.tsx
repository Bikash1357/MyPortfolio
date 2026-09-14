import { experience } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading, Tag, container, surface } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="sheet bg-stone pb-32 pt-24">
      <div className={container}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Full-time, internship and freelance work on production apps, data and machine learning."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-3 left-[7px] top-3 w-[2px] bg-black sm:left-[11px]" />

          {experience.map((job) => {
            const current = job.date.includes("Present");
            return (
              <Reveal key={job.company} className={`${surface} relative mb-4 p-6 sm:p-8`}>
                <span
                  className={`absolute -left-[32px] top-9 h-4 w-4 rounded-full border-[3px] border-black sm:-left-[36px] ${
                    current ? "bg-ink" : "bg-stone"
                  }`}
                />

                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{job.role}</h3>
                    <div className="mt-1 text-[17px] font-medium text-black/60">
                      {job.company}
                      {job.client && <span className="text-black/45"> · {job.client}</span>}
                    </div>
                  </div>
                  <span
                    className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium ${
                      current ? "bg-ink text-white" : "bg-stone text-ink"
                    }`}
                  >
                    {job.date}
                  </span>
                </div>

                <ul className="my-6 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-6 text-[15px] leading-relaxed text-black/70">
                      <span className="absolute left-0.5 top-[0.55em] h-2 w-2 bg-black" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
