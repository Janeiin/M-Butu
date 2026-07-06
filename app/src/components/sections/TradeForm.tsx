'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const fields = [
  { name: 'company', label: 'Company or studio', type: 'text', half: true },
  { name: 'contact', label: 'Contact name', type: 'text', half: true },
  { name: 'email', label: 'Email', type: 'email', half: true },
  { name: 'country', label: 'Country', type: 'text', half: true },
  { name: 'website', label: 'Website', type: 'text', half: false },
];

const sectors = ['Interior design', 'Retail', 'Architecture', 'Hospitality', 'Other'];

export default function TradeForm() {
  const [sector, setSector] = useState('Interior design');
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-5 py-16 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-deep-brown text-warm-white">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-display text-3xl font-light">Application received.</h3>
            <p className="max-w-sm text-charcoal/70">
              Thank you. Our trade team reviews every application personally and will
              be in touch within two business days.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    className="w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
                  />
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-muted">Sector</p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSector(s)}
                    className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                      sector === s
                        ? 'border-deep-brown bg-deep-brown text-warm-white'
                        : 'border-line text-muted hover:border-deep-brown hover:text-deep-brown'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
                Tell us about your projects
              </label>
              <textarea
                rows={4}
                className="w-full resize-none border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
              />
            </div>

            <button onClick={() => setSent(true)} className="btn btn-dark">
              Apply for trade access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
