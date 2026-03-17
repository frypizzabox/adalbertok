import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('AK')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const button = screen.getByLabelText('Toggle menu')

    // Menu should not be visible initially (only desktop links exist)
    const linksBefore = screen.getAllByText('Home')
    expect(linksBefore.length).toBe(1) // only desktop

    fireEvent.click(button)
    const linksAfter = screen.getAllByText('Home')
    expect(linksAfter.length).toBe(2) // desktop + mobile
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    const button = screen.getByLabelText('Toggle menu')
    fireEvent.click(button)

    const mobileLinks = screen.getAllByText('About')
    // Click the last one (mobile menu link)
    fireEvent.click(mobileLinks[mobileLinks.length - 1])

    // Menu should close — back to 1 instance
    expect(screen.getAllByText('About').length).toBe(1)
  })
})
