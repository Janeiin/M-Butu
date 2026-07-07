'use client'

import { motion } from 'framer-motion'
import { sustainability } from '@/lib/content'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative bg-noir py-section">
      <div className="container-editorial grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <p className="eyebrow mb-6">Responsibility</p>
          </Reveal>
          <MaskHeading
            as="h2"
            lines={['Rarity carries', 'a duty.']}
            className="font-display text-display-sm font-light text-ivory"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-prose font-body text-sm leading-relaxed text-mist">
              Working with protected species demands more, not less. Regulated, documented trade is
              what allows these materials to exist at all, and what underwrites the habitats and
              communities that protect them.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {sustainability.map((s, i) => (
            <motion.li
              key={s.title}
              className="group py-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <div className="flex items-baseline gap-6">
                <span className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-light text-ivory transition-colors group-hover:text-gold">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mist">{s.body}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
