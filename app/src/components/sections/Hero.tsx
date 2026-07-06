'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import { heroImage } from '@/lib/data';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%']);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.15]);

  const line = { hidden: { y: '105%' }, show: { y: 0 } };

  return (
    <header ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-rich-black">
      <motion.div style={{ y: yImg }} className="absolute inset-[-8%_-4%]">
        <Image
          src={heroImage}
          alt="Zebra herd on the African savannah at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.72] saturate-[0.92] contrast-[1.04]"
        />
      </motion.div>

      {/* ambient lighting + vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_68%_30%,rgba(212,178,120,0.22),transparent_60%)] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_40%,rgba(6,5,4,0.75)_100%)]" />

      <motion.div
        style={{ y: yContent, opacity }}
        className="absolute bottom-[clamp(60px,9vh,120px)] left-0 w-full px-5 sm:px-8 xl:px-14"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-camel"
        >
          Genuine African Hides · Est. Windhoek
        </motion.p>

        <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(48px,10.5vw,168px)] font-light leading-[0.92] text-warm-white">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              variants={line}
              initial="hidden"
              animate="show"
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Nature&rsquo;s Finest
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-sand"
              variants={line}
              initial="hidden"
              animate="show"
              transition={{ duration: 1.1, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              Luxury.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[40ch] text-[clamp(14px,1.5vw,18px)] font-light leading-relaxed text-warm-white/70"
        >
          Premium African hides sourced responsibly for the world&rsquo;s finest interiors,
          hotels and designers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="/collections" variant="solid">View Collection</MagneticButton>
          <MagneticButton href="/trade" variant="ghost">Become a Trade Partner</MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-warm-white/55">Scroll</span>
        <div className="relative h-11 w-px overflow-hidden bg-gradient-to-b from-camel to-transparent">
          <motion.span
            className="absolute left-0 top-0 h-11 w-px bg-warm-white"
            animate={{ y: reduce ? 0 : ['-44px', '44px'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </header>
  );
}
