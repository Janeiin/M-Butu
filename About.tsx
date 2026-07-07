'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Media from '@/components/visuals/Media'
import type { Product } from '@/lib/products'

export default function ProductCard({
  product,
  index,
  onOpen,
}: {
  product: Product
  index: number
  onOpen: (p: Product) => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 140, damping: 18 })
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 140, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(product)}
      className="group relative block w-full text-left [transform-style:preserve-3d]"
      style={{ rotateX: rx, rotateY: ry, perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.06]">
          <Media
            src={product.image}
            alt={product.name}
            pattern={product.pattern}
            tone={product.tone}
            seed={product.id}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />

        {/* Animated gold border, draws in on hover */}
        <span className="pointer-events-none absolute inset-3 border border-gold/0 transition-all duration-700 ease-luxe group-hover:inset-4 group-hover:border-gold/60" />

        {/* Rarity chip */}
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-noir/30 px-3 py-1 font-body text-[0.6rem] uppercase tracking-wide text-ivory-dim backdrop-blur-sm">
          {product.rarity}
        </span>

        <span className="absolute right-5 top-5 font-display text-3xl text-ivory/40">{product.index}</span>

        {/* Foot */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-3xl font-light text-ivory md:text-4xl">{product.name}</h3>
          <p className="mt-1 font-body text-xs italic tracking-wide text-mist">{product.latin}</p>
          <div className="mt-4 flex items-center gap-3 overflow-hidden">
            <span className="h-px w-8 bg-gold transition-all duration-700 ease-luxe group-hover:w-14" />
            <span className="translate-y-4 font-body text-[0.68rem] uppercase tracking-wide text-gold opacity-0 transition-all duration-700 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
              View piece
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}
