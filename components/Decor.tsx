import type { SVGProps } from "react";

// Hand-drawn botanical ornaments from the design. All are purely decorative.
type Props = SVGProps<SVGSVGElement>;

const line = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

// Plants rock gently from their stem base (see .sway in globals.css).
const sway = (className?: string) => (className ? `sway ${className}` : "sway");

export function Fern({ bud = true, className, ...props }: Props & { bud?: boolean }) {
  return (
    <svg viewBox="0 0 90 200" aria-hidden="true" focusable="false" {...line} {...props} className={sway(className)}>
      <path d="M45 198 C44 150 47 100 45 12" />
      <path d="M45 160 C30 156 20 144 18 128 C32 130 42 142 45 160" />
      <path d="M45 132 C60 128 70 116 72 100 C58 102 48 114 45 132" />
      <path d="M45 104 C31 100 22 88 21 73 C34 76 43 87 45 104" />
      <path d="M45 78 C58 74 66 63 67 49 C55 52 47 62 45 78" />
      <path d="M45 52 C35 48 29 39 29 28 C38 31 44 40 45 52" />
      {bud && <path d="M45 12 C41 8 41 3 45 1 C49 3 49 8 45 12" />}
    </svg>
  );
}

export function Daisy({ petals = 8, leaves = 2, className, ...props }: Props & { petals?: number; leaves?: 1 | 2 }) {
  const step = 360 / petals;
  return (
    <svg viewBox="0 0 80 180" aria-hidden="true" focusable="false" {...line} {...props} className={sway(className)}>
      <path d="M40 178 C38 140 42 100 40 52" />
      <path d="M40 130 C28 124 22 112 24 100 C34 106 39 116 40 130" />
      {leaves === 2 && <path d="M40 112 C52 106 58 96 57 84 C47 90 41 100 40 112" />}
      <circle cx="40" cy="36" r="5" />
      {Array.from({ length: petals }, (_, i) => (
        <ellipse key={i} cx="40" cy="20" rx="5" ry="11" transform={`rotate(${i * step} 40 36)`} />
      ))}
    </svg>
  );
}

export function Tulip({ leaves = 2, className, ...props }: Props & { leaves?: 1 | 2 }) {
  return (
    <svg viewBox="0 0 80 180" aria-hidden="true" focusable="false" {...line} {...props} className={sway(className)}>
      <path d="M40 178 C40 140 40 100 40 60" />
      <path d="M40 60 C28 58 22 44 24 28 C30 34 34 36 40 30 C46 36 50 34 56 28 C58 44 52 58 40 60Z" />
      <path d="M40 150 C24 140 18 120 20 100 C32 112 38 128 40 150" />
      {leaves === 2 && <path d="M40 128 C54 120 60 104 58 88 C48 98 42 112 40 128" />}
    </svg>
  );
}

export function Blossom(props: Props) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" focusable="false" fill="#FCEDE6" stroke="#B4513A" strokeWidth="3" {...props}>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="40" cy="22" rx="8" ry="15" transform={`rotate(${r} 40 40)`} />
      ))}
      <circle cx="40" cy="40" r="7" />
    </svg>
  );
}

export function Sparkle({ color, ...props }: Props & { color: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" {...props}>
      <path d="M10 0 C11 7 13 9 20 10 C13 11 11 13 10 20 C9 13 7 11 0 10 C7 9 9 7 10 0Z" fill={color} />
    </svg>
  );
}

export function Heart({ color, ...props }: Props & { color: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" {...props}>
      <path d="M10 17 C 3 12, 0.5 7, 3.5 4 C 6 1.6, 9 3, 10 5.4 C 11 3, 14 1.6, 16.5 4 C 19.5 7, 17 12, 10 17 Z" fill={color} />
    </svg>
  );
}

export function Bow(props: Props) {
  return (
    <svg viewBox="0 0 80 50" aria-hidden="true" focusable="false" {...line} stroke="#B4513A" {...props}>
      <path d="M36 21 C 24 6, 6 6, 7 18 C 8 30, 24 29, 36 25" />
      <path d="M44 21 C 56 6, 74 6, 73 18 C 72 30, 56 29, 44 25" />
      <path d="M30 12 C 26 11, 20 12, 17 16" />
      <path d="M50 12 C 54 11, 60 12, 63 16" />
      <rect x="35.5" y="18.5" width="9" height="8.5" rx="3.5" fill="#FFB399" />
      <path d="M37 27 C 34 34, 31 40, 27 47 L 32 45 L 34 49" />
      <path d="M43 27 C 46 34, 49 40, 53 47 L 48 45 L 46 49" />
    </svg>
  );
}

export function Squiggle(props: Props) {
  return (
    <svg viewBox="0 0 160 12" aria-hidden="true" focusable="false" fill="none" stroke="#B4513A" {...props}>
      <path d="M0 6 Q10 0 20 6 T40 6 T60 6 T80 6 T100 6 T120 6 T140 6 T160 6" />
    </svg>
  );
}

// Scalloped polaroid edge: 18 arcs across, 23 down, each 8px wide.
const scallop = (dx: number, dy: number, n: number) => ` a4 4 0 0 1 ${dx} ${dy}`.repeat(n);
const polaroidPath = `M0 0${scallop(8, 0, 18)}${scallop(0, 8, 23)}${scallop(-8, 0, 18)}${scallop(0, -8, 23)} Z`;

export function PolaroidEdge(props: Props) {
  return (
    <svg viewBox="-5 -5 154 194" width="154" height="194" aria-hidden="true" focusable="false" {...props}>
      <path d={polaroidPath} fill="#FFF8F3" stroke="#F3C8B8" strokeWidth="1" />
    </svg>
  );
}
