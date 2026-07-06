import { useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { GraduationCap, Users, Briefcase, Award, Image as ImageIcon } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/common/SectionHeading'
import ParallaxSection from '@/components/common/ParallaxSection'
import SEO from '@/components/common/SEO'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const values = [
  { icon: GraduationCap, key: 'practice' },
  { icon: Users, key: 'mentoring' },
  { icon: Briefcase, key: 'employment' },
  { icon: Award, key: 'diplomas' },
]

const facilities = [
  { key: 'welding' },
  { key: 'electrical' },
  { key: 'office' },
  { key: 'workshop' },
  { key: 'classrooms' },
  { key: 'lounge' },
]

export default function About() {
  const { t } = useTranslation()
  const valuesRef = useRef<HTMLDivElement>(null)
  const facilitiesRef = useRef<HTMLDivElement>(null)
  useScrollReveal(valuesRef, '.value-card', { stagger: 0.1, y: 24 })
  useScrollReveal(facilitiesRef, '.facility-card', { stagger: 0.08, y: 24 })

  const meta = useMemo(() => ({
    title: t('about.seoTitle'),
    description: t('about.seoDescription'),
  }), [t])

  return (
    <>
      <SEO {...meta} />
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="orange">{t('about.hero.badge')}</Badge>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {t('about.hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      <ParallaxSection className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-extrabold text-primary-900 dark:text-primary-100">{t('about.philosophy.title')}</h2>
            <blockquote className="mt-6 text-xl leading-relaxed italic text-muted-foreground">
              {t('about.philosophy.quote')}
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {t('about.philosophy.p1')}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              <Trans i18nKey="about.philosophy.p2" components={{ 1: <strong /> }} />
            </p>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="bg-primary-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge={t('about.values.badge')} title={t('about.values.title')} />
          <div ref={valuesRef} className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.key}
                  className="value-card rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-gray-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">{t(`about.values.items.${v.key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`about.values.items.${v.key}.text`)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge={t('about.facilities.badge')} title={t('about.facilities.title')} />
          <div ref={facilitiesRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div
                key={item.key}
                className="facility-card group overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg dark:from-gray-700 dark:to-gray-800"
              >
                <div className="flex aspect-[4/3] items-center justify-center p-6 transition group-hover:scale-105">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-10 w-10 text-primary-300 dark:text-gray-400" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-lg font-bold text-white">{t(`about.facilities.items.${item.key}.title`)}</h3>
                    <p className="mt-1 text-sm text-primary-200 dark:text-gray-300">{t(`about.facilities.items.${item.key}.desc`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            {t('about.facilities.caption')}
          </p>
        </div>
      </ParallaxSection>
    </>
  )
}
