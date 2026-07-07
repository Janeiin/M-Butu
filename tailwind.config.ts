import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm-tinted museum blacks
        noir: '#0C0A08',
        ink: '#141009',
        panel: '#1A140D',
        espresso: '#2A2018',
        // The single accent, used with restraint
        gold: '#C6A46A',
        'gold-soft': '#B8975A',
        'gold-deep': '#8F7442',
        // Naturals
        camel: '#A8895F',
        sand: '#C9B79C',
        stone: '#D8CDBB',
        ivory: '#F4EFE6',
        'ivory-dim': '#E7DECF',
        mist: 'rgba(244,239,230,0.56)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale
        'display-sm': ['clamp(2.4rem, 5vw, 3.6rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(3.6rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        eyebrow: '0.34em',
        wide: '0.16em',
      },
      spacing: {
        section: 'clamp(6rem, 14vw, 12rem)',
        gutter: 'clamp(1.5rem, 6vw, 8rem)',
      },
      maxWidth: {
        editorial: '82rem',
        prose: '38rem',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
        silk: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-2%, -1%, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        drift: 'drift 24s ease-in-out infinite alternate',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
