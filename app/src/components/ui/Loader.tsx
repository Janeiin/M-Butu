'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Animated intro overlay with a stripe-wipe exit. Shows once per load. */
export default function Loader() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 200 : 2200);
    return () => clearTimeout(t);
  }, [reduce]);

  const stripes = Array.from({ length: 12 });

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-rich-black"
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.5 } }}
        >
          <div className="absolute inset-0 flex">
            {stripes.map((_, i) => (
              <motion.span
                key={i}
                className="flex-1 bg-rich-black"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 1.5 + Math.abs(i - stripes.length / 2) * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{ transformOrigin: 'top' }}
              />
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="overflow-hidden">
              <motion.p
                className="font-display text-4xl font-light text-warm-white sm:text-6xl md:text-7xl"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                M&rsquo;Butu Collection
              </motion.p>
            </div>
            <motion.p
              className="mt-5 text-[10px] uppercase tracking-[0.42em] text-camel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Nature&rsquo;s Finest Luxury
            </motion.p>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-bronze to-camel"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
