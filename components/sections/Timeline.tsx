'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '@/lib/content'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

export default function Timeline() {
  const root = useRef<HTMLElement>(null)
  const line = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !line.current) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 60%',
            end: 'bottom 75%',
            scrub: true,
          },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="provenance" className="relative bg-ink py-section">
      <div className="container-editorial">
        <div className="mb-20 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">The Journey</p>
          </Reveal>
          <MaskHeading
            as="h2"
            lines={['From the plains', 'to the room.']}
            className="font-display text-display-sm font-light text-ivory"
          />
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* spine */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <div ref={line} className="h-full w-full origin-top bg-gold" />
          </div>

          <ol className="space-y-16 md:space-y-24">
            {timeline.map((t, i) => (
              <li
                key={t.step}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:col-start-2' : ''
                }`}
              >
                {/* node */}
                <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2 w-2 rounded-full bg-gold ring-4 ring-ink" />
                </span>

                <Reveal delay={0.05}>
                  <div className={i % 2 === 1 ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}>
                    <p className="font-display text-6xl font-light leading-none text-gold/25 md:text-7xl">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-light text-ivory md:text-4xl">{t.step}</h3>
                    <p
                      className={`mt-3 font-body text-sm leading-relaxed text-mist md:max-w-sm ${
                        i % 2 === 1 ? '' : 'md:ml-auto'
                      }`}
                    >
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
