import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'electricite')!

export default function Electricite() {
  const { t } = useTranslation()
  const meta = useMemo(() => ({
    title: t('formations.electricite.title'),
    description: t('formations.electricite.description') + ' Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'électricité, bâtiment, industrielle, formation professionnelle, Douala, Cameroun',
  }), [t])

  return <><SEO {...meta} /><FormationDetail formation={f} /></>
}
