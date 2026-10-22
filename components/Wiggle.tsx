"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Plays the .wiggle animation once when scrolled into view, then again on each hover.
// A hover mid-wiggle is ignored so the motion always finishes instead of snapping back.
export function Wiggle({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className ? `wiggle ${className}` : "wiggle"}
      data-playing={playing || undefined}
      onPointerEnter={() => setPlaying(true)}
      onAnimationEnd={() => setPlaying(false)}
    >
      {children}
    </div>
  );
}
