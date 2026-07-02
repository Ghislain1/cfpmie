import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'construction-metallique')!

export default function ConstructionMetallique() {
  const { t } = useTranslation()
  const meta = useMemo(() => ({
    title: t('formations.construction-metallique.title'),
    description: t('formations.construction-metallique.description') + ' Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'soudure, chaudronnerie, tuyauterie, formation professionnelle, Douala, Cameroun',
  }), [t])

  return (
    <>
      <SEO {...meta} />
      <FormationDetail formation={f} />
    </>
  )
}
