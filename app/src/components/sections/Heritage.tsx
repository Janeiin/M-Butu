'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/ui/Reveal';
import { heritageImage, timeline } from '@/lib/data';

export default function Heritage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section id="heritage" className="section-pad bg-warm-white">
      <div className="mx-auto grid max-w-content items-center gap-8 md:grid-cols-[1.05fr_1fr] lg:gap-[90px]">
        <div ref={ref} className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-charcoal to-deep-brown">
          <motion.div style={{ y }} className="absolute inset-[-8%_0]">
            <Image
              src={heritageImage}
              alt="Artisan inspecting a hide by hand"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <span className="absolute bottom-5 left-5 rounded-full bg-rich-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-warm-white backdrop-blur-sm">
            Namibia · By hand
          </span>
        </div>

        <div>
          <Reveal><p className="eyebrow">Our Heritage</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="my-5 max-w-[16ch] font-display text-[clamp(34px,4.4vw,66px)] font-light leading-[1.02]">
              Three generations of <em className="italic text-bronze">sourcing</em>, a single standard.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[46ch] text-[clamp(15px,1.15vw,17px)] font-light leading-[1.8] text-muted">
              From the plains of Namibia to the ateliers of Europe, M&rsquo;Butu has spent decades
              cultivating relationships with the communities and craftspeople who make authentic
              African luxury possible. Every hide carries its own natural signature, no two alike,
              each selected by hand.
            </p>
          </Reveal>

          <div className="mt-11 border-t border-[var(--line)]">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={0.05 * i}>
                <div className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b border-[var(--line)] py-5 sm:grid-cols-[96px_1fr]">
                  <span className="font-display text-2xl text-camel">{t.year}</span>
                  <div>
                    <p className="font-display text-lg text-charcoal">{t.title}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-muted">{t.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
