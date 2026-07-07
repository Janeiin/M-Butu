'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Media from '@/components/visuals/Media'
import { scrollToId } from '@/lib/lenis'
import { site } from '@/lib/site'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const section = useRef<HTMLElement>(null)
  const bg = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !section.current || !bg.current) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg.current,
        { scale: 1.05 },
        {
          scale: 1.28,
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
      gsap.to('.hero-fade', {
        opacity: 0,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className="relative h-[100svh] w-full overflow-hidden">
      {/* Cinematic backdrop. Swap in a real photo via src="/images/hero-zebra.jpg" */}
      <div ref={bg} className="absolute inset-0 will-change-transform">
        <Media
          src={site.media.hero}
          alt="Hartmann's zebra hide"
          pattern="zebra-bold"
          tone={{ base: '#1a130c', mark: '#f0e8d9' }}
          seed="hero"
          priority
          className="h-full w-full"
        />
      </div>

      {/* Gradient scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-transparent to-transparent" />
      <div className="grain absolute inset-0" />

      <div className="hero-fade container-editorial relative z-10 flex h-full flex-col justify-end pb-[14vh]">
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.9, ease: EASE }}
        >
          Rare African Luxury Hides
        </motion.p>

        <h1 className="font-display font-light text-ivory">
          <span className="mask-line">
            <motion.span
              className="block text-display-lg"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 2, duration: 1.2, ease: EASE }}
            >
              M&rsquo;Butu
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span
              className="block text-display-lg italic text-gold"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 2.12, duration: 1.2, ease: EASE }}
            >
              Collection
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-prose font-display text-2xl font-light leading-snug text-ivory-dim md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1, ease: EASE }}
        >
          Naturally bold. Ethically sourced. Exceptionally rare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1, ease: EASE }}
          className="mt-12"
        >
          <button
            onClick={() => scrollToId('#collection')}
            className="group inline-flex items-center gap-4 rounded-full bg-gold px-9 py-4 font-body text-[0.78rem] uppercase tracking-wide text-noir transition-transform duration-500 ease-luxe hover:scale-[1.03]"
          >
            Explore Collection
            <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[0.6rem] uppercase tracking-eyebrow text-mist">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
