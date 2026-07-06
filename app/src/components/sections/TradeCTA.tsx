'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { tradeImage } from '@/lib/data';

export default function TradeCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section ref={ref} id="trade" className="relative flex min-h-[80svh] items-center overflow-hidden bg-rich-black">
      <motion.div style={{ y }} className="absolute inset-[-8%_0]">
        <Image src={tradeImage} alt="Luxury lounge with zebra hide rug" fill sizes="100vw" className="object-cover brightness-[0.42] saturate-[0.9]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black/80 via-rich-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-content px-5 py-24 sm:px-8 xl:px-14">
        <div className="max-w-[640px]">
          <Reveal><p className="eyebrow text-camel">Trade Program</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="my-5 font-display text-[clamp(38px,6vw,90px)] font-light leading-none text-warm-white">
              Partner with <em className="italic text-sand">M&rsquo;Butu Collection.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-9 max-w-[44ch] text-[clamp(15px,1.2vw,18px)] font-light leading-[1.8] text-warm-white/72">
              Trade pricing, priority access to rare hides, worldwide shipping and bespoke sourcing
              for designers, architects and hospitality groups.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="/trade" variant="solid">Apply for Trade Access</MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
