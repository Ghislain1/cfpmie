import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

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

function SmokeEffect() {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
      <span
        className="absolute left-1/4 top-1/2 h-3 w-3 -translate-x-1/2 animate-smoke rounded-full bg-white/30 blur-sm"
        style={{ animationDelay: '0s', left: '20%' }}
      />
      <span
        className="absolute left-2/3 top-1/2 h-4 w-4 -translate-x-1/2 animate-smoke rounded-full bg-white/20 blur-md"
        style={{ animationDelay: '0.6s', left: '65%' }}
      />
      <span
        className="absolute left-1/3 top-1/2 h-2 w-2 -translate-x-1/2 animate-smoke rounded-full bg-white/20 blur-sm"
        style={{ animationDelay: '1.2s', left: '35%' }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 animate-smoke rounded-full bg-white/15 blur-lg"
        style={{ animationDelay: '0.3s', left: '50%' }}
      />
      <span
        className="absolute left-3/4 top-1/2 h-3 w-3 -translate-x-1/2 animate-smoke rounded-full bg-white/25 blur-sm"
        style={{ animationDelay: '0.9s', left: '75%' }}
      />
    </span>
  )
}

export default function CTAButton({ to, href, children, variant, size, className }: CTAButtonProps) {
  const cls = cn(ctaVariants({ variant, size, className }))

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <SmokeEffect />
      </a>
    )
  }

  return (
    <Link to={to!} className={cls}>
      {children}
      <SmokeEffect />
    </Link>
  )
}
