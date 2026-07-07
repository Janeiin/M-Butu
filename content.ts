'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.classList.add('lenis-stopped')
    const t = setTimeout(() => {
      setDone(true)
      document.documentElement.classList.remove('lenis-stopped')
    }, reduced ? 300 : 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-noir"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-center"
            >
              <span className="font-display text-5xl text-ivory md:text-7xl">M&rsquo;Butu</span>
              <motion.span
                className="mt-2 block font-body text-[0.6rem] uppercase tracking-eyebrow text-gold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Collection
              </motion.span>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
