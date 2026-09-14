"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  onReveal,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  onReveal?: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          onReveal?.();
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onReveal]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
