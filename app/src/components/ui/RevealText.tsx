'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType } from 'react';

/** Masked line-by-line text reveal for headings. Pass lines as an array. */
export default function RevealText({
  lines,
  as: Tag = 'h2',
  className,
  delay = 0,
}: {
  lines: (string | React.ReactNode)[];
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: reduce ? 0 : '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 1, delay: delay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
