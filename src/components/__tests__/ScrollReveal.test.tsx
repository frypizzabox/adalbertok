import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollReveal } from '../ScrollReveal'

describe('ScrollReveal', () => {
  it('renders children', () => {
    render(<ScrollReveal><span>Hello</span></ScrollReveal>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('starts with scroll-hidden class', () => {
    render(<ScrollReveal><span>Content</span></ScrollReveal>)
    const wrapper = screen.getByText('Content').parentElement
    expect(wrapper?.className).toContain('scroll-hidden')
  })

  it('applies transition delay from prop', () => {
    render(<ScrollReveal delay={200}><span>Delayed</span></ScrollReveal>)
    const wrapper = screen.getByText('Delayed').parentElement
    expect(wrapper?.style.transitionDelay).toBe('200ms')
  })

  it('passes additional className', () => {
    render(<ScrollReveal className="extra"><span>Styled</span></ScrollReveal>)
    const wrapper = screen.getByText('Styled').parentElement
    expect(wrapper?.className).toContain('extra')
  })
})
