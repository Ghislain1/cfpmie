import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide',
  {
    variants: {
      variant: {
        green: 'bg-primary-800 text-white',
        orange: 'bg-accent-500 text-white',
        light: 'bg-primary-100 text-primary-900',
        outline: 'border-2 border-primary-800 text-primary-800',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  },
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

export default function Badge({ children, variant, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))}>
      {children}
    </span>
  )
}

export { badgeVariants }
