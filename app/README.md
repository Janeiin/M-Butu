# M'Butu Collection

A cinematic, editorial luxury website for a premium African hide wholesaler. Built as an immersive brand experience for interior designers, architects, retailers and hospitality groups.

Reinterpreted from the brief as an original design: dark earthy palette, large photography, restrained motion, and a signature zebra-hairline detail running through the interface.

## Stack

- **Next.js 15** (App Router, React 19, server components where sensible)
- **TypeScript**
- **Tailwind CSS** with a custom token system
- **Framer Motion** for scroll reveals, text masking and transitions
- **GSAP + ScrollTrigger** for the pinned horizontal projects section
- **Lenis** for smooth scrolling
- **Lucide** icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx              Root layout: fonts, metadata, chrome, providers
    page.tsx                Homepage (all sections)
    globals.css             Tailwind layers + design tokens + component classes
    collections/
      page.tsx              Collection index (filterable)
      [slug]/page.tsx       Dynamic product page (generateStaticParams)
    about/page.tsx          Heritage, founder story, timeline, sourcing map
    trade/page.tsx          Trade program, benefits, application form
    contact/page.tsx        Contact details, enquiry form, FAQ accordion
  components/
    providers/SmoothScroll  Lenis wrapper
    layout/                 Navbar, Footer, PageBanner
    sections/               Homepage + page-level sections
    ui/                     Cursor, Loader, MagneticButton, Reveal, RevealText,
                            StripeRule, FloatingEnquiry
  lib/
    data.ts                 All content (collections, projects, testimonials...)
    types.ts                Shared types
    utils.ts                cn() helper
```

## Design system

Tokens live in `tailwind.config.ts` and `globals.css`.

- **Palette:** ivory, warm-white, sand, camel, bronze, deep-brown, charcoal, rich-black. Bronze and camel are used sparingly as accents.
- **Type:** Cormorant Garamond (display) + Inter (body), loaded via `next/font`.
- **Motion:** shared `ease-luxe` cubic-bezier. Everything respects `prefers-reduced-motion`.
- **Signature detail:** the `StripeRule` zebra-hairline divider and the custom desktop cursor.

### Font note

The brief lists commercial typefaces (Canela, Suisse, Editorial New, Neue Haas Grotesk). Those require licensing, so this build ships with the closest freely available editorial pairing: **Cormorant Garamond** for display and **Inter** for body. Swap them in `layout.tsx` and `tailwind.config.ts` once licences are in place; the token structure is already wired to `--font-display` / `--font-sans`.

## Images

Photography uses Unsplash URLs as placeholders (savannah, hides, luxury interiors, craft). Remote hosts are allow-listed in `next.config.mjs`. Replace the URLs in `lib/data.ts` with licensed assets for production, ideally self-hosted for best Lighthouse scores.

## Performance

- `next/image` throughout with explicit `sizes`, AVIF/WebP output, and a prioritised hero image.
- Motion is GPU-friendly (transform/opacity only) and disabled under reduced-motion.
- Fonts are self-hosted via `next/font` with `display: swap`.

For production, self-host imagery and audit with Lighthouse; the structure is built to score in the mid to high 90s once assets are local.

## Scope

The homepage and all primary routes (collections index, dynamic product pages, about, trade, contact) are fully built and interactive. Forms are wired with local state and success states; connect them to your backend or a service like Formspark / Resend to go live.

Extension points intentionally left as clean insertion sites: wishlist / recently-viewed (add a small context provider), a true 360 viewer on product pages (drop into the gallery slot in `ProductDetail`), and a live export map on the about page (the current version is a lightweight stylised SVG).
