import { skills } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading, Tag, container, surfaceDark } from "./ui";
import { Chart, Code, GitBranch, Monitor, Network } from "./icons";

const icons = [Code, Monitor, Chart, Network, GitBranch];
// First two cards span half the row, the remaining three a third each (on large screens).
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2 sm:col-span-2"];

export function Skills() {
  return (
    <section id="skills" className="sheet bg-graphite pb-32 pt-24 text-white">
      <div className={container}>
        <SectionHeading
          dark
          eyebrow="Skills"
          title="My technical toolkit"
          description="The languages, frameworks and concepts I use to design, build and ship software."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skills.map((group, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={group.title} delay={i * 70} className={`${surfaceDark} p-7 transition-colors hover:bg-white/[0.08] ${spans[i]}`}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                    <small className="text-[13px] text-white/50">{group.caption}</small>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Tag dark key={s}>
                      {s}
                    </Tag>
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
