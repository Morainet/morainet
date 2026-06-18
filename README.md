# Morainet

<!-- README-I18N:START -->

**English** | [汉语](./README.zh.md)

<!-- README-I18N:END -->

> **Build. Share. Evolve.** — Building enduring technology through open collaboration.
> **构建 · 共享 · 演化** —— 以开放协作打造持久的技术。

Marketing / brand site for **Morainet**, a technology collective focused on AI, mobile development, open source, and infrastructure. The brand is inspired by the geological concept of a *moraine* — the sediment a glacier accumulates and deposits over time, symbolizing accumulation, evolution, and lasting impact.

**Live:** https://morainet.vercel.app

---

## Tech stack

| Layer       | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | [Next.js 14](https://nextjs.org) (App Router) |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com) |
| Animation   | [Framer Motion](https://www.framer.com/motion/) |
| Fonts       | Inter (sans) + JetBrains Mono (mono), via `next/font` |
| i18n        | Lightweight React Context (EN / 中文)   |
| Deploy      | [Vercel](https://vercel.com)            |

- **Bilingual (EN / 中文)** — language toggle in the nav; preference persists in `localStorage`.
- **Dark glacier theme** — glacier blue + slate gray + neon-teal accents, glassmorphism, drifting gradient blobs, particles, and rock-strata textures.
- **SEO ready** — dynamic `robots.txt`, `sitemap.xml`, and an Open Graph image generated with `next/og`.

---

## Getting started

Requires **Node.js 20+** (see `.nvmrc`).

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (what Vercel runs)
npm run start    # serve the production build locally
npm run lint     # next lint
```

> Restoring from a zip? Run `npm ci` instead of `npm install` to install the exact locked versions from `package-lock.json`.

---

## Project structure

```
morainet/
├── app/
│   ├── layout.js              # root layout, fonts, SEO metadata
│   ├── page.js                # assembles all sections
│   ├── globals.css            # theme tokens, glass/strata/noise utilities
│   ├── robots.js              # → /robots.txt
│   ├── sitemap.js             # → /sitemap.xml
│   └── opengraph-image.js     # → dynamic 1200×630 OG image (next/og)
├── components/
│   ├── LanguageProvider.jsx   # i18n context + useT() helper
│   ├── LanguageToggle.jsx     # EN / 中文 switch
│   ├── Nav.jsx                # sticky glass nav + mobile menu
│   ├── Backdrop.jsx           # animated atmospheric background
│   ├── Reveal.jsx             # scroll-reveal wrapper (Framer Motion)
│   ├── Icons.jsx              # inline SVG icons + brand glyph
│   └── sections/              # Hero, About, Focus, Projects,
│                              # Philosophy, Community, Contact, Footer
├── lib/
│   └── content.js             # ALL copy (EN/中文) + site constants
├── tailwind.config.js         # color palette, keyframes, animations
├── vercel.json                # framework: nextjs
└── .nvmrc                     # Node 20
```

---

## Editing content

All site copy and key constants live in **`lib/content.js`**. Each text entry is a
`{ en, zh }` object, so editing both languages happens in one place:

```js
hero: {
  title: { en: "Build. Share. Evolve.", zh: "构建 · 共享 · 演化" },
  ...
}
```

Site-wide constants (also in `lib/content.js`):

| Constant     | Default                          | Purpose                          |
| ------------ | -------------------------------- | -------------------------------- |
| `EMAIL`      | `morainet.dev@gmail.com`         | Contact email                    |
| `GITHUB_URL` | `https://github.com/morainet`    | GitHub links                     |
| `SITE_URL`   | `https://morainet.dev`           | Canonical URL for SEO (override below) |

### Theme

Colors, animations, and keyframes are defined in `tailwind.config.js`
(`glacier`, `slatey`, `neon` palettes). Global effect utilities — `.glass`,
`.strata`, `.noise`, `.text-glacier-gradient` — live in `app/globals.css`.

---

## SEO

Generated automatically at build time:

- `GET /robots.txt`
- `GET /sitemap.xml`
- `GET /opengraph-image` — 1200×630 PNG used for `og:image` and Twitter cards

These use absolute URLs derived from `SITE_URL`. **Set the canonical domain via an
environment variable** so the URLs are correct in production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Deployment (Vercel)

The project is already linked to a Vercel project. To deploy:

```bash
npx vercel            # preview deployment
npx vercel --prod     # production deployment
```

After your first deploy, set the canonical URL in **Vercel → Settings →
Environment Variables**:

```
NEXT_PUBLIC_SITE_URL = https://morainet.vercel.app   # or your custom domain
```

Then redeploy (`npx vercel --prod`) so OG / canonical / sitemap URLs pick it up.

For automatic deploys on every commit, connect a Git repository in the Vercel
dashboard (Settings → Git).

---

## License

© Morainet. All rights reserved.
