'use client'

import { useEffect, useRef } from 'react'

// Ambient, barely-there sand drift. Cheap, capped particle count, reduced-motion aware.
export default function SandCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    const COUNT = Math.min(70, Math.floor(w / 20))
    const grains = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.2,
      vx: -0.12 - Math.random() * 0.35,
      vy: (Math.random() - 0.5) * 0.12,
      a: Math.random() * 0.35 + 0.05,
    }))

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const g of grains) {
        g.x += g.vx
        g.y += g.vy
        if (g.x < -5) {
          g.x = w + 5
          g.y = Math.random() * h
        }
        if (g.y < -5) g.y = h + 5
        if (g.y > h + 5) g.y = -5
        ctx.beginPath()
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(198,164,106,${g.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-60"
      aria-hidden="true"
    />
  )
}
