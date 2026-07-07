'use client'

import { motion } from 'framer-motion'
import { inspiration } from '@/lib/content'
import Media from '@/components/visuals/Media'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

const tones = [
  { base: '#1a130c', mark: '#f0e8d9' },
  { base: '#2a1d12', mark: '#c99a63' },
  { base: '#241a11', mark: '#b79068' },
  { base: '#211913', mark: '#e7ddca' },
  { base: '#241a10', mark: '#c6a46a' },
  { base: '#2b1c10', mark: '#a9744a' },
]

// asymmetric editorial layout: [tall, wide] rows
const spans = [
  'md:col-span-5 md:row-span-2',
  'md:col-span-7',
  'md:col-span-7',
  'md:col-span-5 md:row-span-2',
  'md:col-span-7',
  'md:col-span-5',
]

export default function Inspiration() {
  return (
    <section id="inspiration" className="relative bg-ink py-section">
      <div className="container-editorial mb-16">
        <Reveal>
          <p className="eyebrow mb-6">In Situ</p>
        </Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <MaskHeading
            as="h2"
            lines={['Placed with', 'intention.']}
            className="font-display text-display-sm font-light text-ivory"
          />
          <Reveal delay={0.1}>
            <p className="max-w-prose font-body text-sm leading-relaxed text-mist">
              Villas, lodges, penthouses and boutique hotels. A single hide, placed with restraint,
              becomes the quiet centre of a room.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="px-gutter">
        <div className="grid auto-rows-[38vh] grid-cols-1 gap-4 md:grid-cols-12">
          {inspiration.map((item, i) => (
            <motion.figure
              key={i}
              className={`group relative overflow-hidden ${spans[i % spans.length]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
            >
              <div className="absolute inset-0 transition-transform duration-[1.4s] ease-luxe group-hover:scale-105">
                <Media
                  src={item.image}
                  alt={item.caption}
                  pattern={item.pattern}
                  tone={tones[i % tones.length]}
                  seed={`insp-${i}`}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="translate-y-2 font-display text-2xl font-light text-ivory opacity-90 transition-all duration-700 ease-luxe group-hover:translate-y-0">
                  {item.caption}
                </p>
                <p className="mt-1 font-body text-[0.62rem] uppercase tracking-eyebrow text-gold opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  {item.place}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
