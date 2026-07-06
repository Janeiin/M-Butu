import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F4EFE6',
        'warm-white': '#FAF7F1',
        sand: '#D9CBB6',
        camel: '#B08D5B',
        bronze: '#8C6A3F',
        'deep-brown': '#3B2A1E',
        charcoal: '#241C17',
        'rich-black': '#12100E',
        muted: '#8A7A68',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { eyebrow: '0.32em', wide2: '0.14em' },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: { content: '1600px' },
    },
  },
  plugins: [],
};
export default config;
