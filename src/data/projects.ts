export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: 'adalbertok',
    description: 'My personal portfolio — a Dark Souls-inspired pixel art website with an animated Canvas 2D bonfire scene, built with zero animation libraries.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Canvas 2D'],
    link: '/',
    github: 'https://github.com/frypizzabox/adalbertok',
  },
  {
    title: 'Scrapeteer',
    description: 'A declarative web scraping library for Node.js powered by Puppeteer. Define CSS selectors, specify attributes to extract, and get structured data back.',
    tags: ['TypeScript', 'Node.js', 'Puppeteer'],
    github: 'https://github.com/frypizzabox/Scrapeteer',
  },
]
