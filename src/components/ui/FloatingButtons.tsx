import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MessageCircleMore, ArrowUp } from 'lucide-react'

const ITEMS = [
  { labelKey: 'floatingButtons.phone', icon: Phone, href: 'tel:00237670109235' },
  { labelKey: 'floatingButtons.email', icon: Mail, href: 'mailto:contact@cfpmie.com' },
  {
    labelKey: 'floatingButtons.whatsApp',
    icon: MessageCircleMore,
    href: 'https://wa.me/237670109235',
  },
]

export function FloatingButtons() {
  const { t } = useTranslation()

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition-colors hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {ITEMS.map(({ labelKey, href, icon: Icon }) => (
        <a
          key={labelKey}
          href={href}
          title={t(labelKey)}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition-colors hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}
