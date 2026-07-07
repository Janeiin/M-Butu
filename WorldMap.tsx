'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12%' }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

// Line-masked serif heading: each line clips its own overflow and slides up.
export function MaskHeading({
  lines,
  className = '',
  as: Tag = 'h2',
  delay = 0,
}: {
  lines: string[]
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  delay?: number
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
