# Deej Gala - Artist Website

A stunning, immersive artist showcase website for **Deej Gala**, an independent indie pop/electronic musician. Features a cyberpunk aesthetic with neon colors, glass-morphism effects, and smooth animations.

## Tech Stack

- **React 19** + **Vite 7** - Modern build tooling
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Clean icons
- **TypeScript** - Type safety

## Features

- Cyberpunk neon design (cyan/magenta/purple palette)
- Liquid glass UI components
- 3-layer parallax particle system
- Scroll-triggered animations
- Spotify embeds for all tracks
- Responsive design with iOS safe area support
- PWA-ready with app clip support

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

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx   # Glass nav + mobile menu
│   ├── Hero.tsx         # Parallax hero + particles
│   ├── About.tsx        # Bio section
│   ├── Discography.tsx  # Spotify embeds + track cards
│   ├── Gallery.tsx      # Lightbox gallery
│   ├── SocialLinks.tsx  # Social platform links
│   └── Footer.tsx
├── config/
│   └── site-config.ts   # Centralized content
├── hooks/
│   └── useScrollAnimation.ts
├── index.css            # Custom cyberpunk styles
├── App.tsx
└── main.tsx
```

## Deployment

Configured for Vercel with security headers. Push to GitHub and connect to Vercel for automatic deployments.

**Live site:** [deej-gala-music.vercel.app](https://deej-gala-music.vercel.app)

## Artist Links

- [Spotify](https://open.spotify.com/artist/27M1k4nrHxBFTIvcoENcsV)
- [Instagram](https://www.instagram.com/deejgala)
- [X / Twitter](https://x.com/deejgala)

---

Made with neon dreams and good vibes.
