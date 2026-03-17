import { describe, it, expect } from 'vitest'
import { projects } from '../projects'

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.tags.length).toBeGreaterThan(0)
    }
  })

  it('first project is the portfolio website', () => {
    expect(projects[0].title).toBe('adalbertok')
    expect(projects[0].github).toContain('frypizzabox')
  })
})
