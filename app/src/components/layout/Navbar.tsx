'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));

  return (
    <>
      <motion.nav
        className={cn(
          'fixed left-0 top-0 z-[900] flex w-full items-center justify-between px-5 transition-all duration-500 ease-luxe sm:px-8 xl:px-14',
          scrolled
            ? 'border-b border-[var(--line)] bg-ivory/80 py-4 backdrop-blur-lg'
            : 'py-6'
        )}
      >
        <Link
          href="/"
          className={cn(
            'font-display text-2xl tracking-[0.04em] transition-colors duration-500',
            scrolled ? 'text-charcoal' : 'text-warm-white'
          )}
        >
          M&rsquo;Butu
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'group relative text-[12px] uppercase tracking-wide2 transition-colors duration-400',
                scrolled ? 'text-deep-brown' : 'text-warm-white/85'
              )}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-camel transition-all duration-400 ease-luxe group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/trade"
            className={cn(
              'rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-wide2 transition-all duration-400 ease-luxe hover:border-camel hover:bg-camel hover:text-warm-white',
              scrolled ? 'border-charcoal text-charcoal' : 'border-warm-white/40 text-warm-white'
            )}
          >
            Become a Partner
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={cn('lg:hidden', scrolled ? 'text-charcoal' : 'text-warm-white')}
        >
          <Menu className="h-6 w-6" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[950] flex flex-col bg-rich-black px-8 py-8 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-warm-white">M&rsquo;Butu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-warm-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-auto flex flex-col gap-2 pb-16">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-4xl font-light text-warm-white"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/trade"
                onClick={() => setOpen(false)}
                className="btn btn-ghost mt-8 w-fit"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
