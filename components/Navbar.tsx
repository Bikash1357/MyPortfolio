"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";
import { Close, Menu } from "./icons";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.toLowerCase());
        if (el && y >= el.offsetTop - 120) current = l.toLowerCase();
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-ink/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-[22px] font-bold tracking-tight">
          {profile.firstName}
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === l.toLowerCase() ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-stone md:inline-flex"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] bg-white" style={{ width: `${progress}%` }} />

      <div className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? "max-h-[480px]" : "max-h-0"}`}>
        <ul className="space-y-1 border-t border-white/10 px-5 py-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-white/80 hover:bg-white/10 hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-paper py-3 text-center font-medium text-ink"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
