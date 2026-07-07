'use client'

import { site } from '@/lib/site'
import { scrollToId } from '@/lib/lenis'
import StripeRule from '@/components/ui/StripeRule'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-noir pb-12 pt-section">
      <div className="container-editorial">
        <StripeRule className="mb-16 opacity-70" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl leading-none text-ivory md:text-5xl">
              M&rsquo;Butu
              <span className="block text-gold">Collection</span>
            </p>
            <p className="mt-6 max-w-prose font-body text-sm leading-relaxed text-mist">
              Rare African luxury hides. Naturally bold, ethically sourced, exceptionally rare.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToId(item.href)}
                    className="link-underline font-body text-sm text-ivory-dim hover:text-ivory"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 font-body text-sm text-ivory-dim">
              <li>
                <a href={`mailto:${site.contact.email}`} className="link-underline hover:text-ivory">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="link-underline hover:text-ivory">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline hover:text-ivory"
                >
                  {site.contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 font-body text-xs text-mist md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} M&rsquo;Butu Collection. All rights reserved.
          </p>
          <p>
            Ethically sourced. CITES compliant. Doha &middot; Europe &middot; Australia &middot; GCC
          </p>
        </div>
      </div>
    </footer>
  )
}
