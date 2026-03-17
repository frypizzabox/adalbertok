import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ScrollReveal } from './ScrollReveal'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <h2 className="font-pixel text-soul-ember text-sm md:text-base mb-12">
          Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
