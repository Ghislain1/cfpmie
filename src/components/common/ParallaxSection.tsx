import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
  as?: 'section' | 'div'
  speed?: number
}

export default function ParallaxSection({
  children,
  id,
  className,
  as: Tag = 'section',
  speed = 0.15,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current || !innerRef.current) return

    const travel = window.innerHeight * speed

    gsap.fromTo(
      innerRef.current,
      { y: -travel },
      {
        y: travel,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      },
    )
  }, { scope: ref })

  return (
    <Tag ref={ref} id={id} className={cn('relative overflow-hidden', className)}>
      <div ref={innerRef}>{children}</div>
    </Tag>
  )
}
