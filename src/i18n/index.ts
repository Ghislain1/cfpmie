import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'

let initialized = false

export function initI18n(lng?: string) {
  if (!initialized) {
    initialized = true
    i18n.use(initReactI18next).init({
      resources: {
        fr: { translation: fr },
        en: { translation: en },
      },
      lng: lng || 'fr',
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false,
      },
    })
  } else if (lng && typeof window === 'undefined') {
    i18n.changeLanguage(lng)
  }
}

export default i18n
