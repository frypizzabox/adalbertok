import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

// Mock the canvas since jsdom doesn't support it
vi.mock('../BonfireCanvas', () => ({
  BonfireCanvas: () => <div data-testid="bonfire-canvas" />,
}))

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByText('Adalberto Kutuxidis')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/Senior Frontend Engineer/)).toBeInTheDocument()
  })

  it('renders the bonfire canvas', () => {
    render(<Hero />)
    expect(screen.getByTestId('bonfire-canvas')).toBeInTheDocument()
  })

  it('has a scroll hint link to #about', () => {
    render(<Hero />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#about')
  })
})
