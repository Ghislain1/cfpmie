import { useMemo } from 'react'
import SEO from '@/components/common/SEO'
import FormationDetail from '@/components/common/FormationDetail'
import { formations } from '@/features/formations/formationData'

const f = formations.find((f) => f.slug === 'construction-metallique')!

export default function ConstructionMetallique() {
  const meta = useMemo(() => ({
    title: 'Construction Métallique',
    description: 'Formation en soudure industrielle, chaudronnerie et tuyauterie au CFPMIE Douala. Diplômes AQP/CQP/DQP, stage garanti.',
    keywords: 'soudure, chaudronnerie, tuyauterie, formation professionnelle, Douala, Cameroun',
  }), [])

  return (
    <>
      <SEO {...meta} />
      <FormationDetail formation={f} />
    </>
  )
}
