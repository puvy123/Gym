# VOLT Fitness — Vue 3 + Three.js

A responsive, multi-page gym website starter using Vue 3, TypeScript, Vue Router, Tailwind CSS, Lucide icons, and Three.js.

## Requirements
- Node.js 20+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run type-check
npm run build
npm run preview
```

## Pages
- `/` — Home, 3D hero, programs preview, manifesto, pricing preview
- `/programs` — Training programs
- `/trainers` — Coach profiles
- `/membership` — Membership tiers, monthly/annual toggle, FAQs
- `/about` — Brand story and values
- `/contact` — Contact form UI

## Customization
- Replace the demo gym address, phone, email, trainer names, prices, and statistics before launch.
- Images use remote Unsplash URLs. Download and self-host them for a production site if needed.
- The contact form currently validates and displays a frontend success state only. Connect an API or form service to deliver submissions.
- Membership selection currently links to the contact page; connect a payment/subscription provider for real sign-ups.
- Three.js renders an animated neon wireframe object, orbital rings, and particles. If WebGL is unavailable, the CSS fallback remains.

## Tailwind
Tailwind is configured in `tailwind.config.js`; custom site styling lives in `src/style.css`.
