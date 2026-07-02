import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/30',
        secondary: 'bg-primary-800 text-white hover:bg-primary-700 shadow-lg shadow-primary-800/30',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-800',
        ghost: 'text-primary-800 hover:bg-primary-50 dark:text-primary-200 dark:hover:bg-gray-800',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export { Button, buttonVariants }
