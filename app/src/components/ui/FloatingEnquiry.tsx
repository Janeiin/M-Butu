'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

/** Sticky trade-enquiry button that appears after the hero. */
export default function FloatingEnquiry() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700));

  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20, pointerEvents: show ? 'auto' : 'none' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-[850] sm:bottom-7 sm:right-7"
    >
      <Link
        href="/trade"
        className="flex items-center gap-2.5 rounded-full bg-charcoal px-5 py-3.5 text-[12px] uppercase tracking-wide2 text-warm-white shadow-[0_14px_40px_rgba(18,16,14,0.35)] transition-colors hover:bg-camel"
      >
        <MessageSquare className="h-4 w-4" />
        Trade Enquiry
      </Link>
    </motion.div>
  );
}
