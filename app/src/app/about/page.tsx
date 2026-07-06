import type { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/layout/PageBanner';
import Reveal from '@/components/ui/Reveal';
import StripeRule from '@/components/ui/StripeRule';
import MagneticButton from '@/components/ui/MagneticButton';
import { timeline, heritageImage, sustainImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Heritage',
  description:
    'Three generations of sourcing. The story of M\u2019Butu Collection, our craft, and the regions we source from responsibly.',
};

const regions = [
  { name: 'Namibia', note: 'Hartmann mountain zebra', top: '46%', left: '30%' },
  { name: 'Botswana', note: 'Plains zebra', top: '52%', left: '46%' },
  { name: 'South Africa', note: 'Springbok, Nguni', top: '74%', left: '44%' },
  { name: 'Zimbabwe', note: 'Antelope', top: '50%', left: '58%' },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Heritage"
        title={['Three generations', 'of sourcing.']}
        intro="What began as a single family trade has become a trusted name among designers and hospitality groups worldwide."
        image={heritageImage}
      />

      {/* Founder story */}
      <section className="section-pad py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={sustainImage}
                alt="African landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-6 text-bronze">The Founder</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              A respect for the land, carried through the work.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/80">
              <p>
                M&apos;Butu Collection was built on a simple belief: that the natural
                beauty of Africa deserves to be handled with care, sourced with
                integrity, and presented without compromise.
              </p>
              <p>
                Every hide we offer passes through hands that have spent a lifetime
                learning to read the land. We work only with partners who share our
                standards for legality, traceability and craft.
              </p>
              <p>
                Today we supply interior designers, architects and hospitality
                groups across four continents, while keeping the relationships that
                started it all close to home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-pad">
        <StripeRule />
      </div>

      {/* Timeline */}
      <section className="section-pad py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4 text-bronze">Our Journey</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">
            Milestones in the making.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.08}>
              <div className="h-full bg-warm-white p-8">
                <p className="font-display text-4xl font-light text-bronze">
                  {entry.year}
                </p>
                <h3 className="mt-4 text-lg font-medium text-deep-brown">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sourcing map */}
      <section className="bg-charcoal py-24 text-warm-white md:py-32">
        <div className="section-pad">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4 text-sand">Where We Source</p>
            <h2 className="font-display text-4xl font-light md:text-5xl">
              Rooted in Southern Africa.
            </h2>
            <p className="mt-6 text-warm-white/70">
              We source across a small number of trusted regions, each with its own
              signature material and its own certification pathway.
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/3] max-w-3xl">
            {/* stylised continent silhouette */}
            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 h-full w-full opacity-25"
              aria-hidden
            >
              <path
                d="M170 30 L230 40 L250 80 L245 120 L270 150 L255 200 L215 260 L180 250 L150 200 L130 150 L120 100 L140 60 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-sand"
              />
            </svg>
            {regions.map((r, i) => (
              <div
                key={r.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: r.top, left: r.left }}
              >
                <span className="relative flex h-3 w-3">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-camel opacity-60"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-camel" />
                </span>
                <div className="mt-2 whitespace-nowrap">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-warm-white/60">{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <h2 className="max-w-2xl font-display text-4xl font-light md:text-5xl">
          Work with a house that knows its craft.
        </h2>
        <MagneticButton href="/trade" variant="dark">
          Become a trade partner
        </MagneticButton>
      </section>
    </>
  );
}
