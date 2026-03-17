import { ScrollReveal } from './ScrollReveal'
import { personal } from '../data/personal'
import { bio, webSkills, gameSkills, webExperience, gameExperience } from '../data/about'

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-pixel text-soul-ember text-sm md:text-base mb-8">
          About Me
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="font-body text-soul-white text-lg leading-relaxed mb-4 max-w-2xl">
          {bio[0]}
        </p>
        <p className="font-body text-soul-gray text-base leading-relaxed mb-4 max-w-2xl">
          {bio[1]}
        </p>
        <p className="font-body text-soul-gray text-base leading-relaxed mb-8 max-w-2xl">
          {bio[2]}
        </p>
        <a
          href={personal.cvPath}
          download
          className="inline-block font-mono text-sm px-4 py-2 text-soul-ember pixel-border ember-glow transition-all hover:text-soul-flame"
        >
          [ Download CV ]
        </a>
      </ScrollReveal>

      {/* Web Experience */}
      <ScrollReveal delay={200}>
        <h3 className="font-pixel text-soul-flame text-xs mt-16 mb-6">Web Experience</h3>
        <div className="space-y-4 mb-12">
          {webExperience.map((h) => (
            <div key={h.company + h.period} className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-mono text-xs text-soul-gray w-28 shrink-0">{h.period}</span>
                <span className="font-body text-soul-white text-sm">{h.role}</span>
                <span className="font-mono text-xs text-soul-ember">{h.company}</span>
              </div>
              <p className="font-body text-soul-gray text-xs sm:pl-32">{h.detail}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Game Experience */}
      <ScrollReveal delay={300}>
        <h3 className="font-pixel text-soul-flame text-xs mb-6">Game Experience</h3>
        <div className="space-y-4 mb-12">
          {gameExperience.map((h) => (
            <div key={h.company + h.period} className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-mono text-xs text-soul-gray w-28 shrink-0">{h.period}</span>
                <span className="font-body text-soul-white text-sm">{h.role}</span>
                <span className="font-mono text-xs text-soul-ember">{h.company}</span>
              </div>
              <p className="font-body text-soul-gray text-xs sm:pl-32">{h.detail}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Web Skills */}
      <ScrollReveal delay={400}>
        <h3 className="font-pixel text-soul-flame text-xs mb-6">Web Skills</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {webSkills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-2 bg-soul-darker text-soul-flame pixel-border ember-glow transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Game Skills */}
      <ScrollReveal delay={500}>
        <h3 className="font-pixel text-soul-flame text-xs mb-6">Game Skills</h3>
        <div className="flex flex-wrap gap-3">
          {gameSkills.map((skill) => (
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
