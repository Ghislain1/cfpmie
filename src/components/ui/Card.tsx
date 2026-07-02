import { forwardRef } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900 dark:hover:shadow-gray-800/50',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  ),
)
CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props}>
      {children}
    </div>
  ),
)
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardContent }
