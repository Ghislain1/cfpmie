import { memo } from 'react'

const EMBERS = [
  { left: '15%', delay: '0s', size: 3, color: 'bg-amber-400' },
  { left: '30%', delay: '0.4s', size: 2, color: 'bg-orange-500' },
  { left: '50%', delay: '0.8s', size: 4, color: 'bg-yellow-300' },
  { left: '65%', delay: '0.2s', size: 2, color: 'bg-red-500' },
  { left: '80%', delay: '0.6s', size: 3, color: 'bg-amber-500' },
  { left: '40%', delay: '1s', size: 2, color: 'bg-orange-400' },
  { left: '70%', delay: '1.2s', size: 3, color: 'bg-yellow-400' },
  { left: '22%', delay: '0.9s', size: 2, color: 'bg-red-400' },
]

function FireEffect() {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
      <span
        className="absolute bottom-1 left-1/4 h-5 w-3 -translate-x-1/2 animate-flame rounded-full bg-orange-500/30 blur-sm"
        style={{ left: '35%' }}
      />
      <span
        className="absolute bottom-1 left-2/3 h-4 w-2 -translate-x-1/2 animate-flame rounded-full bg-amber-400/25 blur-sm"
        style={{ animationDelay: '0.3s', left: '60%' }}
      />
      {EMBERS.map((ember, i) => (
        <span
          key={i}
          className={`absolute -bottom-1 ${ember.color} animate-ember rounded-full blur-[2px]`}
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            animationDelay: ember.delay,
          }}
        />
      ))}
    </span>
  )
}

export default memo(FireEffect)
