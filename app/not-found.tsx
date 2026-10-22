import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Squiggle } from "@/components/Decor";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page">
        <section className="case-hero" style={{ minHeight: "100vh" }}>
          <div className="hero-body">
            <Squiggle className="hero-squiggle" strokeWidth="1.4" />
            <p className="script about-kicker">oops, a wrong turn</p>
            <h1 className="case-title">Page not found</h1>
            <p className="hero-tagline">The page you&apos;re looking for has moved or never existed.</p>
            <div className="hero-actions">
              <Link href="/" className="pill pill-light">
                Back home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
