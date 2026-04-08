import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from '../About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<About />)
    expect(screen.getByText(/veteran adventurer/)).toBeInTheDocument()
  })

  it('renders the CV download link', () => {
    render(<About />)
    const link = screen.getByText('[ Download CV ]')
    expect(link).toHaveAttribute('href', '/Adalberto_CV_2026.pdf')
    expect(link).toHaveAttribute('download')
  })

  it('renders web and game experience sections', () => {
    render(<About />)
    expect(screen.getByText('Web Experience')).toBeInTheDocument()
    expect(screen.getByText('Game Experience')).toBeInTheDocument()
  })

  it('renders web and game skill sections', () => {
    render(<About />)
    expect(screen.getByText('Web Skills')).toBeInTheDocument()
    expect(screen.getByText('Game Skills')).toBeInTheDocument()
  })

  it('renders skill badges', () => {
    render(<About />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Unity3D')).toBeInTheDocument()
  })

  it('renders experience entries', () => {
    render(<About />)
    expect(screen.getByText('Epidemic Sound')).toBeInTheDocument()
    expect(screen.getByText('Embark Studios')).toBeInTheDocument()
  })
})
