import { useState, useEffect, useRef } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0 },
    )

    for (const el of elements) {
      observerRef.current.observe(el)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [sectionIds, offset])

  return activeId
}

const sectionColors: Record<string, string> = {
  hero: '#3b82f6',
  formations: '#8b5cf6',
  highlights: '#10b981',
  gallery: '#f59e0b',
  cta: '#ef4444',
}

export function getSectionColor(id: string) {
  return sectionColors[id] || sectionColors.hero
}
