'use client';

import { Leaf, Globe, Sparkles, Gem, Compass, Building2, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { whyReasons } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Leaf, Globe, Sparkles, Gem, Compass, Building2,
};

export default function WhyDesigners() {
  return (
    <section className="section-pad bg-charcoal text-warm-white">
      <div className="mx-auto max-w-content">
        <Reveal><p className="eyebrow text-camel">Why Designers Choose M&rsquo;Butu</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 mt-4 max-w-[18ch] font-display text-[clamp(32px,4.6vw,64px)] font-light">
            A standard of <em className="italic text-sand">material</em> the world&rsquo;s best interiors return to.
          </h2>
        </Reveal>

        <div className="grid gap-px border border-warm-white/10 bg-warm-white/10 md:grid-cols-3">
          {whyReasons.map((r, i) => {
            const Icon = iconMap[r.icon] ?? Sparkles;
            return (
              <Reveal key={r.title} delay={(i % 3) * 0.07}>
                <div className="h-full bg-charcoal p-9 transition-colors duration-500 ease-luxe hover:bg-[#2c221a] sm:p-10">
                  <Icon className="mb-6 h-11 w-11 text-camel" strokeWidth={1} />
                  <h4 className="mb-3 font-display text-2xl">{r.title}</h4>
                  <p className="text-sm font-light leading-relaxed text-warm-white/60">{r.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
