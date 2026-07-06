import { type ReactNode } from 'react'
import { Link } from 'react-router'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import FireEffect from './FireEffect'

const ctaVariants = cva(
  'relative inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-accent-500/30',
        secondary: 'bg-primary-800 text-white hover:bg-primary-700 shadow-primary-800/30',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-800 shadow-none',
      },
      size: {
        md: 'px-6 py-3',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface CTAButtonProps extends VariantProps<typeof ctaVariants> {
  to?: string
  href?: string
  children: ReactNode
  className?: string
}

export default function CTAButton({ to, href, children, variant, size, className }: CTAButtonProps) {
  const cls = cn(ctaVariants({ variant, size, className }))

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <FireEffect />
      </a>
    )
  }

  return (
    <Link to={to!} className={cls}>
      {children}
      <FireEffect />
    </Link>
  )
}
