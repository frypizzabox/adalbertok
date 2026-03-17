import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIntersectionObserver } from '../useIntersectionObserver'
import { useRef } from 'react'

let observeCallback: IntersectionObserverCallback

beforeEach(() => {
  class MockIO {
    constructor(callback: IntersectionObserverCallback) {
      observeCallback = callback
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.IntersectionObserver = MockIO as unknown as typeof IntersectionObserver
})

describe('useIntersectionObserver', () => {
  it('returns false initially', () => {
    const { result } = renderHook(() => {
      const ref = useRef(document.createElement('div'))
      return useIntersectionObserver(ref)
    })

    expect(result.current).toBe(false)
  })

  it('returns true when element intersects', () => {
    const { result } = renderHook(() => {
      const ref = useRef(document.createElement('div'))
      return useIntersectionObserver(ref)
    })

    act(() => {
      observeCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(result.current).toBe(true)
  })

  it('stays true after intersecting (one-time reveal)', () => {
    const { result } = renderHook(() => {
      const ref = useRef(document.createElement('div'))
      return useIntersectionObserver(ref)
    })

    act(() => {
      observeCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      )
    })

    expect(result.current).toBe(true)
  })
})
