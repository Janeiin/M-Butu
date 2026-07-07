'use client'

import { useMemo } from 'react'
import type { Product } from '@/lib/products'

type Pattern = Product['pattern']

// Deterministic PRNG so server and client render identical markup (no hydration drift)
function mulberry32(seed: number) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seedFrom(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

const W = 400
const H = 520

export default function HidePattern({
  pattern,
  tone,
  seed = pattern,
  className = '',
}: {
  pattern: Pattern
  tone: { base: string; mark: string }
  seed?: string
  className?: string
}) {
  const gradId = useMemo(() => `g-${seedFrom(seed + pattern).toString(36)}`, [seed, pattern])

  const shapes = useMemo(() => {
    const rand = mulberry32(seedFrom(seed + pattern))
    const els: React.ReactNode[] = []

    if (pattern === 'zebra-bold' || pattern === 'zebra-fine') {
      const count = pattern === 'zebra-bold' ? 13 : 20
      const centre = W / 2
      let x = -20
      for (let i = 0; i < count * 2 && x < W + 20; i++) {
        const base = W / count
        const w = base * (0.45 + rand() * 0.9)
        const lean = (x - centre) / centre // stripes fan from a spine
        const sway = 26 + rand() * 20
        const cx1 = x + lean * sway
        const cx2 = x + w * 0.5 + lean * sway * 0.4
        const cx3 = x + w + lean * sway
        els.push(
          <path
            key={`s${i}`}
            d={`M ${cx1} -10 C ${cx1 + sway * 0.3} ${H * 0.34}, ${cx2 - sway * 0.3} ${H * 0.66}, ${cx3} ${H + 10} L ${cx3 + w * 0.5} ${H + 10} C ${cx2 + sway * 0.3} ${H * 0.66}, ${cx1 + sway * 0.6} ${H * 0.34}, ${cx1 + w * 0.5} -10 Z`}
            fill={tone.mark}
            opacity={pattern === 'zebra-fine' ? 0.86 : 0.95}
          />,
        )
        x += w * (pattern === 'zebra-bold' ? 1.75 : 1.9)
      }
    } else if (pattern === 'ostrich') {
      // Iconic raised follicle field
      const cols = 11
      const rows = 15
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jx = (rand() - 0.5) * 12
          const jy = (rand() - 0.5) * 10
          const cx = (c + 0.5) * (W / cols) + jx
          const cy = (r + 0.5) * (H / rows) + jy
          const rad = 3.4 + rand() * 3.6
          els.push(
            <g key={`f${r}-${c}`}>
              <circle cx={cx} cy={cy} r={rad} fill={tone.mark} opacity={0.5} />
              <circle cx={cx - rad * 0.3} cy={cy - rad * 0.3} r={rad * 0.4} fill="#fff" opacity={0.14} />
            </g>,
          )
        }
      }
    } else if (pattern === 'blesbok') {
      // Mahogany body with a single pale vertical blaze
      els.push(
        <rect key="blaze" x={W * 0.44} y={-10} width={W * 0.12} height={H + 20} fill={tone.mark} opacity={0.9} rx={8} />,
      )
      for (let i = 0; i < 40; i++) {
        els.push(
          <rect
            key={`h${i}`}
            x={rand() * W}
            y={rand() * H}
            width={0.8}
            height={18 + rand() * 40}
            fill="#000"
            opacity={0.08}
          />,
        )
      }
    } else if (pattern === 'waterbuck') {
      // Coarse smoke coat: dense fine vertical hair strokes
      for (let i = 0; i < 260; i++) {
        const x = rand() * W
        const y = rand() * H
        els.push(
          <line
            key={`w${i}`}
            x1={x}
            y1={y}
            x2={x + (rand() - 0.5) * 4}
            y2={y + 20 + rand() * 34}
            stroke={rand() > 0.5 ? tone.mark : '#000'}
            strokeWidth={0.9}
            opacity={0.18 + rand() * 0.22}
          />,
        )
      }
    } else {
      // Soft spotted / graded pelage: fawn, oryx, impala
      const spots = pattern === 'oryx' ? 5 : 46
      if (pattern === 'oryx') {
        // graphic angular masking abstracted
        for (let i = 0; i < spots; i++) {
          const x = rand() * W
          const y = rand() * H
          const s = 60 + rand() * 120
          els.push(
            <path
              key={`o${i}`}
              d={`M ${x} ${y} l ${s} ${s * 0.2} l ${-s * 0.3} ${s * 0.7} Z`}
              fill="#000"
              opacity={0.12 + rand() * 0.1}
            />,
          )
        }
      } else {
        for (let i = 0; i < spots; i++) {
          const x = rand() * W
          const y = rand() * H
          const r = 6 + rand() * 22
          els.push(
            <ellipse
              key={`p${i}`}
              cx={x}
              cy={y}
              rx={r}
              ry={r * (0.7 + rand() * 0.5)}
              fill={rand() > 0.5 ? tone.mark : '#000'}
              opacity={0.06 + rand() * 0.12}
            />,
          )
        }
      }
    }
    return els
  }, [pattern, tone, seed])

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={tone.base} />
          <stop offset="55%" stopColor={tone.base} />
          <stop offset="100%" stopColor="#0a0806" />
        </linearGradient>
        <radialGradient id={`${gradId}-v`} cx="50%" cy="42%" r="75%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${gradId})`} />
      <g>{shapes}</g>
      <rect width={W} height={H} fill={`url(#${gradId}-v)`} />
    </svg>
  )
}
