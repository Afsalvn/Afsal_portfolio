# Afsal V N — Portfolio

Personal portfolio of **Afsal V N** — final-year Electrical & Electronics Engineering student at CET Trivandrum, specializing in **VLSI, digital design, and embedded systems**.

**🔗 Live site:** [portfolioafsal.vercel.app](https://portfolioafsal.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?logo=threedotjs&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

## Features

- **Interactive 3D microchip** in the hero — a stylized IC package with glowing die, pins, and emissive traces, built with Three.js / React Three Fiber. Idle-rotates, floats, and tilts toward the cursor. Lazy-loaded as a separate chunk and desktop-only, so mobile never downloads the 3D bundle.
- **Scroll-driven animations** — staggered reveals, letter-by-letter hero text, count-up stat counters, and an animated timeline connector, all powered by Framer Motion.
- **3D tilt project cards** — perspective tilt with a cursor-tracking glare highlight, spring-damped; disabled for touch input.
- **Dark hardware-themed design** — charcoal/navy palette with electric-blue and neon-green accents, circuit-grid backdrops, JetBrains Mono labels.
- **Fully responsive** — desktop, tablet, and mobile layouts with reduced animations on smaller screens.
- **Fast** — code-split Three.js chunk, optimized WebP imagery, ~117KB gzipped main bundle.

## Sections

| Section | Content |
| --- | --- |
| Hero | Headline, 3D chip, socials, resume download |
| About | Bio, education, portrait, animated stats |
| Skills | Languages, hardware/embedded, EDA tooling, ML & signal processing |
| Projects | UART on FPGA, InnoPlay (TinyML Jury Award), Swiggy Expense Tracker, AI Finance Tracker |
| Research | SSVEP brain-computer interface — pipeline, metrics, methodology notes |
| Experience | C2S Lab internship, IEEE SB CET Chairperson, RoboCET, GDGC CET |
| Contact | Email, GitHub, LinkedIn, resume |

## Tech Stack

- **Framework:** React 19 + TypeScript, built with Vite 8
- **Styling:** Tailwind CSS v4 (CSS-first theme tokens)
- **Animation:** Framer Motion (scroll triggers, springs, letter reveals)
- **3D:** Three.js via @react-three/fiber + @react-three/drei
- **Icons:** Lucide React
- **Hosting:** Vercel

## Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# type-check and build for production
npm run build

# preview the production build
npm run preview
```

## Project Structure

```
src/
├── data/portfolio.ts        # all site content (bio, projects, skills, timeline)
├── components/
│   ├── three/Chip3D.tsx     # 3D microchip (lazy-loaded)
│   ├── ui/                  # reusable primitives (Reveal, Counter, TiltCard, Button…)
│   └── *.tsx                # page sections (Hero, About, Skills, Projects…)
├── assets/                  # optimized images
└── index.css                # Tailwind theme tokens + global styles
```

To update site content (projects, skills, roles), edit `src/data/portfolio.ts` — no component changes needed.

## Contact

- **Email:** [afzalvn2005@gmail.com](mailto:afzalvn2005@gmail.com)
- **GitHub:** [github.com/Afsalvn](https://github.com/Afsalvn)
- **LinkedIn:** [linkedin.com/in/afsalvn6](https://linkedin.com/in/afsalvn6)
