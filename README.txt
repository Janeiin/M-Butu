'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine) return

    document.body.setAttribute('data-cursor', 'on')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      }
    }

    const loop = () => {
      rx += (mx - rx) * (reduced ? 1 : 0.16)
      ry += (my - ry) * (reduced ? 1 : 0.16)
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    const setHover = (on: boolean) => {
      ring.current?.classList.toggle('cursor-hover', on)
    }
    const over = (e: Event) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [data-cursor-hover]')) setHover(true)
    }
    const out = (e: Event) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [data-cursor-hover]')) setHover(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)

    return () => {
      document.body.removeAttribute('data-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[2px] -mt-[2px] hidden h-1 w-1 rounded-full bg-gold md:block"
        aria-hidden="true"
      />
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] -ml-4 -mt-4 hidden h-8 w-8 rounded-full border border-gold/60 transition-[width,height,opacity,border-color] duration-500 ease-luxe md:block"
        aria-hidden="true"
      />
      <style jsx global>{`
        .cursor-ring.cursor-hover {
          width: 3.75rem;
          height: 3.75rem;
          margin-left: -1.875rem;
          margin-top: -1.875rem;
          border-color: rgba(198, 164, 106, 0.9);
          background: rgba(198, 164, 106, 0.06);
        }
      `}</style>
    </>
  )
}
