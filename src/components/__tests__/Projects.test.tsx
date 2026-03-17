import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '../Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders project cards', () => {
    render(<Projects />)
    expect(screen.getByText('adalbertok')).toBeInTheDocument()
  })

  it('renders project tags', () => {
    render(<Projects />)
    expect(screen.getByText('Canvas 2D')).toBeInTheDocument()
  })
})
