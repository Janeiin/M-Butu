'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Media from '@/components/visuals/Media'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'
import StripeRule from '@/components/ui/StripeRule'
import { site } from '@/lib/site'

export default function About() {
  const root = useRef<HTMLElement>(null)
  const img = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !img.current) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img.current!.querySelector('.parallax-inner'),
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="about" className="relative bg-noir py-section">
      <div className="container-editorial">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">The House</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={['A design house', 'not a retailer.']}
              className="font-display text-display-sm font-light text-ivory"
            />
          </div>
          <span className="hidden font-display text-6xl text-gold/30 md:block">01</span>
        </div>

        <div className="grid items-start gap-x-16 gap-y-12 md:grid-cols-2">
          <div ref={img} className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <div className="parallax-inner absolute inset-x-0 -inset-y-[14%]">
              <Media
                src={site.media.about}
                alt="Craftsmanship and selection"
                pattern="zebra-fine"
                tone={{ base: '#211913', mark: '#e7ddca' }}
                seed="about"
                className="h-full w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-noir/50 to-transparent" />
          </div>

          <div className="flex flex-col gap-14 md:pt-10">
            <Reveal>
              <p className="font-display text-3xl font-light leading-snug text-ivory text-balance md:text-4xl">
                Born of the African plains and highlands, each hide arrives with a heritage no workshop
                could invent.
              </p>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <h3 className="mb-3 font-display text-2xl text-gold">Ethical sourcing</h3>
                <p className="font-body text-sm leading-relaxed text-mist">
                  Every piece moves through regulated, permitted and traceable channels. Provenance is
                  not a promise here. It is documentation.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="mb-3 font-display text-2xl text-gold">Rarity</h3>
                <p className="font-body text-sm leading-relaxed text-mist">
                  No two hides are ever alike. What nature marks once, it never repeats, and that is
                  precisely the point.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <h3 className="mb-3 font-display text-2xl text-gold">Craftsmanship</h3>
                <p className="font-body text-sm leading-relaxed text-mist">
                  Cleaned, cured and finished by specialist hands over weeks, so a piece may live
                  quietly for decades.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 className="mb-3 font-display text-2xl text-gold">Timeless interiors</h3>
                <p className="font-body text-sm leading-relaxed text-mist">
                  Placed with restraint, a single hide becomes the still centre of a room, and holds it
                  for a lifetime.
                </p>
              </Reveal>
            </div>

            <StripeRule className="mt-2 max-w-md opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
