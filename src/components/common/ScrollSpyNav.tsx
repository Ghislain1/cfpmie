import { motion } from 'framer-motion'

interface ScrollSpyNavProps {
  sections: { id: string; label: string }[]
  activeId: string
}

export default function ScrollSpyNav({ sections, activeId }: ScrollSpyNavProps) {
  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex" aria-label="Section navigation">
      <div className="flex flex-col items-center gap-3">
        {sections.map((s) => {
          const isActive = activeId === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center"
              aria-label={s.label}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                {s.label}
              </span>
              <div className="relative flex h-5 w-5 items-center justify-center">
                {isActive && (
                  <motion.span
                    layoutId="scroll-spy-dot"
                    className="h-3 w-3 rounded-full bg-primary-800 shadow-md dark:bg-primary-400"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="h-2 w-2 rounded-full bg-gray-300 transition hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500" />
                )}
              </div>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
