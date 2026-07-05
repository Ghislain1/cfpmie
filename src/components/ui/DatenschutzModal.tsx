import { useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { X, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface DatenschutzModalProps {
  isOpen: boolean
  onClose: () => void
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants: Variants = {
  hidden: { y: 80, opacity: 0, rotate: -0.5 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', damping: 22, stiffness: 180, mass: 0.7 },
  },
  exit: {
    y: 60,
    opacity: 0,
    rotate: 0.3,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

const offsets = [-20, 24, -16, 28, -12, 18, -22, 20]

const contentVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    x: offsets[i % offsets.length],
    rotate: i % 2 === 0 ? 0.8 : -0.8,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      delay: 0.12 + i * 0.07,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const sections = [
  'overview',
  'dataCollected',
  'purpose',
  'cookies',
  'rights',
  'contact',
] as const

export function DatenschutzModal({ isOpen, onClose }: DatenschutzModalProps) {
  const { t } = useTranslation()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="datenschutz-wrapper"
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-lg max-h-[85vh] rounded-2xl border border-border bg-white shadow-2xl dark:bg-gray-950 overflow-y-auto">
              <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-white px-6 py-4 dark:bg-gray-950 rounded-t-2xl">
                <Shield className="h-5 w-5 text-primary-800 dark:text-primary-400" />
                <h2 className="flex-1 text-lg font-bold text-foreground">
                  {t('datenschutz.title')}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={t('datenschutz.close')}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-6 px-6 py-6 text-sm leading-relaxed text-muted-foreground">
                {sections.map((key, i) => (
                  <motion.div
                    key={key}
                    custom={i}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="mb-2 text-base font-semibold text-foreground">
                      {t(`datenschutz.${key}.heading`)}
                    </h3>
                    {t(`datenschutz.${key}.body`)
                      .split('\n')
                      .map((line, li) => (
                        <p key={li} className={li > 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
