import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
}

export default function SEO({ title, description, keywords }: SEOProps) {
  const { t, i18n } = useTranslation()
  const siteName = t('seo.siteName')
  const fullTitle = `${title} | ${siteName}`

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
