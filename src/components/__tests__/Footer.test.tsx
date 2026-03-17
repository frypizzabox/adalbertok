import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  it('renders the copyright with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders the author name', () => {
    render(<Footer />)
    expect(screen.getByText(/Adalberto Kutuxidis/)).toBeInTheDocument()
  })
})
