'use client'

import { regions } from '@/lib/content'
import WorldMap from '@/components/visuals/WorldMap'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'
import StripeRule from '@/components/ui/StripeRule'

export default function Availability() {
  return (
    <section id="availability" className="relative overflow-hidden bg-ink py-section">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Reach</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={['Global', 'availability.']}
              className="font-display text-display-sm font-light text-ivory"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-prose font-body text-sm leading-relaxed text-mist">
              Trusted by luxury designers and collectors throughout Europe and Australia. Now available
              throughout the Gulf Cooperation Council, with Doha as our regional home.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative aspect-[2/1] w-full">
            <WorldMap />
          </div>
        </Reveal>

        <StripeRule className="my-16 opacity-70" />

        <div className="grid gap-10 md:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-light text-ivory">{r.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-mist">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
