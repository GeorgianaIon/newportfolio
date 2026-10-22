import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export type NavLink = { href: string; label: string; cta?: boolean };

const links: NavLink[] = [
  { href: "/#journey", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Let's talk", cta: true },
];

// On hover the "Let's talk" label lifts away and this hand-drawn arrow draws itself in its place,
// curling through a loop before the head appears. pathLength="1" lets CSS draw it with a 0→1 dash.
function LoopArrow() {
  return (
    <svg className="talk-arrow" viewBox="0 0 56 16" width="70" height="20" fill="none" aria-hidden="true" focusable="false">
      <path pathLength={1} d="M1 9 C 9 9, 15 10, 21 8 C 26 6.3, 28 2, 24.5 1.5 C 21 1, 20.5 7, 26 9.5 C 32 12, 42 10, 54 8" />
      <path pathLength={1} className="talk-arrow-head" d="M49 4.5 L54.5 8 L49.5 12" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">
        Georgiana Ion
      </Link>
      <nav aria-label="Primary" className="desktop-nav">
        {links.map((link) =>
          link.cta ? (
            <Link key={link.href} href={link.href} className="pill pill-accent talk" data-open-letter>
              <span className="talk-label">{link.label}</span>
              <LoopArrow />
            </Link>
          ) : (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ),
        )}
      </nav>
      <MobileMenu links={links} />
    </header>
  );
}
