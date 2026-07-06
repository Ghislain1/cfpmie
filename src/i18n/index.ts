import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fr from './locales/fr.json'
import en from './locales/en.json'

let initialized = false

export function initI18n(lng?: string) {
  if (initialized) return
  initialized = true

  if (typeof window !== 'undefined') {
    i18n.use(LanguageDetector)
  }

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
}

export default i18n
