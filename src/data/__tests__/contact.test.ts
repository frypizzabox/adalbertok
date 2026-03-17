import { describe, it, expect } from 'vitest'
import { socials, contactPrompt, contactFlavor } from '../contact'

describe('contact data', () => {
  it('has social links', () => {
    expect(socials.length).toBeGreaterThan(0)
  })

  it('each social has a label, href, and icon', () => {
    for (const s of socials) {
      expect(s.label).toBeTruthy()
      expect(s.href).toBeTruthy()
      expect(s.icon).toBeTruthy()
    }
  })

  it('includes GitHub, LinkedIn, and Email', () => {
    const labels = socials.map((s) => s.label)
    expect(labels).toContain('GitHub')
    expect(labels).toContain('LinkedIn')
    expect(labels).toContain('Email')
  })

  it('GitHub links to the correct profile', () => {
    const github = socials.find((s) => s.label === 'GitHub')
    expect(github?.href).toContain('github.com/frypizzabox')
  })

  it('Email uses mailto', () => {
    const email = socials.find((s) => s.label === 'Email')
    expect(email?.href).toMatch(/^mailto:/)
  })

  it('has a contact prompt', () => {
    expect(contactPrompt).toBeTruthy()
  })

  it('has flavor text', () => {
    expect(contactFlavor).toBeTruthy()
  })
})
