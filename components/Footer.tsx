"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";
import { container } from "./ui";
import { ArrowUp } from "./icons";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "Google Play", href: profile.playStore },
  { label: "LinkedIn", href: profile.linkedin },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="sheet bg-ink text-white">
        <div className={`${container} pb-12 pt-16`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-3xl font-bold tracking-tight">{profile.firstName}</div>
              <p className="mt-2 text-white/55">{profile.title} · {profile.location}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-10 text-sm text-white/45">
            © {new Date().getFullYear()} {profile.name}. Designed &amp; built by me.
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-paper text-ink shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-all duration-300 hover:scale-105 ${
          showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
