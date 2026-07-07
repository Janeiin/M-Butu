'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/lib/site'
import { scrollToId } from '@/lib/lenis'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('lenis-stopped', open)
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    // let the overlay begin closing before we jump
    setTimeout(() => scrollToId(href), 60)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-luxe ${
          scrolled
            ? 'border-b border-white/5 bg-noir/70 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-editorial flex h-[4.5rem] items-center justify-between md:h-20">
          <button
            onClick={() => go('#top')}
            className="group flex flex-col items-start leading-none"
            aria-label="M'Butu Collection, back to top"
          >
            <span className="font-display text-lg tracking-tight text-ivory md:text-xl">
              M&rsquo;Butu
            </span>
            <span className="mt-[3px] font-body text-[0.55rem] uppercase tracking-eyebrow text-gold">
              Collection
            </span>
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {site.nav.slice(0, -1).map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="link-underline font-body text-[0.78rem] uppercase tracking-wide text-ivory-dim transition-colors hover:text-ivory"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <button
              onClick={() => go('#contact')}
              className="hidden rounded-full border border-gold/50 px-6 py-2.5 font-body text-[0.72rem] uppercase tracking-wide text-gold transition-colors duration-500 hover:bg-gold hover:text-noir md:inline-block"
            >
              Enquire
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-full bg-ivory transition-all duration-500 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-full bg-ivory transition-all duration-500 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-ivory transition-all duration-500 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-noir px-gutter lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {site.nav.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="py-2 text-left font-display text-4xl text-ivory sm:text-5xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
