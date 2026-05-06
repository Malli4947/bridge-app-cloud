# ⚡ Mallikarjuna Rao — React + TypeScript Portfolio

A modern, animation-rich portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

> Portfolio of **Mallikarjuna Rao Lattupalli** — Full Stack MERN + React Native Developer

## ✨ Features

- ⚡ **Vite** — Lightning-fast dev server and optimized production builds
- 🔷 **React 18 + TypeScript** — Type-safe, component-driven architecture
- 🎨 **Tailwind CSS** — Utility-first styling with a custom design system
- 🎭 **Framer Motion** — Production-grade animations (page reveals, modal transitions, layout animations)
- 🖱️ **Custom cursor** with hover-aware scaling (desktop only)
- ✨ **Animated particle network** background with mouse repulsion + connecting lines
- 📜 **Scroll-driven reveals** with Intersection Observer hooks
- 📊 **Animated counter** stats (3+, 8+, 30%, 15+) trigger when in view
- 🎴 **Interactive project modals** with rich detail views and feature lists
- 📱 **Fully responsive** — adaptive grids, mobile menu, touch-optimized
- ⚡ **Custom loader** with staggered Framer Motion letter animations
- 📨 **Working contact form** that opens the user's email client pre-filled
- 🌀 **Infinite tech marquee** animation
- 🎭 **3D card tilt** effects on stat cards using mouse position
- 🥚 **Hidden easter egg** — type "mallikarjuna" anywhere on the page

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥ 18.0.0
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Install dependencies
npm install

# Start dev server (opens automatically at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── public/                 # Static assets
├── src/
│   ├── components/         # All React components
│   │   ├── Loader.tsx          # Animated load screen
│   │   ├── Cursor.tsx          # Custom cursor
│   │   ├── ParticleBackground.tsx  # Canvas particles + grid
│   │   ├── Navigation.tsx      # Sticky nav with mobile menu
│   │   ├── Hero.tsx            # Landing section
│   │   ├── About.tsx           # About + animated stats
│   │   ├── Skills.tsx          # Skill grid + tech marquee
│   │   ├── Experience.tsx      # Timeline of work history
│   │   ├── Projects.tsx        # Project cards grid
│   │   ├── ProjectModal.tsx    # Project detail modal
│   │   ├── Contact.tsx         # Contact form + info
│   │   ├── Footer.tsx          # Footer with bg text
│   │   ├── Toast.tsx           # Toast notification
│   │   └── SectionHeader.tsx   # Shared section heading
│   ├── data/
│   │   └── portfolio.ts        # All portfolio content (projects, skills, experience)
│   ├── hooks/
│   │   ├── useScrollProgress.ts  # Scroll tracking
│   │   ├── useReveal.ts          # IntersectionObserver wrapper
│   │   └── useCountUp.ts         # Counter animation
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind + global styles
├── index.html              # HTML entry
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Info
All content lives in **`src/data/portfolio.ts`** — edit it to update:
- `personalInfo` — name, email, phone, social URLs
- `projects` — add/edit/remove portfolio projects
- `skillCategories` — change skill categories and proficiency
- `experiences` — work history timeline
- `stats` — animated counter values
- `navLinks` — navigation menu items
- `techMarquee` — infinite scrolling tech list

### Change Theme Colors
Edit **`tailwind.config.js`** — all colors are defined under `theme.extend.colors`:

```js
colors: {
  accent: {
    cyan: '#06d4d4',     // Primary accent
    purple: '#a855f7',   // Secondary
    amber: '#fbbf24',    // Italic accents
    pink: '#ec4899',     // Highlights
  },
}
```

The `bg-gradient-1` uses these three colors. Update the gradient in `tailwind.config.js` if you change the palette.

### Change Fonts
Update the Google Fonts `<link>` in `index.html` and the `fontFamily` config in `tailwind.config.js`.

## 🌐 Deployment

### Vercel (recommended — one-click deploy)
1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Vite — just click Deploy

### Netlify
1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → New site from Git
3. Build command: `npm run build` · Publish directory: `dist`

### GitHub Pages
1. Add to `vite.config.ts`: `base: '/your-repo-name/'`
2. Build: `npm run build`
3. Push the `dist/` folder to a `gh-pages` branch (or use the `gh-pages` npm package)

### Manual / Static Hosting
After `npm run build`, the `dist/` folder contains everything needed for any static host (S3, Cloudflare Pages, Firebase Hosting, etc.).

## 🔧 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Bricolage Grotesque, Instrument Serif, JetBrains Mono |

## 🎯 Performance

- ⚡ ~150KB gzipped production bundle
- 🚀 < 1.5s First Contentful Paint
- ♿ Accessible — semantic HTML, keyboard nav, `prefers-reduced-motion` support
- 📱 Mobile-first responsive design
- 🔍 SEO-ready with Open Graph meta tags

## 📞 Contact

- 📧 **Email:** mrao.developer@gmail.com
- 📱 **Phone:** +91 63044 34947
- 💼 **LinkedIn:** [mallikarjuna-rao-lattupalli](https://linkedin.com/in/mallikarjuna-rao-lattupalli)
- 💻 **GitHub:** [Malli4947](https://github.com/Malli4947)
- 📍 **Location:** Hyderabad, Telangana, India

---

