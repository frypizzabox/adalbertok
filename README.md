# adalbertok

Personal portfolio website for Adalberto Kutuxidis — a Dark Souls-inspired pixel art site with an animated Canvas 2D bonfire scene, built with a lean stack and zero animation libraries.

## Tech Stack

- **Vite** — build tool
- **React 18** + TypeScript
- **Tailwind CSS v4** — styling with custom Dark Souls bonfire theme
- **Canvas 2D API** — animated pixel-art bonfire, trees, stars, embers
- **IntersectionObserver** — scroll-triggered reveal animations
- **Google Fonts** — Press Start 2P, Outfit, JetBrains Mono

No animation libraries. All visual effects are native browser APIs.

## Features

- Full-screen pixel-art bonfire hero scene with twinkling stars, flickering flames, pixel hero sprite, and forest trees
- Scroll-reveal animations on all sections
- Project card grid with ember glow hover effects
- Terminal-styled contact section
- Responsive design (mobile + desktop)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173/`.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Sticky nav with pixel-font branding
│   ├── Hero.tsx             # Full-viewport bonfire scene wrapper
│   ├── BonfireCanvas.tsx    # Canvas 2D animated scene
│   ├── About.tsx            # Bio, experience, skills
│   ├── Projects.tsx         # Project card grid
│   ├── ProjectCard.tsx      # Individual project card
│   ├── Contact.tsx          # Terminal-styled social links
│   ├── Footer.tsx           # Copyright footer
│   └── ScrollReveal.tsx     # IntersectionObserver wrapper
├── hooks/
│   ├── useCanvasAnimation.ts
│   └── useIntersectionObserver.ts
├── data/
│   └── projects.ts          # Project entries (edit this!)
├── App.tsx
├── index.css                # Tailwind + custom theme
└── main.tsx
```

## Customization

- **Projects**: Edit `src/data/projects.ts` to add your own projects
- **About**: Edit `src/components/About.tsx` to update bio, skills, and experience
- **Contact**: Edit `src/components/Contact.tsx` to update social links
- **Colors**: Edit the `@theme` block in `src/index.css` to change the color palette
- **CV**: Replace `public/CV_Adalberto.pdf` with your own

## License

MIT
