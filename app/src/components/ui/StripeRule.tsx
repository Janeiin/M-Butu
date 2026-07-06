'use client';

import { useEffect, useRef, useState } from 'react';

/** The zebra-hairline signature divider that draws in on scroll. */
export default function StripeRule() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className="stripe-rule" data-in={inView} aria-hidden />;
}
