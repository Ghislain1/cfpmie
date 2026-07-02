import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-muted dark:bg-gray-800',
        className,
      )}
      aria-hidden="true"
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white shadow-lg dark:bg-gray-900">
      <Skeleton className="h-48 rounded-b-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-9 w-32 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="space-y-8 p-8">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-6 w-2/3" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default Skeleton
