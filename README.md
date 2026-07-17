# Ram Prasath.T - Actor Portfolio

A premium, editorial actor portfolio built around full-bleed cinematic photography, restrained typography, and purposeful motion — inspired by the layout principles of premium design systems (Apple, Framer, Linear) rather than dense UI chrome.

## Live Preview
[Link to Live Site] *(Add Vercel link here after deployment)*

## Features
- **Cinematic editorial design**: deep charcoal palette, a single refined accent color, and a Fraunces/Inter type pairing instead of dense multi-color UI chrome.
- **Full-bleed hero**: large-format portrait photography with a pull-quote and scroll cue.
- **Reusable component system**: shared `Button`, `Section`, `SectionHeader`, `Reveal`, `Tag`, `IconLink`, and `Modal` primitives under `src/components/ui/`, so every section is built from the same building blocks instead of one-off markup.
- **Content layer**: profile, contact, experience, and media data live in `src/content/*.js` — a single source of truth, so updating a phone number or adding a credit doesn't require touching component code.
- **Sticky navigation**: scroll-spy active states, mobile slide-in menu.
- **Cinematic video gallery**: YouTube-backed showreel grid with a lightbox modal.
- **Optimized imagery**: source photography is resized/compressed and served as WebP with JPEG fallback via `<picture>`.
- **Accessible by default**: visible focus states, `prefers-reduced-motion` support throughout, skip-to-content link, semantic landmarks.
- **Responsive**: a single mobile-first breakpoint scale (480/768/1024/1280).
- **Print to PDF Optimization**: `@media print` rules preserve the dark theme when saving the portfolio as a digital PDF resume.

## Tech Stack
- **Framework**: React 19 (Vite 7)
- **Styling**: Vanilla CSS with a design-token layer (`src/styles/tokens.css`)
- **Animations**: Framer Motion, gated by `prefers-reduced-motion`
- **Icons**: Lucide React & React Icons (WhatsApp)
- **Linting**: ESLint (flat config)

## Project Structure
```
src/
  content/     profile, contact, experience, media — single source of truth
  styles/      design tokens, reset/base, layout utilities
  hooks/       useReducedMotion, useScrollSpy, useLockBodyScroll
  components/
    ui/        reusable primitives (Button, Section, Reveal, Modal, ...)
    layout/    Navbar, Footer
    sections/  Hero, About, Experience, Portfolio, Contact
```

## Running Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Lint**
   ```bash
   npm run lint
   ```

4. **Production Build**
   ```bash
   npm run build
   ```

## Contact
**Ram Prasath.T**
- **Email**: raamprasath10@gmail.com
- **Phone / WhatsApp**: +91 95668 71226
- **Instagram**: [@raam.0110](http://www.instagram.com/raam.0110)
