import { ScrollReveal } from './ScrollReveal'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'Vite', 'Tailwind CSS', 'PostgreSQL', 'Docker',
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-pixel text-soul-ember text-sm md:text-base mb-8">
          About Me
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="font-body text-soul-white text-lg leading-relaxed mb-8 max-w-2xl">
          I'm Adalberto Kutuxidis — a developer who builds things for the web.
          I enjoy crafting clean, performant interfaces and exploring the
          intersection of code and creativity.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-2 bg-soul-darker text-soul-flame pixel-border ember-glow transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
