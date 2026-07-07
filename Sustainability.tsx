'use client'

import Image from 'next/image'
import HidePattern from '@/components/visuals/HidePattern'
import type { Product } from '@/lib/products'

// Drop real photography into /public/images and pass `src` to replace the
// procedural texture. Everything else (framing, ratio, overlays) stays the same.
export default function Media({
  src,
  alt = '',
  pattern = 'zebra-bold',
  tone = { base: '#1c150e', mark: '#efe7d8' },
  seed,
  className = '',
  priority = false,
  sizes = '100vw',
}: {
  src?: string
  alt?: string
  pattern?: Product['pattern']
  tone?: { base: string; mark: string }
  seed?: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    )
  }
  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <HidePattern pattern={pattern} tone={tone} seed={seed} className="h-full w-full" />
    </div>
  )
}
