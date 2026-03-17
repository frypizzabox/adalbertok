import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCanvasAnimation } from '../useCanvasAnimation'
import { useRef } from 'react'

let rafCallback: FrameRequestCallback | null = null

beforeEach(() => {
  vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb) => {
    rafCallback = cb
    return 1
  })
  vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

  globalThis.ResizeObserver = class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver
})

afterEach(() => {
  vi.restoreAllMocks()
  rafCallback = null
})

function createMockCanvas() {
  const ctx = {
    imageSmoothingEnabled: true,
    canvas: { width: 800, height: 600 },
  }
  const canvas = document.createElement('canvas')
  Object.defineProperty(canvas, 'offsetWidth', { value: 800 })
  Object.defineProperty(canvas, 'offsetHeight', { value: 600 })
  vi.spyOn(canvas, 'getContext').mockReturnValue(ctx as unknown as CanvasRenderingContext2D)
  return { canvas, ctx }
}

describe('useCanvasAnimation', () => {
  it('starts a requestAnimationFrame loop', () => {
    const { canvas } = createMockCanvas()
    const draw = vi.fn()

    renderHook(() => {
      const ref = useRef(canvas)
      useCanvasAnimation(ref, draw)
    })

    expect(requestAnimationFrame).toHaveBeenCalled()
  })

  it('calls the draw function when animation frame fires', () => {
    const { canvas } = createMockCanvas()
    const draw = vi.fn()

    renderHook(() => {
      const ref = useRef(canvas)
      useCanvasAnimation(ref, draw)
    })

    expect(rafCallback).not.toBeNull()
    rafCallback!(1000)
    expect(draw).toHaveBeenCalledTimes(1)
  })

  it('disables image smoothing on the context', () => {
    const { canvas, ctx } = createMockCanvas()
    const draw = vi.fn()

    renderHook(() => {
      const ref = useRef(canvas)
      useCanvasAnimation(ref, draw)
    })

    expect(ctx.imageSmoothingEnabled).toBe(false)
  })

  it('cancels animation frame on unmount', () => {
    const { canvas } = createMockCanvas()
    const draw = vi.fn()

    const { unmount } = renderHook(() => {
      const ref = useRef(canvas)
      useCanvasAnimation(ref, draw)
    })

    unmount()
    expect(cancelAnimationFrame).toHaveBeenCalled()
  })
})
