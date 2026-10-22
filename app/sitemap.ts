import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1, images: [`${siteUrl}/images/georgiana-ion.jpg`] },
    { url: `${siteUrl}/work/telescope`, changeFrequency: "yearly", priority: 0.6, images: [`${siteUrl}/images/work/telescope.jpg`] },
  ];
}
