'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { regions, origin } from '@/lib/content'

const VW = 1000
const VH = 500

function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  // lift the control point to create an elegant curved route
  const dist = Math.hypot(x2 - x1, y2 - y1)
  const lift = dist * 0.32
  return `M ${x1} ${y1} Q ${mx} ${my - lift} ${x2} ${y2}`
}

export default function WorldMap() {
  const dots = useMemo(() => {
    const arr: { x: number; y: number; o: number }[] = []
    const gap = 22
    let s = 12345
    const rand = () => {
      s = (s * 1103515245 + 12345) & 0x7fffffff
      return s / 0x7fffffff
    }
    for (let y = gap; y < VH; y += gap) {
      for (let x = gap; x < VW; x += gap) {
        // faint field, subtle random dropout for organic feel
        if (rand() > 0.32) arr.push({ x, y, o: 0.06 + rand() * 0.1 })
      }
    }
    return arr
  }, [])

  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} className="h-full w-full" role="img" aria-label="Global availability route map">
      {/* faint world field */}
      <g>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={1.4} fill="#C6A46A" opacity={d.o} />
        ))}
      </g>

      {/* routes */}
      {regions.map((r) => (
        <motion.path
          key={r.name}
          d={arcPath(origin.x, origin.y, r.x, r.y)}
          fill="none"
          stroke="#C6A46A"
          strokeWidth={1.2}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 + r.delay }}
        />
      ))}

      {/* origin */}
      <g>
        <motion.circle
          cx={origin.x}
          cy={origin.y}
          r={5}
          fill="#C6A46A"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
        />
        <circle cx={origin.x} cy={origin.y} r={5} fill="none" stroke="#C6A46A" strokeWidth={1}>
          <animate attributeName="r" from="5" to="20" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <text x={origin.x} y={origin.y + 24} textAnchor="middle" className="fill-ivory" style={{ fontSize: 13, letterSpacing: 1 }}>
          Namibia
        </text>
      </g>

      {/* region markers */}
      {regions.map((r) => (
        <motion.g
          key={r.name}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.4 + r.delay }}
          style={{ transformOrigin: `${r.x}px ${r.y}px` }}
        >
          <circle cx={r.x} cy={r.y} r={4} fill="#F4EFE6" />
          <circle cx={r.x} cy={r.y} r={4} fill="none" stroke="#C6A46A" strokeWidth={1}>
            <animate attributeName="r" from="4" to="16" dur="2.6s" begin={`${r.delay}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2.6s" begin={`${r.delay}s`} repeatCount="indefinite" />
          </circle>
          <text
            x={r.x}
            y={r.y - 14}
            textAnchor="middle"
            className="fill-gold"
            style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}
          >
            {r.name === 'Gulf Cooperation Council' ? 'GCC' : r.name}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}
