import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import type { Project } from '../../data/projects'

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test project description',
  tags: ['React', 'TypeScript'],
  link: 'https://example.com',
  github: 'https://github.com/test/repo',
}

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders the project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test project description')).toBeInTheDocument()
  })

  it('renders all tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders live and github links', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('[ Live ]')).toHaveAttribute('href', 'https://example.com')
    expect(screen.getByText('[ GitHub ]')).toHaveAttribute('href', 'https://github.com/test/repo')
  })

  it('hides links when not provided', () => {
    const noLinks: Project = { title: 'No Links', description: 'desc', tags: ['Tag'] }
    render(<ProjectCard project={noLinks} />)
    expect(screen.queryByText('[ Live ]')).toBeNull()
    expect(screen.queryByText('[ GitHub ]')).toBeNull()
  })
})
