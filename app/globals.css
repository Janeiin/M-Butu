@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-cormorant: 'Cormorant Garamond', Georgia, serif;
    --font-inter: 'Inter', system-ui, sans-serif;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: auto; /* Lenis owns scrolling */
  }

  body {
    @apply bg-noir text-ivory font-body;
    overflow-x: hidden;
    font-feature-settings: 'ss01', 'cv01';
  }

  /* Lenis */
  html.lenis,
  html.lenis body {
    height: auto;
  }
  .lenis.lenis-smooth {
    scroll-behavior: auto !important;
  }
  .lenis.lenis-stopped {
    overflow: hidden;
  }

  ::selection {
    background: rgba(198, 164, 106, 0.24);
    color: #f4efe6;
  }

  /* Hide native cursor on fine-pointer devices where custom cursor runs */
  @media (hover: hover) and (pointer: fine) {
    body[data-cursor='on'],
    body[data-cursor='on'] * {
      cursor: none;
    }
  }
}

@layer components {
  .container-editorial {
    @apply mx-auto w-full max-w-editorial px-gutter;
  }

  .eyebrow {
    @apply font-body text-[0.7rem] uppercase tracking-eyebrow text-gold;
  }

  .link-underline {
    position: relative;
  }
  .link-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.18em;
    height: 1px;
    width: 100%;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .link-underline:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  /* Gold hairline shimmer for CTAs */
  .gold-line {
    background: linear-gradient(
      90deg,
      rgba(198, 164, 106, 0) 0%,
      rgba(198, 164, 106, 0.9) 50%,
      rgba(198, 164, 106, 0) 100%
    );
    background-size: 200% auto;
  }
}

@layer utilities {
  /* Text-mask reveal: each line clips its own overflow, spans slide up */
  .mask-line {
    display: block;
    overflow: hidden;
  }

  .text-balance {
    text-wrap: balance;
  }

  .grain {
    position: relative;
  }
  .grain::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.045;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
}

/* Respect reduced motion globally */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
