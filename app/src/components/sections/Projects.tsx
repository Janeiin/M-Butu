'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/lib/data';

/** Featured projects that scroll horizontally while the section is pinned. */
export default function Projects() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || window.innerWidth < 760) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = track.current;
    const w = wrap.current;
    if (!el || !w) return;

    const ctx = gsap.context(() => {
      const distance = () => el.scrollWidth - window.innerWidth + 56;
      gsap.to(el, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: w,
          start: 'top top',
          end: () => '+=' + distance(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, w);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="overflow-hidden bg-rich-black text-warm-white">
      <div className="px-5 pb-10 pt-20 sm:px-8 md:pt-28 xl:px-14">
        <Reveal><p className="eyebrow text-camel">Featured Projects</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(34px,5vw,72px)] font-light">
            Where our material <em className="italic text-camel">lives.</em>
          </h2>
        </Reveal>
      </div>

      <div ref={wrap} className="relative md:h-[100svh]">
        <div className="flex md:h-[100svh] md:items-center">
          <div
            ref={track}
            className="flex flex-col gap-9 px-5 pb-16 md:flex-row md:px-8 md:pb-0 xl:px-14"
          >
            {projects.map((p) => (
              <article key={p.slug} className="w-full flex-none md:w-[min(74vw,560px)]">
                <Link href="/#projects" className="group block" data-cursor="view">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-charcoal to-deep-brown">
                    <div className="relative h-full w-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 560px"
                        className="object-cover brightness-[0.82] saturate-[0.92] transition-transform duration-[1000ms] ease-luxe group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-5">
                    <h3 className="font-display text-[clamp(24px,2.4vw,32px)]">{p.title}</h3>
                    <span className="text-xs uppercase tracking-wide2 text-camel">{p.location}</span>
                  </div>
                  <p className="mt-2 max-w-[44ch] text-sm font-light leading-relaxed text-warm-white/55">
                    {p.description}
                  </p>
                </Link>
              </article>
            ))}
            <div className="hidden items-center pr-14 md:flex">
              <Link href="/#projects" className="btn btn-ghost">View all projects →</Link>
            </div>
          </div>
        </div>
        <span className="pointer-events-none absolute right-5 top-8 hidden text-[10px] uppercase tracking-[0.28em] text-warm-white/40 md:right-14 md:block">
          Scroll →
        </span>
      </div>
    </section>
  );
}
