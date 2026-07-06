import { useRef, type ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionHeading from '@/components/common/SectionHeading'
import { cn } from '@/lib/utils'

export interface GridItem {
  image: string
  title: string
  description: string
  alt?: string
}

interface SectionGridBuilderProps {
  badge: string
  title: string
  items: GridItem[]
  columns?: 2 | 3 | 4
  className?: string
  cardClassName?: string
  imageClassName?: string
  overlay?: ReactNode
  caption?: string
}

export function SectionGridBuilder({
  badge,
  title,
  items,
  columns = 3,
  className,
  cardClassName,
  imageClassName,
  overlay,
  caption,
}: SectionGridBuilderProps) {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref, '.grid-card', { stagger: 0.08, y: 24 })

  const cols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={cn('py-16', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} />
        <div ref={ref} className={cn('mt-12 grid gap-6', cols[columns])}>
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'grid-card group overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg dark:from-gray-700 dark:to-gray-800',
                cardClassName,
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt ?? item.title}
                  className={cn(
                    'h-full w-full object-cover transition-all duration-700 group-hover:scale-110',
                    imageClassName,
                  )}
                />
                {overlay}
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-primary-200 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {caption && (
          <p className="mt-6 text-center text-sm italic text-muted-foreground">{caption}</p>
        )}
      </div>
    </section>
  )
}
