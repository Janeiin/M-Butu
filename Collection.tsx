'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { materials } from '@/lib/content'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'
import StripeRule from '@/components/ui/StripeRule'

function CountUpPercent({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setN(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return <span ref={ref}>{n}%</span>
}

export default function Materials() {
  return (
    <section id="materials" className="relative bg-noir py-section">
      <div className="container-editorial">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">The Material</p>
          </Reveal>
          <MaskHeading
            as="h2"
            lines={['Made once,', 'by nature.']}
            className="font-display text-display-sm font-light text-ivory"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 font-display text-2xl font-light leading-snug text-ivory-dim text-balance md:text-3xl">
              A hide is not manufactured. It is grown, marked and weathered by a life lived on the
              plains. That is why no two are alike, and why they only deepen with time.
            </p>
          </Reveal>
        </div>

        <StripeRule className="mb-16 opacity-70" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <p className="font-display text-6xl font-light leading-none text-gold md:text-7xl">
                {m.value === '100%' ? <CountUpPercent target={100} /> : m.value}
              </p>
              <p className="mt-4 font-display text-xl text-ivory">{m.label}</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-mist">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
