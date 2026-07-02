import { useMemo } from 'react'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'gestion-finances-management')!

export default function GestionFinances() {
  const meta = useMemo(() => ({
    title: 'Gestion des Finances & Management',
    description: 'Formation en comptabilité, secrétariat et management au CFPMIE Douala. Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'comptabilité, gestion, secrétariat, management, formation professionnelle, Douala',
  }), [])

  return <><SEO {...meta} /><FormationDetail formation={f} /></>
}
