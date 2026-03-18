import { useEffect, type RefObject } from 'react'

export function useCanvasAnimation(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  draw: (ctx: CanvasRenderingContext2D, time: number) => void
) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.imageSmoothingEnabled = false

    let animId: number

    const loop = (time: number) => {
      draw(ctx, time)
      animId = requestAnimationFrame(loop)
    }

    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      ctx.imageSmoothingEnabled = false
    }

    resize()

    let observer: ResizeObserver | null = null
    if (!isMobile) {
      observer = new ResizeObserver(resize)
      observer.observe(canvas)
    }

    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      observer?.disconnect()
    }
  }, [draw])
}
