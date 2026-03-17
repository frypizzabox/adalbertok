import { describe, it, expect } from 'vitest'
import { navLinks } from '../navigation'

describe('navigation data', () => {
  it('has at least 4 navigation links', () => {
    expect(navLinks.length).toBeGreaterThanOrEqual(4)
  })

  it('each link has a label and an anchor href', () => {
    for (const link of navLinks) {
      expect(link.label).toBeTruthy()
      expect(link.href).toMatch(/^#/)
    }
  })

  it('includes Home, About, Projects, and Contact', () => {
    const labels = navLinks.map((l) => l.label)
    expect(labels).toContain('Home')
    expect(labels).toContain('About')
    expect(labels).toContain('Projects')
    expect(labels).toContain('Contact')
  })
})
