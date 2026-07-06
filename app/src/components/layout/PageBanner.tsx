'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import RevealText from '@/components/ui/RevealText';

type Props = {
  eyebrow: string;
  title: string[];
  intro?: string;
  image: string;
};

export default function PageBanner({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-rich-black/30 to-rich-black/40" />
      </div>

      <div className="section-pad relative z-10 w-full pb-16 text-warm-white">
        <motion.p
          className="eyebrow mb-6 text-sand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow}
        </motion.p>
        <RevealText
          as="h1"
          lines={title}
          className="max-w-4xl font-display text-5xl font-light leading-[1.02] md:text-7xl lg:text-8xl"
        />
        {intro && (
          <motion.p
            className="mt-8 max-w-xl text-lg font-light leading-relaxed text-warm-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
