import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Briefcase, Award, Image as ImageIcon } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/common/SectionHeading'
import SEO from '@/components/common/SEO'

const values = [
  { icon: GraduationCap, title: 'Pratique avant tout', text: '80% de pratique en atelier. Nos apprenants fabriquent le mobilier scolaire dès le premier mois.' },
  { icon: Users, title: 'Encadrement professionnel', text: 'Des formateurs qualifiés issus du monde professionnel accompagnent chaque apprenant.' },
  { icon: Briefcase, title: 'Insertion professionnelle', text: 'Stage garanti en entreprise et accompagnement vers l\'emploi pour chaque diplômé.' },
  { icon: Award, title: 'Diplômes d\'État', text: 'Formations reconnues par le MINEFOP avec diplômes AQP, CQP et DQP.' },
]

const facilities = [
  { title: 'Atelier soudure', desc: 'Postes à souder MIG/MAG, TIG, MMA, équipements de chaudronnerie' },
  { title: 'Laboratoire d\'électricité', desc: 'Tableaux didactiques, armoires industrielles, outils de diagnostic' },
  { title: 'Salle de bureautique', desc: 'Ordinateurs, logiciels de comptabilité et de gestion' },
  { title: 'Atelier de fabrication', desc: 'Fabrication du mobilier scolaire par les apprenants' },
  { title: 'Salles de cours', desc: 'Espaces climatisés et équipés pour l\'apprentissage théorique' },
  { title: 'Espace détente', desc: 'Cadre agréable pour les pauses et les échanges' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const meta = useMemo(() => ({
    title: 'À propos',
    description: 'Découvrez le CFPMIE, centre de formation professionnelle à Douala sous tutelle MINEFOP.',
  }), [])

  return (
    <>
      <SEO {...meta} />
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="orange">À propos</Badge>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Le CFPMIE en bref
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300">
            Centre de Formation Professionnelle Multi-Industriel de l&apos;Excellence.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-extrabold text-primary-900 dark:text-primary-100">Notre philosophie</h2>
            <blockquote className="mt-6 text-xl leading-relaxed italic text-muted-foreground">
              &ldquo;Au CFPMIE, nos apprenants ne regardent pas&hellip; ils réalisent !&rdquo;
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Nous croyons en une formation par la pratique. Dès le premier jour, nos apprenants sont
              en atelier, en train de souder, câbler, assembler et créer.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sous la tutelle du <strong>MINEFOP</strong>, le CFPMIE s&apos;engage à offrir une formation
              de qualité, accessible et adaptée au marché camerounais.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Nos valeurs" title="Ce qui nous distingue" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  variants={itemVariants}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm dark:bg-gray-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Nos installations" title="Des équipements modernes" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {facilities.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg dark:from-gray-700 dark:to-gray-800"
              >
                <div className="flex aspect-[4/3] items-center justify-center p-6 transition group-hover:scale-105">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-10 w-10 text-primary-300 dark:text-gray-400" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-primary-200 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            [Photos d&apos;illustration &ndash; ateliers et équipements du CFPMIE]
          </p>
        </div>
      </section>
    </>
  )
}
