'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Single-instance Lenis smooth scroll, synchronised with GSAP ScrollTrigger.
 * Client only. Respects prefers-reduced-motion. Prevents duplicate instances
 * across re-renders and React strict-mode double effects.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Never smooth-scroll for users who prefer reduced motion.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    // Guard against a second instance (re-render / strict-mode remount).
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger in step with Lenis' scroll position.
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
