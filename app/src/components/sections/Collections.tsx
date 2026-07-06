'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { collections } from '@/lib/data';
import { cn } from '@/lib/utils';

const ratio: Record<string, string> = {
  tall: 'aspect-[3/4.2]',
  mid: 'aspect-[4/3.6]',
  wide: 'aspect-[4/5]',
};

export default function Collections() {
  return (
    <section id="collections" className="section-pad bg-ivory">
      <div className="mx-auto max-w-content">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-[clamp(34px,5vw,74px)] font-light leading-[0.98]">
              The <em className="italic text-bronze">Collections</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-[34ch] text-sm font-light leading-relaxed text-muted">
              Six families of natural material, from rare Hartmann mountain zebra to hand-selected
              Nguni cowhide. Wholesale quantities, bespoke sourcing on request.
            </p>
          </Reveal>
        </div>

        <div className="[column-gap:18px] sm:columns-2 lg:columns-3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.06} className="mb-[18px] break-inside-avoid">
              <Link
                href={`/collections/${c.slug}`}
                data-cursor="view"
                className="card group relative block overflow-hidden bg-gradient-to-br from-charcoal to-deep-brown"
              >
                <div className={cn('overflow-hidden', ratio[c.size])}>
                  <Image
                    src={c.image}
                    alt={`${c.title} hide`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover brightness-[0.86] saturate-[0.9] transition-[transform,filter] duration-[1100ms] ease-luxe group-hover:scale-[1.08] group-hover:brightness-[0.92] group-hover:saturate-100"
                  />
                </div>
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-x-[-6px] translate-y-[6px] items-center justify-center rounded-full border border-warm-white/40 text-warm-white opacity-0 transition duration-500 ease-luxe group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-rich-black/70 via-transparent to-transparent p-6">
                  <span className="text-[11px] tracking-[0.2em] text-sand/80">{c.index} · Collection</span>
                  <h3 className="mt-1.5 font-display text-[clamp(24px,2.4vw,34px)] text-warm-white">{c.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
