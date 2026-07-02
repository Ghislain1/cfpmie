import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Phone, GraduationCap, Briefcase, Award, Image as ImageIcon } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import CTAButton from '@/components/common/CTAButton'
import FormationCard from '@/components/common/FormationCard'
import SectionHeading from '@/components/common/SectionHeading'
import SEO from '@/components/common/SEO'
import { formations } from '@/features/formations/formationData'

const highlights = [
  { icon: GraduationCap, title: 'Formation pratique', text: '80% de pratique en atelier. Nos apprenants fabriquent eux-mêmes le mobilier scolaire.' },
  { icon: Award, title: 'Diplômes reconnus', text: 'AQP/CQP/DQP sous tutelle MINEFOP, plus certificat de secourisme inclus.' },
  { icon: Briefcase, title: 'Stage garanti', text: '2 mois de stage en entreprise partenaire pour chaque apprenant.' },
  { icon: Phone, title: 'Encadrement expert', text: 'Formateurs qualifiés et équipements modernes.' },
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
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <Badge variant="orange">Rentrée académique 2025</Badge>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Une <span className="font-display text-accent-300">Formation</span> –<br />
            <span className="text-5xl sm:text-6xl lg:text-7xl">Un Métier – Un Emploi</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-100 dark:text-gray-300">
            Le CFPMIE forme les professionnels de demain dans les métiers industriels et de gestion.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact">Inscriptions ouvertes</CTAButton>
            <CTAButton to="/a-propos" variant="outline">Découvrir le CFPMIE</CTAButton>
          </div>
          <blockquote className="mt-8 border-l-4 border-accent-500 pl-4 italic text-primary-200 dark:text-gray-300">
            &ldquo;Après la période électorale, la vie continue&hellip; et l&apos;avenir se prépare.&rdquo;
            <cite className="mt-1 block text-xs not-italic text-primary-300 dark:text-gray-400">
              &mdash; Rentrée académique 2025 : 25 novembre 2025
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

function HighlightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Pourquoi CFPMIE ?" title="Notre promesse" />
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
                key={h.title}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-muted/50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="bg-primary-800 py-16 sm:py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="orange">Réalisations</Badge>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            &ldquo;Au CFPMIE, nos apprenants ne regardent pas&hellip; ils réalisent !&rdquo;
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-200 dark:text-gray-300">
            Dès le premier jour, nos apprenants mettent la main à la pâte.
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
                  <p className="mt-2 text-sm font-medium text-primary-200 dark:text-gray-300">Atelier {i}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-sm italic text-primary-300 dark:text-gray-400">
          [Photos d&apos;illustration &ndash; ateliers et réalisations des apprenants]
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-accent-500 py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Prêt à construire votre avenir ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-accent-100">
          Rejoignez le CFPMIE et bénéficiez d&apos;une formation professionnelle de qualité.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CTAButton to="/contact" variant="secondary">S&apos;inscrire maintenant</CTAButton>
          <a
            href="https://wa.me/237670109235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-accent-500"
          >
            <Phone size={16} aria-hidden="true" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const meta = useMemo(() => ({
    title: 'Accueil',
    description: 'CFPMIE – formations professionnelles en construction métallique, gestion des finances et électricité à Douala, Cameroun.',
  }), [])

  return (
    <>
      <SEO {...meta} />
      <HeroSection />
      <section className="bg-primary-50 py-16 sm:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Nos filières"
            title="Choisissez votre formation"
            description="Trois secteurs porteurs pour bâtir votre avenir professionnel."
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
      </section>
      <HighlightsSection />
      <GallerySection />
      <CTASection />
    </>
  )
}
