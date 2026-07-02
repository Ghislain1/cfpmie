import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import type { Formation } from '@/types'

interface FormationCardProps {
  formation: Formation
}

function FormationCardInner({ formation }: FormationCardProps) {
  const { t } = useTranslation()
  const fKey = `formations.${formation.slug}`

  return (
    <Link to={`/formations/${formation.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col">
        <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
          <span className="font-heading text-2xl font-bold text-white/80">
            {t(`${fKey}.title`)}
          </span>
          {formation.badgeText && (
            <div className="absolute right-3 top-3">
              <Badge variant="orange">{formation.badgeText}</Badge>
            </div>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col">
          <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-primary-200">
            {t(`${fKey}.title`)}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {t(`${fKey}.description`)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {formation.filieres.slice(0, 2).map((f, i) => (
              <span
                key={f}
                className="rounded-full bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
              >
                {t(`${fKey}.filieres.${i}`)}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="font-heading text-lg font-bold text-accent-600 dark:text-accent-400">
              {formation.price.toLocaleString()} FCFA
            </span>
            <span className="flex items-center gap-1 rounded-full bg-primary-800 px-4 py-2 text-xs font-bold text-white transition group-hover:bg-primary-700 dark:bg-primary-700 dark:group-hover:bg-primary-600">
              {t('formationCard.cta')}
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

const FormationCard = memo(FormationCardInner)
export default FormationCard
