import { describe, it, expect } from 'vitest'
import { personal } from '../personal'

describe('personal data', () => {
  it('has a full name', () => {
    expect(personal.name).toBe('Adalberto Kutuxidis')
  })

  it('has a short name for the logo', () => {
    expect(personal.shortName).toBe('AK')
  })

  it('has a tagline', () => {
    expect(personal.tagline).toBeTruthy()
  })

  it('has a CV path pointing to a PDF', () => {
    expect(personal.cvPath).toMatch(/\.pdf$/)
  })
})
