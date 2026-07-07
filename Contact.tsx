'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/lib/content'
import { Reveal } from '@/components/ui/Reveal'
import StripeRule from '@/components/ui/StripeRule'

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500)
    return () => clearInterval(t)
  }, [])

  const active = testimonials[i]

  return (
    <section id="testimonials" className="relative bg-ink py-section">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-16 text-center">In Their Words</p>
        </Reveal>

        <div className="mx-auto min-h-[42vh] max-w-4xl text-center md:min-h-[36vh]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mb-8 block font-display text-7xl leading-none text-gold/40">&ldquo;</span>
              <p className="font-display text-3xl font-light leading-snug text-ivory text-balance md:text-4xl">
                {active.quote}
              </p>
              <footer className="mt-10">
                <p className="font-display text-xl text-gold">{active.name}</p>
                <p className="mt-1 font-body text-[0.62rem] uppercase tracking-eyebrow text-mist">
                  {active.role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === i ? 'w-10 bg-gold' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <StripeRule className="mt-20 opacity-60" />
      </div>
    </section>
  )
}
