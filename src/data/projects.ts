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
]
