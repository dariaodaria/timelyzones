import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  return (
    <div className={cn("animate-spin rounded-full border-2 border-primary border-t-transparent", sizeClasses[size], className)} />
  )
}

export function DropdownSkeleton() {
  return (
    <div className="space-y-1">
      <div className="w-full h-12 bg-muted animate-pulse rounded-lg" />
      <div className="px-3">
        <div className="w-12 h-5 bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}

export function TimeDisplaySkeleton() {
  return (
    <div className="w-[140px] h-12 bg-muted animate-pulse rounded-lg" />
  )
}

export function ConverterSkeleton() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-border p-6">
        <div className="space-y-4">
          {/* From Section */}
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-1 h-6 bg-muted animate-pulse rounded" />
            <div className="col-span-8">
              <DropdownSkeleton />
            </div>
            <div className="col-span-3">
              <div className="w-full h-12 bg-muted animate-pulse rounded-lg" />
            </div>
          </div>

          {/* To Sections */}
          {[1, 2].map((index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-1">
                {index === 1 && <div className="h-6 bg-muted animate-pulse rounded" />}
              </div>
              <div className="col-span-8">
                <DropdownSkeleton />
              </div>
              <div className="col-span-2">
                <TimeDisplaySkeleton />
              </div>
              <div className="col-span-1" />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
          <div className="w-20 h-8 bg-muted animate-pulse rounded-lg" />
          <div className="w-12 h-8 bg-muted animate-pulse rounded-lg" />
        </div>

        {/* Summary */}
        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="w-full h-6 bg-muted animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}
