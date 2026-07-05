import { useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, GraduationCap, Briefcase, Award, Image as ImageIcon } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import CTAButton from '@/components/common/CTAButton'
import FireEffect from '@/components/common/FireEffect'
import FormationCard from '@/components/common/FormationCard'
import SectionHeading from '@/components/common/SectionHeading'
import ParallaxSection from '@/components/common/ParallaxSection'
import Particles from '@/components/common/Particles'
import ScrollSpyNav from '@/components/common/ScrollSpyNav'
import SEO from '@/components/common/SEO'
import { useScrollSpy, getSectionColor } from '@/hooks/useScrollSpy'
import { formations } from '@/features/formations/formationData'

const highlights = [
  { icon: GraduationCap, key: 'practice' },
  { icon: Award, key: 'diplomas' },
  { icon: Briefcase, key: 'internship' },
  { icon: Phone, key: 'expertise' },
]

const gallery = [1, 2, 3, 4]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge variant="orange">{t('home.hero.badge')}</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            <Trans i18nKey="home.hero.heading" components={{ 1: <span className="font-display text-accent-300" />, 2: <span className="text-5xl sm:text-6xl lg:text-7xl" /> }} />
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
  return (
    <section id="highlights" className="bg-white py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={t('home.highlights.badge')} title={t('home.highlights.title')} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.key}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-muted/50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">{t(`home.highlights.items.${h.key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`home.highlights.items.${h.key}.text`)}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection() {
  const { t } = useTranslation()
  return (
    <section id="gallery" className="bg-primary-800 py-16 sm:py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="orange">{t('home.gallery.badge')}</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            {t('home.gallery.heading')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-200 dark:text-gray-300">
            {t('home.gallery.description')}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {gallery.map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg dark:from-gray-700 dark:to-gray-800"
            >
              <div className="flex h-full items-center justify-center transition group-hover:scale-105">
                <div className="text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-primary-300 dark:text-gray-400" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium text-primary-200 dark:text-gray-300">{t('home.gallery.atelier', { number: i })}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-sm italic text-primary-300 dark:text-gray-400">
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {formations.map((f) => (
              <motion.div key={f.slug} variants={itemVariants}>
                <FormationCard formation={f} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>
      <ParallaxSection><HighlightsSection /></ParallaxSection>
      <ParallaxSection><GallerySection /></ParallaxSection>
      <ParallaxSection><CTASection /></ParallaxSection>
    </>
  )
}
