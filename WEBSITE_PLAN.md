# Deej Gala Artist Website - Implementation Plan

## 🎯 Vision
A stunning, immersive artist showcase that leans into the **cyberpunk aesthetic** from the provided artwork while maintaining clean usability. The site should feel like stepping into Deej Gala's sonic universe - futuristic, vibrant, and unforgettable.

---

## 🛠 Tech Stack (Your Preferred)

| Category | Technology |
|----------|------------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel (with security headers) |
| Type Safety | TypeScript |

---

## 🎨 Design System

### Color Palette (Extracted from Cyberpunk Art)
```
Primary Background:   #0a0a0f (deep space black)
Secondary Background: #13131a (dark purple-black)
Neon Cyan:           #00f5ff (primary accent)
Neon Magenta:        #ff00ff (secondary accent)
Neon Purple:         #9d4edd (tertiary)
Text Primary:        #ffffff
Text Secondary:      #a0a0b0
Glow Effect:         rgba(0, 245, 255, 0.4)
```

### Typography
- **Headlines**: Bold, futuristic sans-serif (Inter or Space Grotesk)
- **Body**: Clean, readable (Inter)
- **Accents**: Possible glitch/neon text effects on hover

### Visual Effects
- Subtle glow effects on interactive elements
- Gradient overlays (cyan → magenta)
- Scanline texture overlay for authentic cyberpunk feel
- Smooth parallax scrolling
- Particle/star field background animation

---

## 📐 Site Structure

### 1. Hero Section (Full Viewport)
- **Background**: Looping video (`Deej_022.mov` or `Deej_Gala_Socialmix_01.mov`)
- **Fallback**: Cyberpunk illustration with parallax
- **Content**:
  - Artist name "DEEJ GALA" with glowing neon effect
  - Tagline: "Welcome to the music of Deej Gala. Cheers ✌️🌎"
  - Floating Spotify play button
  - Scroll indicator with animation
- **Interactive**: Mouse-follow glow effect

### 2. About Section
- Split layout: Cyberpunk illustration on one side, bio on other
- Animated text reveal on scroll
- Key stats: Singer • Songwriter • Producer
- Personal vibe: indie pop-electronic, DIY independent artist

### 3. Music / Discography Section
- **Featured Track Player**: Custom-styled Spotify embed for top track
- **Release Grid**:
  ```
  EP:
  - Baby Steps (2019)

  Singles (chronological):
  - Waiting for You (2020)
  - Our Time Is Through (2020)
  - Heart Drop (2020)
  - Stupid Love (2021) ⭐ Popular
  - Starting Over (2021)
  - Light Me Up (2021)
  - Best I Could Be / What Makes You Alive (2021) ⭐ Popular
  - 4URLUV (2022)
  ```
- Each release card: hover effect reveals Spotify embed
- "Popular" badges on highlighted tracks

### 4. Visual Gallery
- Masonry/grid layout with the cyberpunk artwork
- Lightbox modal for full-screen viewing
- Potential: Video player for the .mov files
- Subtle hover animations (scale + glow)

### 5. Connect / Social Links
- Large, glowing social icons:
  - Spotify (primary CTA)
  - Instagram (@deejgala)
  - X/Twitter (@deejgala)
- Animated hover states with platform colors

### 6. Contact Section
- Simple contact form or "Get in Touch" with Instagram DM link
- Email placeholder for booking inquiries
- Subtle footer with copyright

---

## ✨ Interactive Features

### Animations (Framer Motion)
- **Page Load**: Staggered fade-in of hero elements
- **Scroll-triggered**: Sections animate in as they enter viewport
- **Parallax**: Background layers move at different speeds
- **Hover States**: Neon glow intensifies, subtle scale transforms
- **Cursor**: Custom cursor with glow trail (optional)

### Audio Integration
- Spotify embeds for all tracks (respecting user agency - no autoplay)
- Compact embeds that expand on interaction
- Dark theme embeds to match site aesthetic

### Performance Considerations
- Lazy load images and video
- Intersection Observer for scroll animations
- Optimized video compression
- Preload critical assets

---

## 📱 Responsive Breakpoints

| Breakpoint | Design Adjustments |
|------------|-------------------|
| Mobile (< 640px) | Single column, stacked sections, hamburger nav |
| Tablet (640-1024px) | Two-column layouts, adjusted spacing |
| Desktop (> 1024px) | Full experience, all effects enabled |

---

## 📁 File Structure

```
deej-gala-website/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Discography.tsx
│   │   ├── Gallery.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── ui/ (shadcn components)
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── config/
│   │   └── site-config.ts (all content/data centralized)
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Implementation Phases

### Phase 1: Foundation (30 min)
- Vite + React + TypeScript setup
- Tailwind + shadcn/ui configuration
- Custom color palette and design tokens
- Basic routing/structure

### Phase 2: Hero Section (45 min)
- Video background with fallback
- Animated typography
- Spotify CTA button
- Scroll indicator

### Phase 3: Content Sections (60 min)
- About section with parallax
- Discography with Spotify embeds
- Gallery with lightbox
- Social links with hover effects

### Phase 4: Polish & Interactivity (45 min)
- Framer Motion animations throughout
- Mobile responsiveness
- Performance optimization
- Final testing

---

## 🔗 Key URLs for Embeds

- **Spotify Artist**: https://open.spotify.com/artist/27M1k4nrHxBFTIvcoENcsV
- **Instagram**: https://www.instagram.com/deejgala
- **X/Twitter**: https://x.com/deejgala

---

## ✅ Success Criteria

1. ✨ Visually stunning first impression (hero section)
2. 🎵 Easy access to music (Spotify integration)
3. 📱 Flawless mobile experience
4. ⚡ Fast load times (< 3s)
5. 🎨 Cohesive cyberpunk aesthetic throughout
6. 🔗 Clear social/streaming CTAs

---

**Ready to build this? Let me know if you want any adjustments to the plan!**
