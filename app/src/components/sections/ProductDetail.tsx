'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import type { Collection } from '@/lib/types';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ProductDetail({
  collection,
  related,
}: {
  collection: Collection;
  related: Collection[];
}) {
  const gallery = [collection.image, ...related.slice(0, 3).map((r) => r.image)];
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);

  const specs = [
    { label: 'Species', value: collection.species },
    { label: 'Country of origin', value: collection.origin },
    { label: 'Grades', value: collection.grades.join(', ') },
    { label: 'Export', value: 'CITES certified, worldwide' },
    { label: 'Lead time', value: '2 to 4 weeks' },
  ];

  return (
    <section className="section-pad py-24 md:py-32">
      <Link
        href="/collections"
        className="mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-deep-brown"
      >
        <ArrowLeft className="h-4 w-4" /> All collections
      </Link>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={gallery[active]}
                alt={collection.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square overflow-hidden bg-sand transition-opacity ${
                  active === i ? 'ring-1 ring-deep-brown' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Sticky detail sidebar */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-4 text-bronze">Collection {collection.index}</p>
          <h1 className="font-display text-5xl font-light leading-none md:text-6xl">
            {collection.title}
          </h1>
          <p className="mt-4 text-lg italic text-muted">{collection.species}</p>
          <p className="mt-8 text-base leading-relaxed text-charcoal/80">
            {collection.description}
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 py-4">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="text-right text-sm text-deep-brown">{s.value}</dd>
              </div>
            ))}
          </dl>

          {sent ? (
            <div className="mt-10 flex items-center gap-3 rounded-sm bg-deep-brown/5 px-6 py-5 text-deep-brown">
              <Check className="h-5 w-5" />
              <p className="text-sm">
                Enquiry received. Our trade team will respond within one business day.
              </p>
            </div>
          ) : (
            <div className="mt-10 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-deep-brown"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-deep-brown"
                />
              </div>
              <textarea
                rows={3}
                placeholder={`Enquiry about ${collection.title}, quantities and grades`}
                className="w-full resize-none border border-line bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-deep-brown"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSent(true)}
                  className="btn btn-dark"
                >
                  Request a quote
                </button>
                <button
                  onClick={() => setSent(true)}
                  className="btn btn-outline"
                >
                  Request samples
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-28">
          <div className="mb-8 flex items-baseline justify-between border-b border-line pb-6">
            <h2 className="font-display text-3xl font-light">Matching materials</h2>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-deep-brown"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            {related.slice(0, 3).map((r) => (
              <Link key={r.slug} href={`/collections/${r.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl font-light">{r.title}</h3>
                <p className="mt-1 text-sm italic text-muted">{r.species}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-28 flex flex-col items-center gap-6 border-t border-line pt-16 text-center">
        <h2 className="max-w-2xl font-display text-4xl font-light md:text-5xl">
          Bespoke selection for a project?
        </h2>
        <p className="max-w-md text-charcoal/70">
          Our trade team can hand select and reserve hides to your specification.
        </p>
        <MagneticButton href="/trade" variant="dark">
          Become a trade partner
        </MagneticButton>
      </div>
    </section>
  );
}
