import { useRef, useCallback } from 'react'
import { useCanvasAnimation } from '../hooks/useCanvasAnimation'

interface Star {
  x: number
  y: number
  brightness: number
  twinkleSpeed: number
}

interface Ember {
  x: number
  y: number
  vy: number
  vx: number
  life: number
  maxLife: number
}

const STAR_COUNT = 80
const EMBER_COUNT = 25

// Pixel hero sprite (sitting by bonfire) — each row is a series of color codes
// 0=transparent, 1=dark gray (armor), 2=light gray (highlights), 3=skin, 4=brown (cape), 5=soul-ember (eye visor)
const HERO_SPRITE = [
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 5, 5, 5, 1, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 2, 1, 0, 0],
  [0, 4, 1, 1, 1, 4, 0],
  [4, 4, 1, 1, 1, 4, 4],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
]

const SPRITE_COLORS: Record<number, string> = {
  1: '#3a3a4a',
  2: '#6a6a7a',
  3: '#c4a882',
  4: '#4a3828',
  5: '#ff6b1a',
}

function createStars(w: number, h: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.floor(Math.random() * w),
    y: Math.floor(Math.random() * h * 0.75),
    brightness: Math.random(),
    twinkleSpeed: 0.5 + Math.random() * 2,
  }))
}

function createEmbers(cx: number, cy: number): Ember[] {
  return Array.from({ length: EMBER_COUNT }, () => spawnEmber(cx, cy))
}

function spawnEmber(cx: number, cy: number): Ember {
  return {
    x: cx + (Math.random() - 0.5) * 20,
    y: cy,
    vy: -(0.3 + Math.random() * 0.8),
    vx: (Math.random() - 0.5) * 0.4,
    life: 0,
    maxLife: 60 + Math.random() * 80,
  }
}

export function BonfireCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const embersRef = useRef<Ember[]>([])
  const lastSizeRef = useRef({ w: 0, h: 0 })

  const draw = useCallback((ctx: CanvasRenderingContext2D, time: number) => {
    const w = ctx.canvas.width
    const h = ctx.canvas.height

    // Reinitialize particles on resize
    if (lastSizeRef.current.w !== w || lastSizeRef.current.h !== h) {
      lastSizeRef.current = { w, h }
      starsRef.current = createStars(w, h)
      const fireX = Math.floor(w / 2)
      const fireY = Math.floor(h * 0.82)
      embersRef.current = createEmbers(fireX, fireY)
    }

    const fireX = Math.floor(w / 2)
    const fireY = Math.floor(h * 0.82)
    const t = time / 1000

    // Sky
    ctx.fillStyle = '#080810'
    ctx.fillRect(0, 0, w, h)

    // Subtle dark blue gradient near horizon
    const skyGrad = ctx.createLinearGradient(0, h * 0.5, 0, h * 0.85)
    skyGrad.addColorStop(0, 'transparent')
    skyGrad.addColorStop(1, '#0c1020')
    ctx.fillStyle = skyGrad
    ctx.fillRect(0, h * 0.5, w, h * 0.35)

    // Stars
    for (const star of starsRef.current) {
      const flicker = Math.sin(t * star.twinkleSpeed + star.brightness * 10)
      // Stepped opacity: 3 levels
      const opacity = flicker > 0.3 ? 1 : flicker > -0.3 ? 0.5 : 0.15
      ctx.fillStyle = `rgba(200, 210, 255, ${opacity})`
      ctx.fillRect(star.x, star.y, 2, 2)
    }

    // Ground
    ctx.fillStyle = '#1a1510'
    ctx.fillRect(0, Math.floor(h * 0.85), w, h * 0.15)
    // Ground texture
    ctx.fillStyle = '#141008'
    for (let i = 0; i < 60; i++) {
      const gx = Math.floor((Math.sin(i * 73.7) * 0.5 + 0.5) * w)
      const gy = Math.floor(h * 0.85 + (Math.sin(i * 37.3) * 0.5 + 0.5) * h * 0.14)
      ctx.fillRect(gx, gy, 4, 2)
    }

    // Fire glow (radial gradient)
    const glowRadius = 120 + Math.sin(t * 3) * 15
    const glow = ctx.createRadialGradient(fireX, fireY, 0, fireX, fireY, glowRadius)
    glow.addColorStop(0, 'rgba(255, 107, 26, 0.15)')
    glow.addColorStop(0.5, 'rgba(255, 107, 26, 0.05)')
    glow.addColorStop(1, 'transparent')
    ctx.fillStyle = glow
    ctx.fillRect(fireX - glowRadius, fireY - glowRadius, glowRadius * 2, glowRadius * 2)

    // Bonfire logs
    ctx.fillStyle = '#3a2010'
    ctx.fillRect(fireX - 12, fireY + 2, 24, 6)
    ctx.fillStyle = '#2a1808'
    ctx.fillRect(fireX - 8, fireY + 4, 16, 4)

    // Bonfire flames (pixel blocks)
    const flameColors = ['#ff6b1a', '#ffa040', '#ff4500', '#ffe060']
    for (let i = 0; i < 8; i++) {
      const fx = fireX - 10 + Math.floor(Math.sin(t * 4 + i * 1.7) * 4) + i * 3
      const fy = fireY - 4 - Math.floor(Math.abs(Math.sin(t * 5 + i * 2.1)) * 16)
      const fh = 4 + Math.floor(Math.abs(Math.sin(t * 3 + i)) * 8)
      ctx.fillStyle = flameColors[i % flameColors.length]
      ctx.fillRect(fx, fy, 4, fh)
    }

    // Flame core (bright center)
    ctx.fillStyle = '#ffe880'
    ctx.fillRect(fireX - 4, fireY - 6, 8, 6)

    // Hero sprite (sitting to the left of fire)
    const heroX = fireX - 40
    const heroBaseY = Math.floor(h * 0.85) - HERO_SPRITE.length * 3
    const pixelSize = 3
    for (let row = 0; row < HERO_SPRITE.length; row++) {
      for (let col = 0; col < HERO_SPRITE[row].length; col++) {
        const colorId = HERO_SPRITE[row][col]
        if (colorId === 0) continue
        ctx.fillStyle = SPRITE_COLORS[colorId]
        ctx.fillRect(
          heroX + col * pixelSize,
          heroBaseY + row * pixelSize,
          pixelSize,
          pixelSize
        )
      }
    }

    // Sword next to hero
    ctx.fillStyle = '#8a8a9a'
    ctx.fillRect(heroX + HERO_SPRITE[0].length * pixelSize + 2, heroBaseY + 6, 2, 18)
    ctx.fillStyle = '#6a5a3a'
    ctx.fillRect(heroX + HERO_SPRITE[0].length * pixelSize, heroBaseY + 16, 6, 3)

    // Embers
    for (const ember of embersRef.current) {
      ember.x += ember.vx
      ember.y += ember.vy
      ember.life++

      if (ember.life > ember.maxLife) {
        Object.assign(ember, spawnEmber(fireX, fireY))
      }

      const progress = ember.life / ember.maxLife
      // Stepped opacity: 4 levels
      const opacity = progress < 0.2 ? 1 : progress < 0.5 ? 0.7 : progress < 0.8 ? 0.4 : 0.1
      ctx.fillStyle = `rgba(255, ${100 + Math.floor(Math.random() * 60)}, 20, ${opacity})`
      ctx.fillRect(Math.floor(ember.x), Math.floor(ember.y), 2, 2)
    }

    // Vignette
    const vignette = ctx.createRadialGradient(w / 2, h / 2, w * 0.3, w / 2, h / 2, w * 0.8)
    vignette.addColorStop(0, 'transparent')
    vignette.addColorStop(1, 'rgba(0, 0, 0, 0.6)')
    ctx.fillStyle = vignette
    ctx.fillRect(0, 0, w, h)
  }, [])

  useCanvasAnimation(canvasRef, draw)

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
