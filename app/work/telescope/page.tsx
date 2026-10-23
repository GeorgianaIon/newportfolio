import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact, SiteFooter } from "@/components/Contact";
import { Sparkle, Squiggle } from "@/components/Decor";
import { SiteHeader } from "@/components/SiteHeader";
import { site, siteUrl } from "@/lib/site";
import left from "@/public/images/project-images/telescope-1.png";
import right from "@/public/images/project-images/telescope-2.png";

const description =
  "Telescope is a real-time Kubernetes cluster management app built with TypeScript, React and Go for the Danish Business Authority as Georgiana Ion's bachelor project.";

export const metadata: Metadata = {
  title: "Telescope case study",
  description,
  alternates: { canonical: "/work/telescope" },
  openGraph: { type: "article", url: "/work/telescope", title: "Telescope case study", description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      name: "Telescope",
      description,
      url: `${siteUrl}/work/telescope`,
      image: `${siteUrl}/images/work/telescope.jpg`,
      creator: { "@type": "Person", "@id": `${siteUrl}/#person`, name: site.name },
      sponsor: { "@type": "GovernmentOrganization", name: "Danish Business Authority (Erhvervsstyrelsen)" },
      keywords: "Kubernetes, TypeScript, React, Go, WebSockets",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
        { "@type": "ListItem", position: 3, name: "Telescope", item: `${siteUrl}/work/telescope` },
      ],
    },
  ],
};

export default function TelescopePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main id="main" className="page">
        <section className="case-hero" aria-labelledby="case-title">
          <Sparkle color="#FFF8F3" width="22" height="22" style={{ position: "absolute", left: "18%", top: "60%" }} aria-hidden="true" />
          <Sparkle color="#FF9A86" width="16" height="16" style={{ position: "absolute", right: "20%", top: "40%" }} aria-hidden="true" />
          <div className="hero-body">
            <Squiggle className="hero-squiggle" strokeWidth="1.4" />
            <p className="script about-kicker">bachelor project</p>
            <h1 id="case-title" className="case-title">
              Telescope
            </h1>
            <p className="hero-tagline">A real-time view of the Danish Business Authority&apos;s Kubernetes clusters.</p>
          </div>
        </section>

        <article className="case-body">
          <dl className="case-facts">
            <div>
              <dt>Client</dt>
              <dd>Danish Business Authority</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>TypeScript · React · Go</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>Bachelor project, VIA University College</dd>
            </div>
          </dl>

          <p>
            In partnership with the Danish Business Authority (Erhvervsstyrelsen, ERST) in Copenhagen, our team built a cluster
            management app. ERST is a government agency dedicated to creating the best possible conditions for Danish startups and
            businesses.
          </p>
          <p>
            As their Kubernetes estate grew, ERST needed a clearer way to oversee it. Telescope gives them a single, real-time view
            of every cluster&apos;s status and version, with live filtering powered by WebSockets, so the team can spot problems early
            and keep their infrastructure up to date.
          </p>

          <div className="case-gallery">
            <figure className="card" style={{ margin: 0, transform: "rotate(-2.5deg)" }}>
              <Image src={left} alt="Telescope welcome screen with a Get started button" sizes="(max-width: 720px) 100vw, 380px" />
            </figure>
            <figure className="card" style={{ margin: 0, transform: "rotate(2deg) translateY(12px)" }}>
              <Image src={right} alt="Telescope cluster overview with live filters and cluster statuses" sizes="(max-width: 720px) 100vw, 380px" />
            </figure>
          </div>

          <p>
            <Link href="/#work">← Back to selected work</Link>
          </p>
        </article>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
