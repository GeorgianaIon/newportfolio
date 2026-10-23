import { site } from "@/lib/site";
import { Tulip } from "./Decor";

export function Contact() {
  return (
    <>
      <svg className="lace" aria-hidden="true" width="100%" height="40">
        <defs>
          <pattern id="lace-bottom" width="28" height="40" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="38" r="14.6" fill="#FFB399" />
          </pattern>
        </defs>
        <rect width="100%" height="40" fill="#FCEDE6" />
        <rect width="100%" height="40" fill="url(#lace-bottom)" />
        <rect y="34" width="100%" height="6" fill="#FFB399" />
        <line x1="0" y1="11" x2="100%" y2="11" stroke="#FF9A86" strokeWidth="1.3" strokeDasharray="1 7" strokeLinecap="round" />
      </svg>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <svg className="only-desktop deco-fill" viewBox="0 0 1440 670" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
          <path d="M 720 690 C 800 650, 960 610, 1040 530 C 1090 480, 1120 360, 1180 310 C 1212 284, 1250 266, 1248 238 C 1246 202, 1196 196, 1180 238 C 1164 196, 1114 202, 1112 238 C 1110 268, 1145 300, 1180 310 C 1215 320, 1300 300, 1350 240 C 1395 186, 1420 80, 1450 -10" stroke="#FFF8F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className="only-mobile deco-fill" viewBox="0 0 390 680" preserveAspectRatio="xMidYMin slice" fill="none" aria-hidden="true">
          <path d="M -10 98 C 40 72, 90 112, 140 94 C 160 87, 178 84, 195 82 C 212 72, 226 58, 224 46 C 222 30, 200 28, 195 44 C 190 28, 168 30, 166 46 C 164 58, 178 72, 195 82 C 212 92, 250 86, 280 92 C 320 100, 360 80, 400 90" stroke="#FFF8F3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <Tulip className="contact-tulip" stroke="#FFF8F3" />

        <div className="contact-inner">
          <p className="contact-lead">Have a role or a project in mind?</p>
          <h2 id="contact-title" className="contact-title">let&apos;s create something lovely</h2>
          <p className="contact-text">I&apos;d love to hear about it. Write to me and I&apos;ll get back to you within a couple of days.</p>
          {/* Opens the letter dialog; falls back to a plain email link without JavaScript. */}
          <a href={`mailto:${site.email}`} className="pill pill-dark" data-open-letter>
            Send me a letter
          </a>
          <p className="contact-alt">
            or email <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <div className="contact-social">
            <a href={site.social.linkedin} rel="me noopener" target="_blank" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a href={site.social.github} rel="me noopener" target="_blank" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Georgiana Ion</span>
      <span className="only-mobile">
        {site.location.city}, {site.location.country}
      </span>
    </footer>
  );
}
