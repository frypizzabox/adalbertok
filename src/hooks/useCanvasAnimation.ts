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

    let resizeTimer: ReturnType<typeof setTimeout>
    let lastWidth = 0

    const resize = () => {
      const newWidth = canvas.offsetWidth
      const newHeight = canvas.offsetHeight

      // Skip height-only changes (mobile browser chrome show/hide)
      if (lastWidth === newWidth && canvas.width === newWidth) return

      lastWidth = newWidth
      canvas.width = newWidth
      canvas.height = newHeight
      ctx.imageSmoothingEnabled = false
    }

    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    const observer = new ResizeObserver(debouncedResize)
    observer.observe(canvas)
    resize()

    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [draw])
}
