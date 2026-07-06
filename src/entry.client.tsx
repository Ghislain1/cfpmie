import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HydratedRouter } from 'react-router/dom'
import '@/i18n'
import '@/index.css'

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
