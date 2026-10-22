"use client";

import Image from "next/image";
import { useState } from "react";
import { PolaroidEdge } from "./Decor";
import portrait from "@/public/images/georgiana-ion.jpg";

// Easter egg: tapping the polaroid flips it over, and on the back a few tulips grow for ~2s.
// Tapping again flips back to the photo; every flip to the back replays the growth.

// Tulip geometry from the Decor <Tulip>, drawn in its own 80×180 box.
const tulips = [
  { x: 28, scale: 0.6, delay: 0 },
  { x: 64, scale: 0.74, delay: 0.35 },
  { x: 99, scale: 0.54, delay: 0.7 },
];

function TulipGarden() {
  return (
    <svg className="garden" viewBox="0 0 126 141" aria-hidden="true" focusable="false">
      {tulips.map((t) => (
        <g key={t.x} transform={`translate(${t.x - 40 * t.scale} ${141 - 180 * t.scale}) scale(${t.scale})`}>
          <g className="garden-tulip" style={{ animationDelay: `calc(var(--flip-time) + ${t.delay}s)` }}>
            <path d="M40 178 C40 140 40 100 40 60" />
            <path d="M40 150 C24 140 18 120 20 100 C32 112 38 128 40 150" />
            <path d="M40 128 C54 120 60 104 58 88 C48 98 42 112 40 128" />
            <path className="garden-bloom" d="M40 60 C28 58 22 44 24 28 C30 34 34 36 40 30 C46 36 50 34 56 28 C58 44 52 58 40 60Z" />
          </g>
        </g>
      ))}
    </svg>
  );
}

export function Polaroid() {
  const [flipped, setFlipped] = useState(false);
  // Remounting the garden restarts its CSS animation on every flip to the back.
  const [blooms, setBlooms] = useState(0);

  const flip = () => {
    if (!flipped) setBlooms((n) => n + 1);
    setFlipped((f) => !f);
  };

  return (
    <div className="polaroid">
      <button
        type="button"
        className="polaroid-card"
        data-flipped={flipped || undefined}
        aria-pressed={flipped}
        aria-label={flipped ? "Flip the polaroid back to the photo" : "Flip the polaroid over"}
        onClick={flip}
      >
        <span className="polaroid-face" aria-hidden={flipped}>
          <PolaroidEdge className="polaroid-edge" />
          <Image
            src={portrait}
            alt="Georgiana Ion among tulips in a park"
            width={126}
            height={141}
            sizes="126px"
            priority
            className="polaroid-photo"
          />
          <span className="polaroid-caption">hi, it&apos;s me</span>
        </span>
        <span className="polaroid-face polaroid-back" aria-hidden={!flipped}>
          <PolaroidEdge className="polaroid-edge" />
          <span className="polaroid-photo polaroid-garden">
            <TulipGarden key={blooms} />
          </span>
          <span className="polaroid-caption">tulips for you</span>
        </span>
      </button>
    </div>
  );
}
