'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/content'
import Icon from '@/components/ui/Icon'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="relative bg-noir py-section">
      <div className="container-editorial">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Working With Us</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={['Commercial', 'partnerships.']}
              className="font-display text-display-sm font-light text-ivory"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-prose font-body text-sm leading-relaxed text-mist">
              For designers, architects, hoteliers and private collectors. Every relationship is
              handled with discretion and full documentation.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative bg-noir p-9 transition-colors duration-700 hover:bg-panel md:p-11"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
            >
              <div className="mb-8 text-gold transition-transform duration-700 ease-luxe group-hover:-translate-y-1">
                <Icon name={s.glyph} className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-light text-ivory md:text-3xl">{s.title}</h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-mist">{s.body}</p>
              <span className="mt-8 block h-px w-0 bg-gold transition-all duration-700 ease-luxe group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
