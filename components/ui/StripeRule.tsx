'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

// The house signature: a hairline rule abstracted from a zebra's flank.
// Irregular vertical strokes that thin toward the edges.
export default function StripeRule({
  className = '',
  count = 64,
  tone = 'gold',
}: {
  className?: string
  count?: number
  tone?: 'gold' | 'ivory'
}) {
  const bars = useMemo(() => {
    const arr: { w: number; o: number }[] = []
    let s = 987654321
    const rand = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff
      return s / 0x7fffffff
    }
    for (let i = 0; i < count; i++) {
      // edges fade out: bell-ish weighting
      const edge = Math.sin((i / (count - 1)) * Math.PI)
      arr.push({ w: 0.4 + rand() * 2.2, o: 0.15 + edge * (0.5 + rand() * 0.5) })
    }
    return arr
  }, [count])

  const color = tone === 'gold' ? 'bg-gold' : 'bg-ivory'

  return (
    <motion.div
      className={`flex h-3 w-full items-center gap-[3px] ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      transition={{ staggerChildren: 0.006 }}
      aria-hidden="true"
    >
      {bars.map((b, i) => (
        <motion.span
          key={i}
          className={`${color} h-full origin-bottom`}
          style={{ width: b.w, opacity: b.o }}
          variants={{
            hidden: { scaleY: 0 },
            show: { scaleY: 1 },
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </motion.div>
  )
}
