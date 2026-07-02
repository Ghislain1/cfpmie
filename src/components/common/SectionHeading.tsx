import type { ReactNode } from 'react'
import Badge from '@/components/ui/Badge'

interface SectionHeadingProps {
  badge?: string
  title: ReactNode
  description?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({ badge, title, description, center = true, className }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : className}>
      {badge && <Badge variant="green">{badge}</Badge>}
      <h2 className="mt-4 font-heading text-3xl font-extrabold text-primary-900 dark:text-primary-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
