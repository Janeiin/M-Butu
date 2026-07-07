import type Lenis from 'lenis'

// Simple module singleton so the nav (and anchor links) can drive Lenis.
let instance: Lenis | null = null

export function setLenis(l: Lenis | null) {
  instance = l
}

export function scrollToId(id: string) {
  const target = id.startsWith('#') ? id : `#${id}`
  if (instance) {
    instance.scrollTo(target, { offset: 0, duration: 1.6 })
  } else if (typeof document !== 'undefined') {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}
