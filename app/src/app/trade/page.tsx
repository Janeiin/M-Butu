import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import Reveal from '@/components/ui/Reveal';
import StripeRule from '@/components/ui/StripeRule';
import TradeForm from '@/components/sections/TradeForm';
import { Globe, ShieldCheck, Layers, Truck } from 'lucide-react';
import { tradeImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Trade Program',
  description:
    'Become a M\u2019Butu Collection trade partner. Wholesale pricing, worldwide certified export, bespoke sourcing and dedicated support.',
};

const benefits = [
  {
    icon: Layers,
    title: 'Wholesale pricing',
    body: 'Transparent trade tiers that scale with volume, with no hidden costs.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & legal',
    body: 'Every export fully documented under CITES and destination requirements.',
  },
  {
    icon: Globe,
    title: 'Worldwide shipping',
    body: 'Consolidated freight to four continents with full tracking and insurance.',
  },
  {
    icon: Truck,
    title: 'Bespoke sourcing',
    body: 'Hand selection and reservation of hides to your exact specification.',
  },
];

const iconMap = { Layers, ShieldCheck, Globe, Truck };
void iconMap;

export default function TradePage() {
  return (
    <>
      <PageBanner
        eyebrow="Trade Program"
        title={['Partner with', "M'Butu."]}
        intro="A considered wholesale programme built for designers, retailers and hospitality groups who expect more from their materials."
        image={tradeImage}
      />

      {/* Benefits */}
      <section className="section-pad py-24 md:py-32">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line text-bronze">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-light">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                      {b.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* MOQ strip */}
      <section className="bg-charcoal py-16 text-warm-white">
        <div className="section-pad grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { k: 'MOQ', v: '10 hides' },
            { k: 'Lead time', v: '2 to 4 wks' },
            { k: 'Markets', v: '4 continents' },
            { k: 'Grading', v: 'A / B' },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-3xl font-light text-sand md:text-4xl">
                {s.v}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-warm-white/50">
                {s.k}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-pad">
        <StripeRule />
      </div>

      {/* Application */}
      <section className="section-pad py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4 text-bronze">Apply</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              Request trade access.
            </h2>
            <p className="mt-6 max-w-sm text-charcoal/70">
              Tell us a little about your studio or business. Approved partners
              receive full access to pricing, availability and sample requests.
            </p>
          </div>
          <TradeForm />
        </div>
      </section>
    </>
  );
}
