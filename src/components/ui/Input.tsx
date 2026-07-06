import { forwardRef } from 'react'
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const inputBase = cn(
  'mt-1 block w-full rounded-lg border px-4 py-3 text-sm transition',
  'focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring',
  'placeholder:text-muted-foreground',
  'dark:bg-gray-800 dark:text-gray-100',
)

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, id, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={cn(
          inputBase,
          error ? 'border-accent-500' : 'border-border',
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
)
Input.displayName = 'Input'

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        ref={ref}
        id={id}
        className={cn(
          inputBase,
          error ? 'border-accent-500' : 'border-border',
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
)
Select.displayName = 'Select'

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, className, id, ...props }, ref) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <textarea
        ref={ref}
        id={id}
        className={cn(
          inputBase,
          error ? 'border-accent-500' : 'border-border',
          'resize-y min-h-25',
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">
          {error}
        </p>
      )}
    </div>
  ),
)
Textarea.displayName = 'Textarea'

export { Input, Select, Textarea }
