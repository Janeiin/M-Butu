'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Do you only sell to trade?',
    a: 'Our pricing and sample programme are reserved for trade partners: designers, retailers, architects and hospitality groups. Approved partners receive full access to availability and wholesale tiers.',
  },
  {
    q: 'Are your hides legally exported?',
    a: 'Yes. Every hide is sourced through licensed partners and exported with full documentation, including CITES certification where applicable and any destination specific requirements.',
  },
  {
    q: 'What is the minimum order?',
    a: 'The standard minimum order is ten hides, though this varies by material and destination. Bespoke and single piece requests can be discussed directly with our trade team.',
  },
  {
    q: 'Can I request samples?',
    a: 'Approved trade partners can request physical samples and grade references before committing to a larger order. Sample requests are available from any collection page.',
  },
  {
    q: 'Where do you ship?',
    a: 'We ship worldwide across four continents, with consolidated freight, full tracking and insurance. Lead times typically run two to four weeks from confirmation.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-xl font-light md:text-2xl">
                {f.q}
              </span>
              <Plus
                className={`h-5 w-5 flex-none text-bronze transition-transform duration-500 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-sm leading-relaxed text-charcoal/70">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
