import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import SkipToContent from '@/components/common/SkipToContent'
import { useScrollToTop } from '@/hooks/useScrollToTop'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function LoadingFallback() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-live="polite" aria-label={t('layout.loadingLabel')}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary-800" role="status">
        <span className="sr-only">{t('layout.loading')}</span>
      </div>
    </div>
  )
}

export default function Layout() {
  useScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Suspense fallback={<LoadingFallback />}>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
