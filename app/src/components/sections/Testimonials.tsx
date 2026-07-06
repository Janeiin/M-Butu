'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const active = testimonials[i];

  return (
    <section className="section-pad bg-warm-white">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal><p className="eyebrow mb-9">In Their Words</p></Reveal>

        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-[clamp(28px,4.2vw,60px)] font-light italic leading-[1.18] text-charcoal">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-11 flex items-center justify-center gap-4">
                <div className="relative h-13 w-13 overflow-hidden rounded-full bg-sand" style={{ height: 52, width: 52 }}>
                  <Image src={active.avatar} alt={active.name} fill sizes="52px" className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg text-charcoal">{active.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wide2 text-muted">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, j) => (
            <button
              key={j}
              aria-label={`Show testimonial ${j + 1}`}
              onClick={() => setI(j)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-400',
                j === i ? 'w-5 bg-camel' : 'w-1.5 bg-[var(--line)]'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
