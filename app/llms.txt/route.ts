import { experience, projects, site, siteUrl, toolbox, workStyle } from "@/lib/site";

// Plain-text profile for AI crawlers (https://llmstxt.org), built from the same data as the page.
export const dynamic = "force-static";

const absolute = (href: string) => (href.startsWith("/") ? `${siteUrl}${href}` : href);

function llmsTxt() {
  return `# ${site.name}

> ${site.description}

${site.name} is a ${site.role.toLowerCase()} based in ${site.location.city}, ${site.location.country}, with three years of experience building modern full stack web applications. Georgiana holds a bachelor's degree in Software Technology Engineering from VIA University College in Denmark, works with a user-first mindset, and speaks Romanian and English.

- Website: ${siteUrl}
- Email: ${site.email}
- LinkedIn: ${site.social.linkedin}
- GitHub: ${site.social.github}
- Notice period: 37 days

## Experience and education

${experience.map((e) => `- **${e.role}, ${e.org}** (${e.period}, ${e.location}): ${e.description}`).join("\n")}

## Skills

${toolbox.map((t) => `- ${t}`).join("\n")}

## Work style

${workStyle.map((w) => `- ${w}`).join("\n")}

## Projects

${projects.map((p) => `- [${p.title}](${absolute(p.links[0].href)}): ${p.description} (${p.tags})`).join("\n")}

## Pages

- [Home](${siteUrl}/): About, experience, selected work, skills and contact
- [Telescope case study](${siteUrl}/work/telescope): Bachelor project with the Danish Business Authority, a real-time Kubernetes cluster management app
- [CV (PDF)](${siteUrl}${site.cv}): Full résumé
`;
}

export function GET() {
  return new Response(llmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
