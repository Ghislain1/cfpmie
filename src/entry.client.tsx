import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HydratedRouter } from 'react-router/dom'
import { initI18n } from '@/i18n'
import '@/index.css'

const serverLang = document.documentElement.lang
initI18n(serverLang || undefined)

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HelmetProvider>
        <HydratedRouter />
      </HelmetProvider>
    </StrictMode>,
  )
})
