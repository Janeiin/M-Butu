# M'Butu Collection

A cinematic, single-page luxury brand site for M'Butu Collection, a retailer of rare, ethically sourced African hides and exotic leathers. Built to feel like a design house rather than a shop: slow, editorial, immersive.

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18.18+ (Node 20 or 22 recommended).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, "Add New Project" and import the repo. Framework preset is detected as Next.js automatically; no environment variables are needed.
3. Deploy. Fonts (Cormorant Garamond, Inter) are pulled through `next/font/google` at build time, so Vercel handles them with no extra setup.

## Adding photography

The site ships with a procedural hide-texture system so every panel looks intentional before any photos exist. Real photography drops in without touching component internals. Place files under `public/images/` and set the paths in the locations below. Anything left undefined keeps its woven-texture placeholder.

Recommended: high-resolution, warm-toned, low-key images. Landscape for hero and section backdrops, portrait (4:5) for product cards.

Hero, About and the Hartmann feature — set in `lib/site.ts`:

```ts
media: {
  hero: '/images/hero-zebra.jpg',
  about: '/images/about-craft.jpg',
  hartmann: '/images/hartmann.jpg',
}
```

Product cards and the expanded detail view — add an `image` to any product in `lib/products.ts`:

```ts
{ id: 'hartmann-zebra', /* ... */, image: '/images/products/hartmann.jpg' }
```

Interior inspiration gallery — add an `image` to any item in `lib/content.ts` (the `inspiration` array):

```ts
{ caption: 'Private residence', place: 'Windhoek Hills', pattern: 'zebra-bold', image: '/images/inspiration/villa.jpg' }
```

No other edits are required. `components/visuals/Media.tsx` renders an optimized `next/image` when a `src` is present and falls back to the texture otherwise.

## Editing content

- Brand name, tagline, contact details, navigation, photo paths: `lib/site.ts`
- The eight products (name, latin name, rarity, origin, texture, interior use, copy): `lib/products.ts`
- Services, testimonials, timeline, materials stats, availability regions, sustainability principles, inspiration items: `lib/content.ts`

Contact currently points to `hello@mbutucollection.com` and a placeholder phone number in `lib/site.ts`; update both before going live. The contact form composes a `mailto:` rather than posting to a backend, so no server or API keys are involved.

## Project structure

```
app/
  layout.tsx        Fonts, metadata, global chrome (preloader, cursor, sand, nav, footer)
  page.tsx          Section assembly, in narrative order
  globals.css       Base layer, Lenis + cursor + grain utilities, reduced-motion
components/
  layout/           SmoothScroll, Nav, Footer, Preloader, Cursor, SandCanvas
  ui/               StripeRule (signature divider), Reveal + MaskHeading, Icon
  visuals/          HidePattern (procedural textures), Media (photo/texture), WorldMap
  sections/         Hero, About, Collection (+ ProductCard), HartmannFeature,
                    Availability, Services, Inspiration, Materials, Timeline,
                    Sustainability, Testimonials, Contact
lib/                site.ts, products.ts, content.ts, lenis.ts
public/images/      Photography goes here
```

## Notes

- Accessibility: every animation is guarded by `prefers-reduced-motion`. Lenis, the custom cursor, the drifting-sand canvas and the heavier GSAP scroll effects all disable cleanly for users who opt out.
- The custom cursor and sand particles only activate on fine-pointer (non-touch) devices.
- SEO: metadata, Open Graph and Twitter cards are set in `app/layout.tsx`. Set `site.url` to the production domain so canonical and OG URLs resolve correctly.
- No em dashes are used in the copy, by design.
