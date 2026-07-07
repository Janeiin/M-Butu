'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products, type Product } from '@/lib/products'
import ProductCard from '@/components/sections/ProductCard'
import Media from '@/components/visuals/Media'
import { Reveal, MaskHeading } from '@/components/ui/Reveal'

const EASE = [0.16, 1, 0.3, 1] as const

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 py-4">
      <p className="mb-1 font-body text-[0.62rem] uppercase tracking-eyebrow text-gold">{label}</p>
      <p className="font-display text-xl font-light leading-snug text-ivory">{value}</p>
    </div>
  )
}

export default function Collection() {
  const [active, setActive] = useState<Product | null>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('lenis-stopped', !!active)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="collection" className="relative bg-noir py-section">
      <div className="container-editorial">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">The Collection</p>
            </Reveal>
            <MaskHeading
              as="h2"
              lines={['Eight pieces.', 'None repeatable.']}
              className="font-display text-display-sm font-light text-ivory"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-prose font-body text-sm leading-relaxed text-mist">
              Each hide is selected for character, scale and integrity, then documented and finished
              for a life measured in decades. Select any piece to view its provenance.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-10">
          {products.map((p, i) => (
            <div key={p.id} className={i % 2 === 1 ? 'sm:mt-16' : ''}>
              <ProductCard product={p} index={i} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-stretch bg-noir/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative m-auto grid h-full max-h-[92vh] w-full max-w-editorial grid-cols-1 overflow-hidden bg-ink md:grid-cols-2"
              initial={{ scale: 0.96, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 24 }}
              transition={{ duration: 0.6, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-[38vh] overflow-hidden md:min-h-full">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: EASE }}
                >
                  <Media src={active.image} alt={active.name} pattern={active.pattern} tone={active.tone} seed={active.id} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent md:bg-gradient-to-r" />
                <span className="absolute left-6 top-6 font-display text-5xl text-ivory/40">{active.index}</span>
              </div>

              <div className="flex flex-col overflow-y-auto p-8 md:p-14">
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold hover:text-gold"
                  aria-label="Close"
                >
                  &times;
                </button>

                <p className="eyebrow mb-4">{active.rarity}</p>
                <h3 className="font-display text-5xl font-light text-ivory md:text-6xl">{active.name}</h3>
                <p className="mt-2 font-body text-sm italic tracking-wide text-mist">{active.latin}</p>

                <p className="mt-8 font-display text-2xl font-light leading-snug text-ivory-dim text-balance">
                  {active.lede}
                </p>

                <div className="mt-10">
                  <DetailRow label="Origin" value={active.origin} />
                  <DetailRow label="Texture" value={active.texture} />
                  <DetailRow label="Recommended interior" value={active.interior} />
                </div>

                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gold px-8 py-3.5 font-body text-[0.74rem] uppercase tracking-wide text-noir transition-transform duration-500 hover:scale-[1.03]"
                >
                  Request availability &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
