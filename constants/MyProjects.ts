export interface IProject {
  name : string;
  pictures : string[];
  description : string;
  techStack : string[];
  github: string;
  demo: string;
  type: string;
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur aceget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl vel nisl. Donec auctor, nisl eget ultricies lacinia';

const tech = {
  'React':'React',
  'TypeScript':'TypeScript',
  'JavaScript':'JavaScript',
  'HTML':'HTML',
  'CSS':'CSS',
  'SASS':'SASS',
  'Bootstrap':'Bootstrap',
  'Material UI':'Material UI',
  'Node':'Node',
  'Express':'Express',
  'Git':'Git',
  'Next':'Next',  
}

const sampleTechStack = [tech.React, tech.TypeScript, tech.JavaScript]

export const myProjects : IProject [] = [
  {
    name: 'Farmerama',
    pictures : ['/images/project-images/farmerama-1.webp', '/images/project-images/farmerama-2.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: 'https://www.farmerama.com/?locale=ro',
    demo: 'https://www.farmerama.com/?locale=ro',
    type: 'MOBILE',
  },
  {
    name: 'Petbook',
    pictures : ['/images/project-images/petbook-1.webp', '/images/project-images/petbook-2.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: 'https://www.petbook.de/',
    demo: 'https://www.petbook.de/',
    type: 'TABLET',
  },
  {
    name: 'Mambo',
    pictures : ['/images/project-images/mambo-1.webp', '/images/project-images/mambo-2.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: 'https://www.pizzeria-mambo.ro/',
    demo: 'https://www.pizzeria-mambo.ro/',
    type: 'MOBILE',
  },
  {
    name: 'Simon Game',
    pictures : ['/images/project-images/simon-game.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    demo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    type: 'TABLET',
  },
  {
    name: 'To Do List',
    pictures : ['/images/project-images/todo-1.webp','/images/project-images/todo-2.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: 'https://www.atlassian.com/software/jira',
    demo: 'https://www.atlassian.com/software/jira',
    type: 'TABLET',
  },
  {
    name: 'This Portofolio',
    pictures : ['/images/project-images/portofolio-1.webp'],
    description: loremIpsum,
    techStack: sampleTechStack,
    github: '#',
    demo: '#',
    type: 'TABLET',
  },
];