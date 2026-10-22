// Production URL used for canonical links, the sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL once the custom domain is known; Vercel's production URL is the fallback.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Georgiana Ion",
  role: "Software Developer",
  title: "Georgiana Ion — Software Developer",
  tagline: "Thoughtful code, polished interfaces, and products that feel effortless to use.",
  description:
    "Georgiana Ion is a full stack software developer from Timișoara, Romania, building modern web applications with React, Next.js, Vue, TypeScript and Laravel.",
  email: "ion.georgiana@hotmail.com",
  location: { city: "Timișoara", country: "Romania", countryCode: "RO" },
  cv: "/pdfs/GeorgianaIonCV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/georgiana-ion-84a888230/",
    github: "https://github.com/GeorgianaIon",
  },
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Full stack developer",
    org: "Updivision",
    period: "Mar 2024 – Present",
    location: "Romania, remote",
    description:
      "Made a client's medical platform load five times faster, automated content moderation with OpenAI classification models, and built prototype apps documenting a game development SDK.",
  },
  {
    role: "Frontend developer, intern",
    org: "Unbox the Universe",
    period: "Jul 2022 – Jan 2023",
    location: "Belgium, remote",
    description: "Built the interfaces of a consumer rewards platform in React and Next.js.",
  },
  {
    role: "Software Technology Engineering",
    org: "VIA University College",
    period: "Aug 2020 – Jan 2024",
    location: "Horsens, Denmark",
    description:
      "Bachelor's degree in Interactive Media, built on semester projects with international teams.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string;
  image: { src: string; alt: string; width: number; height: number };
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "tower-of-gato",
    title: "Tower of Gato",
    description:
      "A 2D platformer built in Unity, with state-machine enemy AI, pathfinding and hand-tuned physics, structured around game managers, ScriptableObjects and SOLID principles.",
    tags: "C# · Unity",
    image: { src: "/images/work/tower-of-gato.jpg", alt: "Tower of Gato platformer level", width: 1100, height: 687 },
    links: [
      { label: "View on GitHub", href: "https://github.com/RealFoXsTeRDOTA/GMD1" },
      { label: "Demo", href: "https://youtu.be/rGwiWwC9Ynk" },
    ],
  },
  {
    slug: "farmerama",
    title: "Farmerama",
    description:
      "An IoT system that monitors noise, temperature, humidity and CO₂ on a pig farm, from sensors over LoRaWAN to an Android app.",
    tags: "Java · SQL · C",
    image: { src: "/images/work/farmerama.jpg", alt: "Farmerama Android app screens", width: 1200, height: 900 },
    links: [
      { label: "View on GitHub", href: "https://github.com/HolaSombreros/SEP4" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=2tLJ5bo_oes" },
    ],
  },
  {
    slug: "kitty-crush",
    title: "Kitty Crush",
    description:
      "A match-three game with cats instead of candy, complete with accounts, saved games and high scores.",
    tags: "React · Redux · Vue",
    image: { src: "/images/work/kitty-crush.jpg", alt: "Kitty Crush game board", width: 1100, height: 687 },
    links: [
      { label: "View on GitHub", href: "https://github.com/GeorgianaIon/SWA_Assignments/tree/main/Assignment_3" },
      { label: "Demo", href: "https://youtu.be/AYvzzoP9s5k" },
    ],
  },
  {
    slug: "telescope",
    title: "Telescope",
    description:
      "My bachelor project with the Danish Business Authority: a real-time view of their Kubernetes clusters, with statuses, versions and live filtering.",
    tags: "Bachelor project · TypeScript · React · Go",
    image: { src: "/images/work/telescope.jpg", alt: "Telescope cluster management app", width: 1100, height: 687 },
    links: [{ label: "Read the case study", href: "/work/telescope" }],
  },
];

export const toolbox = [
  "React and Next.js",
  "Vue and Nuxt.js",
  "TypeScript",
  "Node.js and Laravel",
  "PostgreSQL",
  "C#, .NET and Unity",
];

export const workStyle = [
  "Client communication",
  "Team work",
  "Attention to detail",
  "Solution oriented",
  "Adaptability",
  "Romanian and English",
];
