import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  keywords?: string
}

const SITE_NAME = 'CFPMIE – Centre de Formation Professionnelle Multi-Industriel de l\'Excellence'

export default function SEO({ title, description, keywords }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
