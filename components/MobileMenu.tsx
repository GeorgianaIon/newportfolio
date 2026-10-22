"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { NavLink } from "./SiteHeader";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF8F3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
        </svg>
      </button>
      <nav id={panelId} aria-label="Primary" className="menu-panel" hidden={!open}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={link.cta ? "pill pill-accent" : undefined}
            data-open-letter={link.cta || undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
