import { Strings } from "./Strings";

export interface IProject {
  name: string;
  pictures: string[];
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  type: string;
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur aceget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia';

const tech = {
  React: 'React',
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  HTML: 'HTML',
  CSS: 'CSS',
  SASS: 'SASS',
  Bootstrap: 'Bootstrap',
  Material_UI: 'Material UI',
  Node: 'Node',
  Express: 'Express',
  Git: 'Git',
  Next: 'Next',
  Java: 'Java',
  JavaSB: 'Java Spring Boot',
  SQL: 'SQL',
  C: 'C',
  C_Sharp: 'C#',
  Unity: 'Unity'
}

const sampleTechStack = [tech.React, tech.TypeScript, tech.JavaScript]

export const myProjects: IProject[] = [
  {
    name: 'Farmerama',
    pictures: ['/images/project-images/farmerama-1.png', '/images/project-images/farmerama-2.png'],
    description: Strings.farmeramaDescription,
    techStack: [tech.Java, tech.SQL, tech.C],
    github: 'https://github.com/HolaSombreros/SEP4',
    demo: 'https://www.youtube.com/watch?v=2tLJ5bo_oes',
    type: 'MOBILE',
  },
  {
    name: 'Petbook',
    pictures: ['/images/project-images/petbook-1.png', '/images/project-images/petbook-2.png'],
    description: Strings.petbookDescription,
    techStack: [tech.Java, tech.C_Sharp, tech.SQL],
    github: 'https://github.com/GeorgianaIon/SDJ3-Petbook',
    demo: '',
    type: 'TABLET',
  },
  {
    name: 'Mambo',
    pictures: ['/images/project-images/mambo-1.png', '/images/project-images/mambo-2.png'],
    description: Strings.mamboDescription,
    techStack: [tech.Java],
    github: 'https://github.com/GeorgianaIon/FoodDeliveryApp',
    demo: 'https://www.youtube.com/watch?v=N_U-xAZaXec',
    type: 'MOBILE',
  },
  {
    name: 'Simon Game',
    pictures: ['/images/project-images/simon-game.png'],
    description: Strings.simonGameDescription,
    techStack: [tech.JavaScript, tech.HTML, tech.CSS],
    github: 'https://github.com/GeorgianaIon/SimonGame',
    demo: '',
    type: 'TABLET',
  },
  {
    name: 'Tower of Gato',
    pictures: ['/images/project-images/gato-1.png', '/images/project-images/gato-2.png'],
    description: Strings.gatoDescription,
    techStack: [tech.C_Sharp, tech.Unity],
    github: 'https://github.com/RealFoXsTeRDOTA/GMD1',
    demo: 'https://realfoxsterdota.github.io/GMD1/',
    type: 'TABLET',
  },
  {
    name: 'Best Movies',
    pictures: ['/images/project-images/best-movies-1.png', '/images/project-images/best-movies-2.png'],
    description: Strings.bestMoviesDescription,
    techStack: [tech.React, tech.TypeScript, tech.JavaSB],
    github: 'https://github.com/GeorgianaIon/SEP6',
    demo: 'https://sep6.tomondre.com/',
    type: 'TABLET',
  },
];