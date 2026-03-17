export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Replace this with your actual project details.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project showcase. Describe what it does and why it matters.',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'One more project to round out the grid. Add as many as you like.',
    tags: ['Python', 'FastAPI', 'Docker'],
    link: '#',
    github: '#',
  },
]
