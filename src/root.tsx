import { Suspense, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Links, Outlet, Scripts, ScrollRestoration, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/layout/Footer'
import SkipToContent from '@/components/common/SkipToContent'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { ThemeProvider } from '@/hooks/useTheme'
import GhisHeader from '@/components/layout/GhisHeader'
import { FloatingButtons } from '@/components/ui/FloatingButtons'
import { DatenschutzModal } from '@/components/ui/DatenschutzModal'
import ErrorBoundary from '@/components/common/ErrorBoundary'

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

export default function Root() {
  useScrollToTop()
  const { i18n } = useTranslation()
  const [datenschutzOpen, setDatenschutzOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('datenschutz-accepted')) {
      setDatenschutzOpen(true)
    }
  }, [])

  const closeDatenschutz = () => {
    localStorage.setItem('datenschutz-accepted', 'true')
    setDatenschutzOpen(false)
  }

  const openDatenschutz = () => setDatenschutzOpen(true)

  return (
    <ThemeProvider>
      <Helmet>
        <html lang={i18n.language} />
        <meta name="lang" content={i18n.language} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&family=Pacifico&display=swap" rel="stylesheet" />
      </Helmet>
      <Links />
      <ErrorBoundary>
        <div className="flex min-h-screen flex-col">
          <SkipToContent />
          <GhisHeader />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Suspense fallback={<LoadingFallback />}>
              <PageTransition>
                <Outlet />
              </PageTransition>
            </Suspense>
          </main>
          <FloatingButtons />
          <Footer onOpenDatenschutz={openDatenschutz} />
          <DatenschutzModal isOpen={datenschutzOpen} onClose={closeDatenschutz} />
          <ScrollRestoration />
          <Scripts />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
