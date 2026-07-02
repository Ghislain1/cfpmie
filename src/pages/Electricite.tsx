import { useMemo } from 'react'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'electricite')!

export default function Electricite() {
  const meta = useMemo(() => ({
    title: 'Électricité',
    description: 'Formation en électricité bâtiment et industrielle au CFPMIE Douala. Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'électricité, bâtiment, industrielle, formation professionnelle, Douala, Cameroun',
  }), [])

  return <><SEO {...meta} /><FormationDetail formation={f} /></>
}
