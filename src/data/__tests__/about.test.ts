import { describe, it, expect } from 'vitest'
import { bio, webSkills, gameSkills, webExperience, gameExperience } from '../about'

describe('about data', () => {
  describe('bio', () => {
    it('has 3 paragraphs', () => {
      expect(bio).toHaveLength(3)
    })

    it('each paragraph is a non-empty string', () => {
      for (const p of bio) {
        expect(typeof p).toBe('string')
        expect(p.length).toBeGreaterThan(0)
      }
    })
  })

  describe('webSkills', () => {
    it('has skills', () => {
      expect(webSkills.length).toBeGreaterThan(0)
    })

    it('includes core technologies', () => {
      expect(webSkills).toContain('JavaScript')
      expect(webSkills).toContain('TypeScript')
      expect(webSkills).toContain('React')
    })

    it('has no duplicates', () => {
      expect(new Set(webSkills).size).toBe(webSkills.length)
    })
  })

  describe('gameSkills', () => {
    it('has skills', () => {
      expect(gameSkills.length).toBeGreaterThan(0)
    })

    it('includes game engines', () => {
      expect(gameSkills).toContain('Unity3D')
      expect(gameSkills).toContain('Godot')
    })

    it('has no duplicates', () => {
      expect(new Set(gameSkills).size).toBe(gameSkills.length)
    })
  })

  describe('webExperience', () => {
    it('has entries', () => {
      expect(webExperience.length).toBeGreaterThan(0)
    })

    it('each entry has required fields', () => {
      for (const entry of webExperience) {
        expect(entry.company).toBeTruthy()
        expect(entry.role).toBeTruthy()
        expect(entry.period).toBeTruthy()
        expect(entry.detail).toBeTruthy()
      }
    })
  })

  describe('gameExperience', () => {
    it('has entries', () => {
      expect(gameExperience.length).toBeGreaterThan(0)
    })

    it('each entry has required fields', () => {
      for (const entry of gameExperience) {
        expect(entry.company).toBeTruthy()
        expect(entry.role).toBeTruthy()
        expect(entry.period).toBeTruthy()
        expect(entry.detail).toBeTruthy()
      }
    })
  })
})
