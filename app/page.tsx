import Image from "next/image";
import Link from "next/link";
import { Blossom, Bow, Daisy, Fern, Heart, Sparkle, Squiggle, Tulip } from "@/components/Decor";
import { PluckableDaisy } from "@/components/PluckableDaisy";
import { Polaroid } from "@/components/Polaroid";
import { SiteHeader } from "@/components/SiteHeader";
import { Wiggle } from "@/components/Wiggle";
import { Contact, SiteFooter } from "@/components/Contact";
import { experience, projects, site, siteUrl, toolbox, workStyle, type Project } from "@/lib/site";
import portrait from "@/public/images/georgiana-ion.jpg";

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.title,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        givenName: "Georgiana",
        familyName: "Ion",
        jobTitle: "Full Stack Developer",
        description: site.description,
        url: siteUrl,
        image: `${siteUrl}${portrait.src}`,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressCountry: site.location.countryCode,
        },
        worksFor: { "@type": "Organization", name: "Updivision" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "VIA University College" },
        knowsLanguage: ["Romanian", "English"],
        knowsAbout: toolbox,
        sameAs: [site.social.linkedin, site.social.github],
      },
      ...projects.map((p) => ({
        "@type": "CreativeWork",
        name: p.title,
        description: p.description,
        image: `${siteUrl}${p.image.src}`,
        url: p.links[0].href.startsWith("/") ? `${siteUrl}${p.links[0].href}` : p.links[0].href,
        creator: { "@id": `${siteUrl}/#person` },
      })),
    ],
  };
}

// Shown when the last petal of a hero daisy is plucked.
const petalsMessage = "404: petals not found 🌼";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.links.map((link) =>
        link.href.startsWith("/") ? (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ) : (
          <a key={link.href} href={link.href} target="_blank" rel="noopener">
            {link.label}
            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
          </a>
        ),
      )}
    </div>
  );
}

function TintedImage({ project, sizes, priority = false }: { project: Project; sizes: string; priority?: boolean }) {
  return (
    <div className="tinted">
      <Image src={project.image.src} alt={project.image.alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()).replace(/</g, "\\u003c") }}
      />

      <SiteHeader />
      <main id="main" className="page">
        {/* ───────── Hero ───────── */}
        <section className="hero" aria-labelledby="hero-title">
          <svg className="only-desktop deco-fill" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,900 1440,260 1440,520 0,1100" fill="#FDECE4" />
            <polygon points="0,900 1440,520 1440,620 0,1000" fill="#FFD9C9" />
            <path d="M-20 640 C 260 520, 420 760, 640 640 C 740 585, 770 520, 720 515 C 670 510, 670 590, 730 610 C 900 670, 1140 470, 1460 560" stroke="#FF9A86" strokeWidth="1.6" fill="none" />
          </svg>
          <svg className="only-mobile deco-fill" viewBox="0 0 390 760" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,700 390,330 390,470 0,860" fill="#FDECE4" />
            <polygon points="0,700 390,470 390,530 0,780" fill="#FFD9C9" />
            <path d="M-10 610 C 60 560, 110 650, 170 610 C 200 590, 205 560, 185 556 C 165 552, 162 590, 192 600 C 260 620, 320 540, 400 570" stroke="#FF9A86" strokeWidth="1.4" fill="none" />
          </svg>

          <div className="only-desktop" aria-hidden="true">
            <Fern width="190" height="420" stroke="#FFF8F3" strokeWidth="0.9" style={{ position: "absolute", left: "3%", bottom: 40 }} />
            <Tulip leaves={1} width="80" height="180" stroke="#B4513A" strokeWidth="1.5" style={{ position: "absolute", left: "19%", bottom: 40 }} />
            <Fern width="200" height="440" stroke="#FFF8F3" strokeWidth="0.9" style={{ position: "absolute", right: "3%", bottom: 40, transform: "scaleX(-1)" }} />
            <Sparkle color="#FFF8F3" width="22" height="22" style={{ position: "absolute", left: "22%", top: 220 }} />
            <Sparkle color="#FF9A86" width="18" height="18" style={{ position: "absolute", right: "30%", top: 520 }} />
          </div>
          <div className="only-mobile" aria-hidden="true">
            <Fern width="80" height="178" stroke="#FFF8F3" strokeWidth="1" style={{ position: "absolute", left: -6, bottom: 24 }} />
            <Tulip width="56" height="126" stroke="#B4513A" strokeWidth="1.6" style={{ position: "absolute", right: 56, bottom: 24 }} />
            <Fern width="84" height="187" stroke="#FFF8F3" strokeWidth="1" style={{ position: "absolute", right: -6, bottom: 24, transform: "scaleX(-1)" }} />
            <Sparkle color="#FFF8F3" width="16" height="16" style={{ position: "absolute", left: 30, top: 150 }} />
            <Sparkle color="#FF9A86" width="12" height="12" style={{ position: "absolute", right: 34, top: 230 }} />
          </div>

          <PluckableDaisy message={petalsMessage} side="right" width={110} height={250} strokeWidth={1.4} className="only-desktop" style={{ left: "13%", bottom: 40 }} />
          <PluckableDaisy message={petalsMessage} side="left" width={120} height={270} strokeWidth={1.4} className="only-desktop" style={{ right: "14%", bottom: 40 }} />
          <PluckableDaisy message={petalsMessage} side="right" width={52} height={117} strokeWidth={1.6} className="only-mobile" style={{ left: 52, bottom: 24 }} />

          <div className="hero-body">
            <Squiggle className="hero-squiggle" strokeWidth="1.4" />
            <h1 id="hero-title" className="hero-title">
              Georgiana Ion
              <span className="hero-role">software developer</span>
            </h1>
            <p className="hero-tagline">{site.tagline}</p>
            <div className="hero-actions">
              <Link href="#work" className="pill pill-light">
                See my work
              </Link>
              <a href={site.cv} className="pill pill-outline" download="Georgiana-Ion-CV.pdf">
                Download CV
              </a>
            </div>
            <Polaroid />
          </div>
        </section>

        <svg className="only-desktop wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 C 240 0, 480 80, 720 40 C 960 0, 1200 80, 1440 40 L1440 80 L0 80 Z" fill="#FFF8F3" />
        </svg>
        <svg className="only-mobile wave" viewBox="0 0 390 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 20 C 65 0, 130 40, 195 20 C 260 0, 325 40, 390 20 L390 41 L0 41 Z" fill="#FFF8F3" />
        </svg>

        {/* ───────── About ───────── */}
        <div className="about-wrap">
          <div className="only-desktop deco" aria-hidden="true">
            <svg viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" style={{ position: "absolute", left: 0, top: 60, width: "100%", height: 400 }}>
              <path d="M-20 320 C 120 250, 230 360, 330 290 C 380 255, 400 215, 365 208 C 330 202, 328 255, 372 262 C 480 280, 600 205, 720 205 C 840 205, 920 290, 1040 280 C 1140 272, 1220 196, 1460 240" stroke="#FFB399" strokeWidth="1.4" />
            </svg>
            <Fern width="96" height="214" stroke="#B4513A" strokeWidth="1.4" style={{ position: "absolute", left: "7%", bottom: 70 }} />
            <Daisy width="70" height="158" stroke="#FF9A86" strokeWidth="1.6" style={{ position: "absolute", left: "calc(7% + 64px)", bottom: 70 }} />
            <Sparkle color="#FF9A86" width="18" height="18" style={{ position: "absolute", left: "18%", top: 110 }} />
            <Sparkle color="#B4513A" width="12" height="12" style={{ position: "absolute", left: "24%", top: 170 }} />
            <Sparkle color="#FFB399" width="16" height="16" style={{ position: "absolute", right: "20%", bottom: 150 }} />
            <Sparkle color="#FF9A86" width="10" height="10" style={{ position: "absolute", right: "26%", top: 90 }} />
          </div>
          <div className="only-mobile" aria-hidden="true">
            <svg viewBox="0 0 390 200" preserveAspectRatio="none" fill="none" style={{ position: "absolute", left: 0, top: 40, width: "100%", height: 200 }}>
              <path d="M-10 150 C 30 120, 50 170, 80 140 C 96 124, 92 100, 78 102 C 64 104, 66 130, 90 134 C 140 142, 170 112, 195 112 C 240 112, 280 160, 400 130" stroke="#FFB399" strokeWidth="1.3" />
            </svg>
            <Sparkle color="#FF9A86" width="14" height="14" style={{ position: "absolute", left: 24, top: 70 }} />
            <Sparkle color="#B4513A" width="10" height="10" style={{ position: "absolute", right: 30, top: 110 }} />
          </div>

          <section id="about" className="about" aria-labelledby="about-title">
            <Fern bud={false} className="about-fern" stroke="#FF9A86" />
            <p className="script about-kicker">a little about me</p>
            <h2 id="about-title" className="about-title">Romanian roots, Danish education</h2>
            <p>
              I grew up in Romania and studied Software Technology Engineering in Denmark, where every semester meant a new project
              with teammates from around the world. That&apos;s where I learned that good software is as much about communication as it
              is about code.
            </p>
            <p>
              Today I&apos;m a full stack developer with three years of experience building modern web applications. I work with a
              user-first mindset, and I&apos;m happiest in teams where feedback flows freely and everyone pushes the product further.
            </p>
          </section>

          <div className="hill" aria-hidden="true">
            <svg className="only-desktop" viewBox="0 0 1440 96" preserveAspectRatio="none">
              <path d="M0 60 C 200 20, 380 20, 560 52 C 760 88, 940 92, 1120 56 C 1260 28, 1360 30, 1440 44 L1440 96 L0 96 Z" fill="#FCEDE6" />
              <path d="M0 60 C 200 20, 380 20, 560 52 C 760 88, 940 92, 1120 56 C 1260 28, 1360 30, 1440 44" fill="none" stroke="#FFB399" strokeWidth="1.4" />
            </svg>
            <svg className="only-mobile" viewBox="0 0 390 64" preserveAspectRatio="none">
              <path d="M0 40 C 60 14, 120 14, 180 34 C 240 56, 300 58, 390 30 L390 65 L0 65 Z" fill="#FCEDE6" />
              <path d="M0 40 C 60 14, 120 14, 180 34 C 240 56, 300 58, 390 30" fill="none" stroke="#FFB399" strokeWidth="1.3" />
            </svg>
            <div className="only-desktop deco">
              <Daisy width="40" height="90" stroke="#B4513A" strokeWidth="2.4" style={{ position: "absolute", left: "22%", bottom: 52 }} />
              <Fern width="34" height="76" stroke="#FF9A86" strokeWidth="2.6" style={{ position: "absolute", left: "calc(22% + 30px)", bottom: 50 }} />
              <Tulip width="36" height="81" stroke="#B4513A" strokeWidth="2.4" style={{ position: "absolute", right: "18%", bottom: 46 }} />
              <Sparkle color="#FF9A86" width="12" height="12" style={{ position: "absolute", left: "46%", bottom: 30 }} />
            </div>
            <div className="only-mobile">
              <Daisy width="28" height="63" stroke="#B4513A" strokeWidth="3" style={{ position: "absolute", left: "22%", bottom: 34 }} />
              <Tulip width="26" height="58" stroke="#B4513A" strokeWidth="3" style={{ position: "absolute", right: "18%", bottom: 26 }} />
            </div>
          </div>
        </div>

        {/* ───────── Experience ───────── */}
        <section id="journey" className="journey" aria-labelledby="journey-title">
          <div className="journey-inner">
            <div className="journey-intro">
              <p className="script journey-kicker">my journey so far</p>
              <h2 id="journey-title" className="journey-title">Experience</h2>
              <p className="journey-text">From semester projects in Denmark to remote product work across Europe.</p>
            </div>
            <div className="timeline">
              <svg className="timeline-vine" viewBox="0 0 40 600" preserveAspectRatio="none" fill="none" stroke="#FF9A86" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <path d="M20 0 C18 150 22 300 20 600" vectorEffect="non-scaling-stroke" />
                <path d="M20 120 C8 116 2 104 3 92 C13 96 19 106 20 120" vectorEffect="non-scaling-stroke" />
                <path d="M20 330 C32 326 38 314 37 302 C27 306 21 316 20 330" vectorEffect="non-scaling-stroke" />
                <path d="M20 520 C8 516 2 504 3 492 C13 496 19 506 20 520" vectorEffect="non-scaling-stroke" />
              </svg>
              <ol>
              {experience.map((item) => (
                <li key={item.org} className="timeline-item">
                  <Blossom className="timeline-marker" />
                  <div className="timeline-head">
                    <div className="timeline-what">
                      <h3>{item.role}</h3>
                      <p className="timeline-org">{item.org}</p>
                    </div>
                    <p className="timeline-meta">
                      <span>{item.period}</span>
                      <span className="timeline-sep"> · </span>
                      <span>{item.location}</span>
                    </p>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                </li>
              ))}
              </ol>
            </div>
          </div>
        </section>

        <div className="washi" aria-hidden="true">
          <svg className="washi-strip" width="100%" height="100%">
            <defs>
              <pattern id="washi-hearts" width="34" height="38" patternUnits="userSpaceOnUse">
                <path d="M10 17 C 3 12, 0.5 7, 3.5 4 C 6 1.6, 9 3, 10 5.4 C 11 3, 14 1.6, 16.5 4 C 19.5 7, 17 12, 10 17 Z" fill="#FFF8F3" transform="translate(11 13) scale(0.62)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#FFB399" />
            <rect width="100%" height="100%" fill="url(#washi-hearts)" />
            <line x1="0" y1="13%" x2="100%" y2="13%" stroke="#FFF8F3" strokeWidth="1" opacity="0.8" />
            <line x1="0" y1="87%" x2="100%" y2="87%" stroke="#FFF8F3" strokeWidth="1" opacity="0.8" />
          </svg>
        </div>

        {/* ───────── Work ───────── */}
        <section id="work" className="work" aria-labelledby="work-title">
          <div className="work-heading">
            <p className="script work-kicker">made by hand, line by line</p>
            <h2 id="work-title" className="work-title">Selected work</h2>
          </div>

          <article className="card featured">
            <span className="tape tape-left" aria-hidden="true" />
            <span className="tape tape-right" aria-hidden="true" />
            <div className="featured-media">
              <TintedImage project={featured} sizes="(max-width: 640px) 100vw, 640px" />
            </div>
            <div className="featured-body">
              <h3>{featured.title}</h3>
              <p className="project-desc">{featured.description}</p>
              <p className="project-tags">{featured.tags}</p>
              <ProjectLinks project={featured} />
            </div>
          </article>

          <div className="work-grid">
            {rest.map((project, i) => (
              <article key={project.slug} className={`card small-card tilt-${i}`}>
                <span className="tape tape-top" aria-hidden="true" />
                <div className="small-media">
                  <TintedImage project={project} sizes="(max-width: 640px) 100vw, 380px" />
                </div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-tags">{project.tags}</p>
                <ProjectLinks project={project} />
              </article>
            ))}
          </div>
        </section>

        <svg className="lace" aria-hidden="true" width="100%" height="40">
          <defs>
            <pattern id="lace-top" width="28" height="40" patternUnits="userSpaceOnUse">
              <circle cx="14" cy="2" r="14.6" fill="#FFF8F3" />
            </pattern>
          </defs>
          <rect width="100%" height="40" fill="#FCEDE6" />
          <rect width="100%" height="40" fill="url(#lace-top)" />
          <rect width="100%" height="6" fill="#FFF8F3" />
          <line x1="0" y1="29" x2="100%" y2="29" stroke="#FF9A86" strokeWidth="1.3" strokeDasharray="1 7" strokeLinecap="round" />
        </svg>

        {/* ───────── Skills ───────── */}
        <section id="skills" className="skills" aria-label="Skills">
          <Daisy petals={6} leaves={1} className="skills-daisy" stroke="#FFB399" />
          <div className="deco" aria-hidden="true">
            <Heart color="#FF9A86" width="16" height="16" className="skills-heart" />
            <Sparkle color="#B4513A" width="12" height="12" className="skills-spark-1" />
            <Sparkle color="#FFB399" width="14" height="14" className="skills-spark-2" />
          </div>
          <Wiggle className="skills-bow-wrap">
            <Bow className="skills-bow" />
          </Wiggle>
          <div className="skills-cols">
            <div className="skills-col">
              <h2>Browse my toolbox</h2>
              <ul>
                {toolbox.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="skills-divider skills-divider-v only-desktop deco" aria-hidden="true">
              <svg width="3" height="100%">
                <line x1="1.5" y1="0" x2="1.5" y2="100%" />
              </svg>
              <Heart color="#FF9A86" width="20" height="20" className="skills-divider-heart" />
            </div>
            <div className="skills-divider skills-divider-h only-mobile" aria-hidden="true">
              <svg width="100%" height="3">
                <line x1="0" y1="1.5" x2="100%" y2="1.5" />
              </svg>
              <Heart color="#FF9A86" width="18" height="18" className="skills-divider-heart" />
            </div>
            <div className="skills-col">
              <h2>And the way I work</h2>
              <ul>
                {workStyle.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
