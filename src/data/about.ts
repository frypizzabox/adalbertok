export interface ExperienceEntry {
  company: string
  role: string
  period: string
  detail: string
}

export const bio = [
  "I'm Adalberto Kutuxidis — a veteran adventurer with 15+ years of questing through codebases. I've crossed oceans from the Amazon jungles of Manaus, Brazil, to the frozen lands of Stockholm, Sweden, leveling up my skills at every bonfire along the way.",
  'My main quest line? Full Stack Development — slaying bugs and crafting pixel-perfect interfaces with JavaScript, TypeScript, and React. But every hero has a side quest: mine is game development, where I wield Unity3D, Godot, and Unreal Engine.',
  "I've joined guilds like Klarna, Samsung, Embark Studios, and Epidemic Sound — shipping loot used by millions. Whether it's a global-scale web app or an internal tool for a AAA game, I bring the same focus: clean code, high quality, and an unbreakable vow to never ship on a Friday. And remember — don't you dare go hollow!",
]

export const webSkills = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
  'React', 'React Native', 'Redux', 'MobX', 'Electron', 'Angular',
  'Node.js', 'Express', 'Sequelize', 'TypeORM',
  'Kafka', 'AWS', 'GCP',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Kubernetes', 'Terraform',
  'Datadog', 'Mixpanel', 'Splunk', 'Sentry', 'Snowplow',
  'Git', 'SVN', 'Perforce',
]

export const gameSkills = [
  'C#', 'GDScript', 'GML', 'Python', 'GoLang', 'PHP',
  'Unity3D', 'Unreal Engine', 'Godot', 'GameMaker',
]

export const webExperience: ExperienceEntry[] = [
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

export const gameExperience: ExperienceEntry[] = [
  { company: 'Embark Studios', role: 'Senior Fullstack Developer', period: '2024–2025', detail: 'Built internal tools for The Finals — shipped the Clubs feature (Season 5)' },
  { company: 'Paradox Interactive', role: 'Experienced Software Developer', period: '2019', detail: 'Worked on the Paradox Launcher' },
  { company: 'Samsung Electronics', role: 'Software Engineer', period: '2013–2017', detail: 'GearVR prototypes with Unity3D' },
]
