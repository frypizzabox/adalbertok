import { ScrollReveal } from './ScrollReveal'

const webSkills = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'React', 'React Native', 'Redux', 'MobX', 'Electron', 'Angular',
  'Node.js', 'Express', 'Sequelize', 'TypeORM',
  'Kafka', 'AWS', 'GCP',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Kubernetes', 'Terraform',
  'Datadog', 'Mixpanel', 'Splunk', 'Sentry', 'Snowplow',
  'Git', 'SVN', 'Perforce',
]

const gameSkills = [
  'C#', 'GDScript', 'GML', 'Python', 'GoLang', 'PHP',
  'Unity3D', 'Unreal Engine', 'Godot', 'GameMaker',
]

const webExperience = [
  { company: 'Epidemic Sound', role: 'Software Engineer III', period: '2025–now', detail: 'Fullstack for Team Retain — experiments, retention strategies, internal migration' },
  { company: 'Digital Route', role: 'Senior Software Engineer', period: '2021–2024', detail: 'Cloud Edition — frontend, backend, monitoring. Scrum Master. On-call team' },
  { company: 'Klarna', role: 'Senior Software Engineer', period: '2019–2021', detail: 'Wishlist/Collections — lead developer, iOS widget task force. On-call team' },
  { company: 'Symbio / Volvo', role: 'Senior Software Developer', period: '2017–2018', detail: 'Tech consulting & mobile/web solutions for Volvo' },
  { company: 'Samsung Electronics', role: 'Software Engineer', period: '2013–2017', detail: 'Global projects — Android/Tizen ports, led teams in Brazil, traveled to South Korea' },
  { company: 'ZoomOut Soluções Digitais', role: 'Owner / Software Engineer', period: '2011–2013', detail: 'Founded studio — websites & web admin systems' },
  { company: 'Vekttor', role: 'Software Engineer', period: '2010–2011', detail: 'Websites & web admin systems' },
  { company: 'Hexagono STI', role: 'Software Engineer', period: '2009–2010', detail: 'Frontend for mobile & web applications' },
  { company: 'AKBS', role: 'Owner / Software Engineer', period: '2006–2008', detail: 'Founded studio — websites & web admin systems' },
]

const gameExperience = [
  { company: 'Embark Studios', role: 'Senior Fullstack Developer', period: '2024–2025', detail: 'Built internal tools for The Finals — shipped the Clubs feature (Season 5)' },
  { company: 'Paradox Interactive', role: 'Experienced Software Developer', period: '2019', detail: 'Worked on the Paradox Launcher' },
  { company: 'Samsung Electronics', role: 'Software Engineer', period: '2013–2017', detail: 'GearVR prototypes with Unity3D' },
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
        <p className="font-body text-soul-white text-lg leading-relaxed mb-4 max-w-2xl">
          I'm Adalberto Kutuxidis — a veteran adventurer with 15+ years of
          questing through codebases. I've crossed oceans from the Amazon
          jungles of Manaus, Brazil, to the frozen lands of Stockholm, Sweden,
          leveling up my skills at every bonfire along the way.
        </p>
        <p className="font-body text-soul-gray text-base leading-relaxed mb-4 max-w-2xl">
          My main quest line? Full Stack Development — slaying bugs and
          crafting pixel-perfect interfaces with JavaScript, TypeScript, and
          React. But every hero has a side quest: mine is game development,
          where I wield Unity3D, Godot, and Unreal Engine.
        </p>
        <p className="font-body text-soul-gray text-base leading-relaxed mb-8 max-w-2xl">
          I've joined guilds like Klarna, Samsung, Embark Studios, and Epidemic
          Sound — shipping loot used by millions. Whether it's a global-scale
          web app or an internal tool for a AAA game, I bring the same focus:
          clean code, high quality, and a relentless drive to ship.
        </p>
        <a
          href="/CV_Adalberto.pdf"
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
