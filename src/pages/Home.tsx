import { useRef, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, GraduationCap, Briefcase, Award } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import CTAButton from '@/components/common/CTAButton'
import FireEffect from '@/components/common/FireEffect'
import FormationCard from '@/components/common/FormationCard'
import SectionHeading from '@/components/common/SectionHeading'
import ParallaxSection from '@/components/common/ParallaxSection'
import Particles from '@/components/common/Particles'
import RainEffect from '@/components/common/RainEffect'
import ScrollSpyNav from '@/components/common/ScrollSpyNav'
import SEO from '@/components/common/SEO'
import { useScrollSpy, getSectionColor } from '@/hooks/useScrollSpy'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { formations } from '@/features/formations/formationData'
import { cn } from '@/lib/utils'

const highlights = [
  { icon: GraduationCap, key: 'practice' },
  { icon: Award, key: 'diplomas' },
  { icon: Briefcase, key: 'internship' },
  { icon: Phone, key: 'expertise' },
]

function HeroSection() {
  const { t } = useTranslation()
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'brightness(0.45) saturate(1.2)' }}
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>
      <RainEffect density={200} color="rgba(255,255,255,0.8)" speed={0.5} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge variant="orange">{t('home.hero.badge')}</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            <Trans i18nKey="home.hero.heading" components={{ 1: <motion.span initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 1, ease: 'easeInOut' }} className="inline-block font-display text-accent-300" />, 2: <span className="text-5xl sm:text-6xl lg:text-7xl" /> }} />
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-100 dark:text-gray-300">
            {t('home.hero.description')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact">{t('home.hero.ctaInscription')}</CTAButton>
            <CTAButton to="/a-propos" variant="outline">{t('home.hero.ctaDecouvrir')}</CTAButton>
          </div>
          <blockquote className="mt-8 border-l-4 border-accent-500 pl-4 italic text-primary-200 dark:text-gray-300">
            {t('home.hero.quote')}
            <cite className="mt-1 block text-xs not-italic text-primary-300 dark:text-gray-400">
              {t('home.hero.quoteCite')}
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

function HighlightsSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref, '.highlight-card', { stagger: 0.1, y: 24 })
  return (
    <section id="highlights" className="bg-white py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t('home.highlights.badge')} title={t('home.highlights.title')} />
        <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div
                key={h.key}
                className="highlight-card rounded-2xl border border-border bg-muted/50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">{t(`home.highlights.items.${h.key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`home.highlights.items.${h.key}.text`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal(ref, '.gallery-item', { stagger: 0.1, y: 30 })
  const items = [
    { i: 1, span: 'lg:col-span-2 lg:row-span-2', aspect: 'aspect-[4/5] lg:aspect-auto', src: '/pics/cfpmie.png' },
    { i: 2, span: '', aspect: 'aspect-[3/2]', src: '/pics/flyer1.jpg' },
    { i: 3, span: '', aspect: 'aspect-[1/1]', src: '/pics/flyer2.jpg' },
    { i: 4, span: 'lg:col-span-2', aspect: 'aspect-[3/1] lg:aspect-auto', src: '/pics/to_video.png' },
  ]
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary-600 dark:text-primary-400 uppercase">
            {t('home.gallery.badge')}
          </p>
          <h2 className="mt-5 font-heading text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('home.gallery.heading')}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t('home.gallery.description')}
          </p>
        </div>
        <div ref={ref} className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-[240px_240px]">
          {items.map(({ i, span, aspect, src }) => {
            return (
              <div
                key={i}
                className={cn('gallery-item group relative overflow-hidden rounded-2xl bg-muted', span, aspect)}
              >
                <img
                  src={src}
                  alt={t('home.gallery.atelier', { number: i })}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-5 pb-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white drop-shadow-sm">
                    {t('home.gallery.atelier', { number: i })}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground/60 tracking-wide">
          {t('home.gallery.caption')}
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  const { t } = useTranslation()
  return (
    <section id="cta" className="bg-accent-500 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          {t('home.cta.heading')}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-accent-100">
          {t('home.cta.text')}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CTAButton to="/contact" variant="secondary">{t('home.cta.button')}</CTAButton>
          <a
            href="https://wa.me/237670109235"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-accent-500"
          >
            <Phone size={16} aria-hidden="true" />
            {t('home.cta.whatsapp')}
            <FireEffect />
          </a>
        </div>
      </div>
    </section>
  )
}

const sectionIds = ['hero', 'formations', 'highlights', 'gallery', 'cta']

export default function Home() {
  const { t } = useTranslation()
  const activeId = useScrollSpy(sectionIds)
  const formationsRef = useRef<HTMLDivElement>(null)
  useScrollReveal(formationsRef, '.formation-card', { stagger: 0.1, y: 24 })

  useEffect(() => {
    document.documentElement.style.setProperty('--scrollbar-color', getSectionColor(activeId))
  }, [activeId])

  const meta = useMemo(() => ({
    title: t('home.seoTitle'),
    description: t('home.seoDescription'),
  }), [t])

  const sectionLabels = useMemo(() => [
    { id: 'hero', label: t('home.hero.badge') },
    { id: 'formations', label: t('home.formations.badge') },
    { id: 'highlights', label: t('home.highlights.badge') },
    { id: 'gallery', label: t('home.gallery.badge') },
    { id: 'cta', label: t('home.cta.heading') },
  ], [t])

  return (
    <>
      <SEO {...meta} />
      <Particles
        quantity={40}
        color="rgba(255, 255, 255, 0.25)"
        minSize={1}
        maxSize={4}
        speed={0.2}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <ScrollSpyNav sections={sectionLabels} activeId={activeId} />
      <HeroSection />
      <ParallaxSection id="formations" className="bg-primary-50 py-16 sm:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t('home.formations.badge')}
            title={t('home.formations.title')}
            description={t('home.formations.description')}
          />
          <div
            ref={formationsRef}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {formations.map((f) => (
              <div key={f.slug} className="formation-card">
                <FormationCard formation={f} />
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>
      <ParallaxSection><HighlightsSection /></ParallaxSection>
      <ParallaxSection><GallerySection /></ParallaxSection>
      <ParallaxSection><CTASection /></ParallaxSection>
    </>
  )
}
