import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse can't use next/font, so fetch the TTF subset for just the glyphs we draw.
async function googleFont(query: string, text: string) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}&text=${encodeURIComponent(text)}`).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`No TTF source for ${query}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

const role = "software developer";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/georgiana-ion.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  const fonts = await Promise.all([
    googleFont("Playfair+Display:wght@500", site.name),
    googleFont("Playfair+Display:wght@400", site.tagline),
    googleFont("Birthstone", role),
  ])
    .then(([title, body, script]) => [
      { name: "Playfair Display", data: title, weight: 500 as const, style: "normal" as const },
      { name: "Playfair Display", data: body, weight: 400 as const, style: "normal" as const },
      { name: "Birthstone", data: script, weight: 400 as const, style: "normal" as const },
    ])
    // Fall back to the built-in font rather than failing the build when Google Fonts is unreachable.
    .catch(() => undefined);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FCE3D9", padding: "0 96px", fontFamily: "Playfair Display" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 96, fontWeight: 500, color: "#B4513A", lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontFamily: "Birthstone", fontSize: 80, color: "#3B2B27", lineHeight: 1 }}>{role}</div>
          <div style={{ fontSize: 28, color: "#3B2B27", marginTop: 32, lineHeight: 1.5 }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "#FFF8F3", padding: "16px 16px 56px", transform: "rotate(6deg)", boxShadow: "0 8px 24px rgba(122,52,36,0.2)" }}>
          <img src={photoSrc} alt="" width={260} height={290} style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
