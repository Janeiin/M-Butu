'use client'

import { motion } from 'framer-motion'
import Media from '@/components/visuals/Media'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/lib/site'

const facts = [
  { k: 'Origin', v: 'Namibia', d: 'Endemic to the arid mountains and highlands of the southwest.' },
  { k: 'Status', v: 'Protected species', d: 'Trade is tightly regulated and permitted at source.' },
  { k: 'Passage', v: 'Official CITES permits', d: 'Every border it crosses is documented and lawful.' },
  { k: 'Signature', v: 'Unrepeatable striping', d: 'A stripe pattern nature has never drawn twice.' },
]

export default function HartmannFeature() {
  return (
    <section id="hartmann" className="relative bg-noir">
      {/* Sticky cinematic backdrop */}
      <div className="relative min-h-[220vh]">
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Media
              src={site.media.hartmann}
              alt="Hartmann's zebra"
              pattern="zebra-bold"
              tone={{ base: '#150f09', mark: '#efe6d6' }}
              seed="hartmann-feature"
              className="h-full w-full"
            />
          </div>
          <div className="absolute inset-0 bg-noir/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/70" />
          <div className="grain absolute inset-0" />

          <div className="container-editorial relative flex h-full flex-col justify-center">
            <motion.p
              className="eyebrow mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              The Signature Piece
            </motion.p>
            <h2 className="font-display font-light text-ivory">
              <span className="mask-line">
                <motion.span
                  className="block text-display-lg"
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Hartmann&rsquo;s
                </motion.span>
              </span>
              <span className="mask-line">
                <motion.span
                  className="block text-display-lg italic text-gold"
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  Zebra
                </motion.span>
              </span>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-prose font-display text-2xl font-light leading-snug text-ivory-dim md:text-3xl">
                The rarest hide we hold. A mountain zebra whose markings are, quite literally, a
                natural artwork that will never be made again.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Facts scroll over the pinned backdrop */}
        <div className="relative z-10 -mt-[60vh] pb-section">
          <div className="container-editorial">
            <div className="ml-auto max-w-xl space-y-5">
              {facts.map((f, i) => (
                <Reveal key={f.k} delay={i * 0.05}>
                  <div className="border-l-2 border-gold/50 bg-noir/70 p-7 backdrop-blur-md">
                    <p className="font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">{f.k}</p>
                    <p className="mt-2 font-display text-3xl font-light text-ivory">{f.v}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-mist">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-editorial pb-section">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-3xl font-light leading-snug text-ivory text-balance md:text-5xl">
            Not a floor covering. An investment-quality piece of natural artwork, held for a lifetime
            and passed on.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
