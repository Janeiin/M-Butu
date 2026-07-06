'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { sustainImage } from '@/lib/data';

const stats = [
  { value: 40, prefix: '', suffix: '+', label: 'Countries served' },
  { value: 100, prefix: '', suffix: '%', label: 'CITES-certified export' },
  { value: 62, prefix: "'", suffix: '', label: 'Sourcing since' },
  { value: 12, prefix: '', suffix: '', label: 'Community partners' },
];

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(value); return; }
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="font-display text-[clamp(48px,6vw,80px)] font-light leading-none text-warm-white">
      {prefix}{n}{suffix}
    </span>
  );
}

export default function Sustainability() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-10%', '10%']);

  return (
    <section ref={ref} id="sustainability" className="section-pad relative overflow-hidden bg-deep-brown text-warm-white">
      <motion.div style={{ y }} className="absolute inset-[-10%_0] opacity-[0.28]">
        <Image src={sustainImage} alt="Open savannah landscape" fill sizes="100vw" className="object-cover brightness-50 saturate-[0.7]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-content">
        <Reveal><p className="eyebrow text-camel">Sustainability</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="my-4 max-w-[16ch] font-display text-[clamp(32px,4.8vw,68px)] font-light">
            Luxury that <em className="italic text-sand">gives back</em> to the land it comes from.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] font-light leading-[1.85] text-warm-white/72">
            Every hide is legally exported under CITES certification and sourced through partnerships
            that fund conservation and support local communities. We believe authenticity and
            responsibility are the same commitment.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-warm-white/15 pt-11 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              <p className="mt-3.5 text-xs uppercase tracking-wide2 text-warm-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
