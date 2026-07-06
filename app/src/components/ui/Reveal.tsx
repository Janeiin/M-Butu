'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade + rise on scroll into view. Honors reduced-motion. */
export default function Reveal({ children, delay = 0, y = 38, className, once = true }: Props) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </motion.div>
  );
}
