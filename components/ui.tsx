import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className={`mb-4 text-sm font-medium ${dark ? "text-white/55" : "text-black/50"}`}>{eyebrow}</div>
      <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/65" : "text-black/60"}`}>{description}</p>}
    </Reveal>
  );
}

export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`rounded-full px-3 py-1 text-[13px] font-medium ${dark ? "bg-white/10 text-white/85" : "bg-black/[0.06] text-black/75"}`}>
      {children}
    </span>
  );
}

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200";

export const btnBlack = `${pill} bg-ink text-white hover:bg-[#2a2a2e]`;
export const btnWhite = `${pill} bg-paper text-ink hover:bg-stone`;
export const btnGray = `${pill} bg-stone text-ink hover:bg-[#e0ded8]`;
export const btnDarkGray = `${pill} bg-white/10 text-white hover:bg-white/15`;

export const surface = "rounded-2xl bg-paper";
export const surfaceDark = "rounded-2xl bg-white/[0.05]";
