import { BonfireCanvas } from './BonfireCanvas'

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <BonfireCanvas />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="font-pixel text-soul-ember text-lg md:text-2xl mb-4 drop-shadow-lg">
          Adalberto Kutuxidis
        </h1>
        <p className="font-mono text-soul-flame text-sm md:text-base opacity-80">
          Developer &middot; Creator &middot; Pixel Enthusiast
        </p>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer">
        <div className="w-4 h-4 border-b-2 border-r-2 border-soul-ember rotate-45 animate-bounce opacity-60" />
      </a>
    </section>
  )
}
