"use client";

import { useCallback, useState } from "react";
import { stats } from "@/data/resume";
import { Reveal } from "./Reveal";
import { container } from "./ui";

export function Stats() {
  const [values, setValues] = useState(stats.map(() => 0));

  const start = useCallback(() => {
    const t0 = performance.now();
    const dur = 1400;
    const step = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setValues(stats.map((s) => s.value * e));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <div className="sheet bg-stone">
      <div className={`${container} pt-16`}>
        <Reveal onReveal={start} className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-black/10 pb-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="border-l-2 border-black pl-5">
              <b className="block text-5xl font-bold tracking-tight">
                {values[i].toFixed(s.decimals ?? 0)}
                {s.suffix ?? ""}
              </b>
              <span className="mt-1 block text-[15px] text-black/60">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
