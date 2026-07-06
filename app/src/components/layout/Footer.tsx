import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cols = [
  {
    title: 'Collections',
    links: [
      { label: 'Hartmann Zebra', href: '/collections/hartmann-zebra' },
      { label: 'Plains Zebra', href: '/collections/plains-zebra' },
      { label: 'Springbok', href: '/collections/springbok' },
      { label: 'Nguni Cowhide', href: '/collections/nguni-cowhide' },
      { label: 'Leather Rugs', href: '/collections/leather-rugs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Heritage', href: '/about' },
      { label: 'Sustainability', href: '/#sustainability' },
      { label: 'Projects', href: '/#projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Trade Enquiries',
    links: [
      { label: 'Become a Partner', href: '/trade' },
      { label: 'Request Samples', href: '/trade' },
      { label: 'Download Resources', href: '/trade' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-rich-black px-5 pb-10 pt-20 text-warm-white sm:px-8 md:pt-28 xl:px-14">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-x-6 gap-y-11 border-b border-warm-white/10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-3xl font-light tracking-[0.03em]">M&rsquo;Butu Collection</p>
          <p className="mt-4 max-w-[34ch] text-sm font-light leading-relaxed text-warm-white/50">
            Genuine African luxury hides, sourced responsibly for the world&rsquo;s finest interiors.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h5 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-camel">{c.title}</h5>
            {c.links.map((l) => (
              <Link
                key={l.label + l.href}
                href={l.href}
                className="mb-3 block text-sm font-light text-warm-white/70 transition-colors hover:text-warm-white"
              >
                {l.label}
              </Link>
            ))}
            {c.title === 'Trade Enquiries' && (
              <form className="mt-4 flex items-center border-b border-warm-white/30 pb-2.5" action="#">
                <input
                  type="email"
                  placeholder="Newsletter email"
                  aria-label="Newsletter email"
                  className="flex-1 bg-transparent text-sm text-warm-white placeholder:text-warm-white/40 focus:outline-none"
                />
                <button aria-label="Subscribe" className="text-camel">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 pt-8">
        <span className="text-xs text-warm-white/40">© 2026 M&rsquo;Butu Collection. CITES-certified export.</span>
        <span className="text-xs text-warm-white/40">Windhoek · London · Doha</span>
      </div>
    </footer>
  );
}
