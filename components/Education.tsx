import { achievements, certifications, education } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading, container, surface } from "./ui";
import { Award, Cap, Rocket, Star, Trophy, Users } from "./icons";

const achievementIcons = [Star, Rocket, Users];

function CardTitle({ icon: Icon, children }: { icon: typeof Cap; children: React.ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-black text-white">
        <Icon className="h-5 w-5" />
      </span>
      {children}
    </h3>
  );
}

export function Education() {
  const pct = (education.cgpa / 10) * 100;

  return (
    <section id="education" className="sheet bg-stone pb-32 pt-24">
      <div className={container}>
        <SectionHeading eyebrow="Education & Recognition" title="Education, achievements & certifications" />

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className={`${surface} p-7 sm:p-8`}>
            <CardTitle icon={Cap}>Education</CardTitle>
            <div className="text-2xl font-bold leading-snug tracking-tight">{education.degree}</div>
            <div className="mb-5 mt-2 text-black/60">{education.school}</div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-black px-3.5 py-1.5 text-[13px] font-medium text-white">{education.years}</span>
              <span className="rounded-full bg-stone px-3.5 py-1.5 text-[13px] font-medium">B.Tech · IIoT</span>
            </div>
            <div className="mt-7 flex items-center gap-5 border-t border-black/10 pt-7">
              <div
                className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full"
                style={{ background: `conic-gradient(#000 ${pct}%, #d9d6cf 0)` }}
              >
                <span className="grid h-[62px] w-[62px] place-items-center rounded-full bg-paper text-lg font-bold">{education.cgpa}</span>
              </div>
              <p className="text-[15px] text-black/60">
                <b className="text-black">CGPA {education.cgpa} / 10</b>
                <br />
                Strong grounding in IoT systems, programming and data.
              </p>
            </div>
          </Reveal>

          <Reveal className={`${surface} p-7 sm:p-8`} delay={80}>
            <CardTitle icon={Trophy}>Achievements</CardTitle>
            <ul className="space-y-2">
              {achievements.map((a, i) => {
                const Icon = achievementIcons[i];
                return (
                  <li key={a.title} className="flex items-start gap-4 rounded-xl bg-stone/70 p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[15px] text-black/60">
                      <b className="block font-semibold text-black">{a.title}</b>
                      {a.detail}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className={`${surface} p-7 sm:p-8 md:col-span-2`}>
            <CardTitle icon={Award}>Certifications</CardTitle>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((c) => (
                <div key={c.title} className="flex flex-col justify-between gap-4 rounded-xl bg-stone/70 p-5 transition-transform hover:-translate-y-1">
                  <b className="text-[15px] font-semibold leading-snug">{c.title}</b>
                  <span className="w-fit rounded-full bg-black px-2.5 py-0.5 text-xs font-medium text-white">{c.issuer}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
