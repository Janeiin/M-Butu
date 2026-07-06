'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-sm bg-deep-brown/5 px-6 py-5 text-deep-brown"
        >
          <Check className="h-5 w-5" />
          <p className="text-sm">Thank you. We will be in touch shortly.</p>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0 }} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
            />
          </div>
          <input
            type="text"
            placeholder="Company or studio"
            className="w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
          />
          <textarea
            rows={4}
            placeholder="How can we help?"
            className="w-full resize-none border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-deep-brown"
          />
          <button onClick={() => setSent(true)} className="btn btn-dark">
            Send enquiry
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
