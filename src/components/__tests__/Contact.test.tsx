import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from '../Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the flavor text', () => {
    render(<Contact />)
    expect(screen.getByText('Rest at the bonfire. Leave a message.')).toBeInTheDocument()
  })

  it('renders the terminal prompt', () => {
    render(<Contact />)
    expect(screen.getByText('$ connect --with adalberto')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByText(/GitHub/)).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/)).toBeInTheDocument()
    expect(screen.getByText(/Email/)).toBeInTheDocument()
  })

  it('social links open in new tab', () => {
    render(<Contact />)
    const links = screen.getAllByRole('link')
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
