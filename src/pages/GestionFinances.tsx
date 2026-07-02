import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'gestion-finances-management')!

export default function GestionFinances() {
  const { t } = useTranslation()
  const meta = useMemo(() => ({
    title: t('formations.gestion-finances-management.title'),
    description: t('formations.gestion-finances-management.description') + ' Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'comptabilité, gestion, secrétariat, management, formation professionnelle, Douala',
  }), [t])

  return <><SEO {...meta} /><FormationDetail formation={f} /></>
}
