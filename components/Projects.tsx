import { liveApps, profile, projects, type LiveApp, type Project } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading, Tag, btnBlack, btnGray, btnWhite, container, surfaceDark } from "./ui";
import { Globe, PlayStoreIcon } from "./icons";

export function Projects() {
  return (
    <section id="projects" className="sheet bg-ink pb-32 pt-24 text-white">
      <div className={container}>
        <SectionHeading
          dark
          eyebrow="Projects"
          title="Things I've built"
          description="Apps I've designed, built and published, plus client, production and AI/ML work."
        />

        <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-white" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            Live on Google Play
          </h3>
          <a
            href={profile.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black"
          >
            <PlayStoreIcon className="h-4 w-4" /> Developer page ↗
          </a>
        </Reveal>

        <div className="mb-20 grid gap-5 lg:grid-cols-2">
          {liveApps.map((app, i) => (
            <LiveAppCard key={app.name} app={app} delay={i * 90} />
          ))}
        </div>

        <Reveal className="mb-6">
          <h3 className="text-2xl font-bold tracking-tight">More work</h3>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              delay={p.featured ? 0 : i * 80}
              className={`${surfaceDark} group flex flex-col overflow-hidden transition-colors hover:bg-white/[0.08] ${
                p.featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1.05fr_1fr]" : ""
              }`}
            >
              <div className={`grid place-items-center overflow-hidden bg-white/[0.04] p-7 ${p.featured ? "min-h-[300px] lg:min-h-[340px]" : "min-h-[210px]"}`}>
                <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                  <Visual kind={p.visual} />
                </div>
              </div>

              <div className={`flex flex-1 flex-col ${p.featured ? "justify-center p-7 sm:p-10" : "p-7"}`}>
                <div className="mb-2 text-[13px] font-medium text-white/50">{p.label}</div>
                <h3 className={`mb-3 font-bold tracking-tight ${p.featured ? "text-3xl" : "text-xl"}`}>{p.title}</h3>
                <div className="space-y-2.5 text-[15px] leading-relaxed text-white/65">
                  {p.description.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tags.map((t) => (
                    <Tag dark key={t}>
                      {t}
                    </Tag>
                  ))}
                </div>
                {p.link && (
                  <div className="mt-6">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className={`${btnWhite} py-2.5`}>
                      View code ↗
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveAppCard({ app, delay }: { app: LiveApp; delay: number }) {
  return (
    <Reveal as="article" delay={delay} className="group flex flex-col overflow-hidden rounded-3xl bg-paper text-black">
      <div className="relative grid min-h-[280px] place-items-center overflow-hidden bg-stone p-8">
        <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          <PlayStoreIcon className="h-3 w-3" /> Live
        </span>
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          {app.visual === "expense" ? <ExpenseVisual /> : <WingmailVisual />}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="mb-1 text-[13px] font-medium text-black/50">{app.tagline}</div>
        <h3 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{app.name}</h3>
        <div className="space-y-2.5 text-[15px] leading-relaxed text-black/65">
          {app.description.map((d) => (
            <p key={d}>{d}</p>
          ))}
        </div>

        <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
          {app.features.map((f) => (
            <li key={f.title} className="relative pl-6 text-sm leading-relaxed text-black/60">
              <span className="absolute left-0.5 top-[0.5em] h-2 w-2 bg-black" />
              <b className="font-semibold text-black">{f.title}.</b> {f.text}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {app.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={app.playStore} target="_blank" rel="noopener noreferrer" className={btnBlack}>
            <PlayStoreIcon className="h-4 w-4" /> Get it on Google Play
          </a>
          {app.website && (
            <a href={app.website} target="_blank" rel="noopener noreferrer" className={btnGray}>
              <Globe className="h-4 w-4" /> Website ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

// Illustrative mock-ups (not real screenshots).
function ExpenseVisual() {
  const rows = [
    { name: "Swiggy", via: "Google Pay", amt: "₹349" },
    { name: "Metro Card", via: "PhonePe", amt: "₹200" },
    { name: "Grocery Mart", via: "Paytm", amt: "₹1,120" },
  ];
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[250px] w-[150px] flex-col rounded-[26px] border-[3px] border-black bg-white p-3 shadow-xl">
        <div className="text-[9px] font-medium uppercase tracking-wider text-black/45">This month</div>
        <div className="text-xl font-bold">₹12,480</div>
        <div className="mb-2 mt-2 flex h-10 items-end gap-1">
          {[40, 65, 30, 80, 55, 95, 45].map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-black" style={{ height: `${h}%`, opacity: 0.3 + h / 140 }} />
          ))}
        </div>
        <div className="space-y-1.5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-md bg-stone px-1.5 py-1">
              <span className="leading-tight">
                <b className="block text-[9px]">{r.name}</b>
                <small className="block text-[7.5px] text-black/45">{r.via}</small>
              </span>
              <b className="text-[9px]">{r.amt}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-[150px] rounded-xl bg-white p-3 shadow-lg sm:block">
        <div className="mb-1 flex items-center gap-1.5 text-[9px] text-black/45">
          <span className="h-3 w-3 rounded bg-black" /> Payment notification
        </div>
        <div className="text-[11px] leading-snug">
          Paid <b>₹349</b> to <b>Swiggy</b>
        </div>
        <div className="mt-2 rounded-full bg-black px-2 py-1 text-center text-[9px] font-semibold text-white">✓ Auto-logged</div>
      </div>
    </div>
  );
}

function WingmailVisual() {
  return (
    <div className="relative h-[230px] w-[290px] sm:w-[340px]">
      <svg viewBox="0 0 340 230" className="absolute inset-0 h-full w-full text-black" fill="none">
        <path d="M40 180 C 110 30, 230 30, 300 150" stroke="currentColor" strokeWidth="2" strokeDasharray="6 7" opacity="0.5" />
        <circle cx="40" cy="180" r="6" fill="currentColor" />
        <rect x="294" y="144" width="12" height="12" stroke="currentColor" strokeWidth="2.5" fill="white" />
        <g transform="translate(150 50)" fill="currentColor">
          <path d="M0 18c8-2 14-8 18-16 2 6 1 12-3 17 7-3 14-3 20 1-6 2-11 6-14 11-9 3-17 1-21-13z" />
        </g>
      </svg>
      <span className="absolute bottom-3 left-2 text-[11px] font-medium text-black/50">from you</span>
      <span className="absolute bottom-10 right-0 text-[11px] font-medium text-black/50">to them</span>
      <div className="absolute left-1/2 top-[112px] w-[170px] -translate-x-1/2 rounded-lg bg-white p-3 shadow-xl">
        <div className="relative mb-2 h-10 overflow-hidden rounded bg-stone">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-black/25">
            <path d="M0 0 L50 24 L100 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="absolute left-1/2 top-3 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-black text-[8px] font-bold text-white">W</span>
        </div>
        <div className="flex justify-between text-[9px] font-medium text-black/50">
          <span>sealed</span>
          <span>lands when it lands</span>
        </div>
      </div>
    </div>
  );
}

function Terminal({ children, narrow }: { children: React.ReactNode; narrow?: boolean }) {
  return (
    <div className={`w-full rounded-xl bg-black font-mono text-xs text-white/75 shadow-2xl ring-1 ring-white/10 ${narrow ? "max-w-[250px]" : "min-w-[260px] max-w-sm"}`}>
      <div className="flex gap-1.5 border-b border-white/10 px-3 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
      </div>
      <pre className="whitespace-pre-wrap px-4 py-3.5 leading-relaxed">{children}</pre>
    </div>
  );
}

function Phone({ rows = 3, short }: { rows?: number; short?: boolean }) {
  return (
    <div className={`flex w-[122px] flex-col gap-2 rounded-[22px] border-[3px] border-white/80 bg-black p-2.5 shadow-xl ${short ? "h-[186px] opacity-70" : "h-[218px]"}`}>
      <div className="mb-1 h-2 w-1/2 rounded bg-white" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex h-8 items-center gap-1.5 rounded-lg bg-white/10 px-2">
          <i className="h-4 w-4 rounded-full bg-white/60" />
          <u className="h-1.5 flex-1 rounded bg-white/25" />
        </div>
      ))}
      <div className="mt-auto h-6 rounded-full bg-white" />
    </div>
  );
}

function Visual({ kind }: { kind: Project["visual"] }) {
  const c = "text-white/40";
  const w = "font-semibold text-white";
  if (kind === "api")
    return (
      <Terminal>
        <span className={c}># POST /predict</span>
        {"\n{\n"}
        {'  "genre": "Action",\n'}
        {'  "age": '}<span className={w}>30</span>{",\n"}
        {'  "height_cm": '}<span className={w}>180</span>{",\n"}
        {'  "min_rating": '}<span className={w}>7.5</span>{",\n"}
        {'  "awards": '}<span className={w}>true</span>
        {"\n}\n"}
        <span className={w}>✓ 200 OK</span> <span className={c}>→ top 5 actor matches</span>
      </Terminal>
    );
  if (kind === "phones")
    return (
      <div className="flex items-end gap-3.5">
        <Phone />
        <Phone rows={2} short />
      </div>
    );
  if (kind === "phone") return <Phone rows={4} />;
  return (
    <Terminal narrow>
      <span className={w}>df</span>
      {' = pd.read_csv("sales.csv")\n'}
      {'df.groupby("region")\n  .sum().plot()\n'}
      <span className={c}># → insights ✓</span>
    </Terminal>
  );
}
