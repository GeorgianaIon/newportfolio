"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// Easter egg: "loves me, loves me not". Each tap plucks one petal, which flutters away.
// After the last petal a speech bubble pops out of the flower, then the petals grow back.

const PETALS = 8;
const BUBBLE_DELAY = 600; // let the last petal start falling first
const BUBBLE_TIME = 3200;
const REGROW_TIME = 900;

type Phase = "idle" | "message" | "regrow";

type Props = {
  message: string;
  /** Which way the bubble opens, so it never runs off the screen edge. */
  side: "left" | "right";
  width: number;
  height: number;
  strokeWidth: number;
  className?: string;
  style?: CSSProperties;
};

export function PluckableDaisy({ message, side, width, height, strokeWidth, className, style }: Props) {
  const [plucked, setPlucked] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  const pluck = () => {
    if (phase !== "idle" || plucked >= PETALS) return;
    const next = plucked + 1;
    setPlucked(next);
    if (next === PETALS) {
      later(() => setPhase("message"), BUBBLE_DELAY);
      later(() => {
        setPhase("regrow");
        setPlucked(0);
      }, BUBBLE_DELAY + BUBBLE_TIME);
      later(() => setPhase("idle"), BUBBLE_DELAY + BUBBLE_TIME + REGROW_TIME);
    }
  };

  const showBubble = phase === "message";

  return (
    <div className={className ? `pluck ${className}` : "pluck"} style={{ width, height, ...style }}>
      <button
        type="button"
        className="pluck-button"
        aria-label={`Pluck a petal (${PETALS - plucked} left)`}
        onClick={pluck}
      >
        <svg
          className="sway pluck-flower"
          viewBox="0 0 80 180"
          width={width}
          height={height}
          fill="none"
          stroke="#B4513A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M40 178 C38 140 42 100 40 52" />
          <path d="M40 130 C28 124 22 112 24 100 C34 106 39 116 40 130" />
          <path d="M40 112 C52 106 58 96 57 84 C47 90 41 100 40 112" />
          {Array.from({ length: PETALS }, (_, i) => {
            const state = i < plucked ? "gone" : phase === "regrow" ? "regrow" : "on";
            return (
              <g
                key={i}
                className="petal"
                data-state={state}
                style={{ "--i": i, "--drift": i % 2 ? 1 : -1 } as CSSProperties}
              >
                <ellipse cx="40" cy="20" rx="5" ry="11" transform={`rotate(${i * 45} 40 36)`} />
              </g>
            );
          })}
          <circle cx="40" cy="36" r="5" />
        </svg>
      </button>
      {/* The bubble keeps its text while it shrinks away; the status region announces it once. */}
      <span className="bubble" data-side={side} data-show={showBubble || undefined} aria-hidden="true">
        {message}
      </span>
      <span className="sr-only" role="status">
        {showBubble ? message : ""}
      </span>
    </div>
  );
}
