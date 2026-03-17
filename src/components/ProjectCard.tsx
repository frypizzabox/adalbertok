import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-soul-darker p-6 pixel-border hover:scale-[1.02] transition-transform ember-glow">
      <h3 className="font-pixel text-soul-ember text-xs mb-3">
        {project.title}
      </h3>
      <p className="font-body text-soul-gray text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-1 bg-soul-night text-soul-flame border border-soul-ash"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-soul-ember hover:text-soul-flame transition-colors"
          >
            [ Live ]
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-soul-gray hover:text-soul-ember transition-colors"
          >
            [ GitHub ]
          </a>
        )}
      </div>
    </div>
  )
}
