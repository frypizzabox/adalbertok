import { useRef, type ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'scroll-visible' : 'scroll-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
