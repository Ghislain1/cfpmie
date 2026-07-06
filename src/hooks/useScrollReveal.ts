import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  stagger?: number
  y?: number
  opacity?: number
  duration?: number
  ease?: string
  once?: boolean
  start?: string
}

export function useScrollReveal(
  scopeRef: React.RefObject<HTMLElement | null>,
  targets: string,
  options: ScrollRevealOptions = {},
) {
  const {
    stagger = 0.1,
    y = 30,
    opacity: fromOpacity = 0,
    duration = 0.6,
    ease = 'power2.out',
    once = true,
    start = 'top 85%',
  } = options

  useGSAP(() => {
    const els = scopeRef.current?.querySelectorAll(targets)
    if (!els?.length) return

    gsap.fromTo(
      els,
      { y, opacity: fromOpacity, willChange: 'transform, opacity' },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease,
        willChange: 'auto',
        scrollTrigger: {
          trigger: scopeRef.current,
          start,
          once,
        },
      },
    )
  }, { scope: scopeRef, dependencies: [stagger, y, fromOpacity, duration, once, start] })
}
