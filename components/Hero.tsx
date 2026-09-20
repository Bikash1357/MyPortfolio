"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";
import { btnDarkGray, btnWhite, container } from "./ui";
import { ArrowRight, Download, GitHubIcon, LinkedInIcon, MailIcon, PlayStoreIcon } from "./icons";

function useTyping(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    let w = 0, i = words[0].length, del = true;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let wait = del ? 40 : 85;
      if (!del && i === word.length) { del = true; wait = 1900; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 1900);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export function Hero() {
  const typed = useTyping(profile.roles);
  const social = "grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black";

  return (
    <header id="top" className="bg-ink pt-16 text-white">
      <div className={`${container} pt-24 pb-36 lg:pt-32 lg:pb-44`}>
        <div>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]">{profile.name}</h1>

          <div className="mt-5 text-2xl font-medium text-white/55 sm:text-3xl">
            <span className="text-white">{typed}</span>
            <span className="animate-blink ml-1 inline-block h-7 w-[3px] translate-y-1 bg-white" />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={btnWhite}>
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={btnDarkGray}>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2.5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}>
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={profile.playStore} target="_blank" rel="noopener noreferrer" aria-label="Google Play developer page" className={social}>
              <PlayStoreIcon className="h-[17px] w-[17px]" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}>
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={social}>
              <MailIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
