import { ScrollReveal } from './ScrollReveal'
import { socials, contactPrompt, contactFlavor } from '../data/contact'

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-pixel text-soul-ember text-sm md:text-base mb-4">
          Contact
        </h2>
        <p className="font-mono text-soul-flame text-sm mb-10 opacity-70">
          {contactFlavor}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="bg-soul-darker pixel-border p-6 font-mono text-sm max-w-md mx-auto">
          <p className="text-soul-gray mb-4">{contactPrompt}</p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-soul-gray hover:text-soul-ember transition-colors"
            >
              {s.icon} {s.label}
            </a>
          ))}
          <p className="text-soul-ash mt-4">_</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
