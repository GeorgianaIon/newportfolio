import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The old site had one page per section; keep those URLs alive for search engines.
  async redirects() {
    return [
      { source: "/about-me", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
