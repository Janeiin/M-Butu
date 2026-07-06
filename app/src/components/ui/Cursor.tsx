'use client';

import { useEffect, useRef } from 'react';

/**
 * Desktop custom cursor: a small dot that tracks 1:1 and a lagging ring
 * that grows over interactive elements. Hidden on touch / coarse pointers.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-cursor="view"], input, .card')) {
        ring.current?.classList.add('is-hover');
      }
    };
    const out = () => ring.current?.classList.remove('is-hover');

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] hidden h-[38px] w-[38px] rounded-full border border-deep-brown/50 transition-[width,height,background,border-color] duration-300 ease-luxe md:block"
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-charcoal md:block"
      />
    </>
  );
}
