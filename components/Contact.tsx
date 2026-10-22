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
            <a href={site.social.linkedin} rel="me noopener" target="_blank">LinkedIn</a>
            <a href={site.social.github} rel="me noopener" target="_blank">GitHub</a>
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
