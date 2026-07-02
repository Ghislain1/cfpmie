import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
  as?: 'section' | 'div'
  offset?: any
  yRange?: [string, string]
}

export default function ParallaxSection({
  children,
  id,
  className,
  as: Tag = 'section',
  offset = ['start end', 'end start'],
  yRange = ['3rem', '-3rem'],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <Tag ref={ref} id={id} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </Tag>
  )
}
