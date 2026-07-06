'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { collections } from '@/lib/data';

const origins = ['All', 'Namibia', 'South Africa'];

export default function CollectionsClient() {
  const [origin, setOrigin] = useState('All');

  const filtered = useMemo(
    () =>
      origin === 'All'
        ? collections
        : collections.filter((c) => c.origin === origin),
    [origin],
  );

  return (
    <section className="section-pad py-20 md:py-28">
      <div className="flex flex-col justify-between gap-8 border-b border-line pb-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4 text-bronze">The Collection</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Every hide, hand selected.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {origins.map((o) => (
            <button
              key={o}
              onClick={() => setOrigin(o)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                origin === o
                  ? 'border-deep-brown bg-deep-brown text-warm-white'
                  : 'border-line text-muted hover:border-deep-brown hover:text-deep-brown'
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/collections/${c.slug}`} className="group block" data-cursor="view">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rich-black/0 transition-colors duration-700 group-hover:bg-rich-black/20" />
                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-warm-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-deep-brown" />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-light">{c.title}</h3>
                <span className="text-xs tracking-widest text-muted">{c.index}</span>
              </div>
              <p className="mt-1 text-sm italic text-muted">{c.species}</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{c.summary}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
