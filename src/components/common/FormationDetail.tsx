import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import CTAButton from '@/components/common/CTAButton'
import type { Formation } from '@/types'

interface FormationDetailProps {
  formation: Formation
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function PhaseSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        { months: '6 mois', desc: 'Cours théoriques et pratiques', accent: false },
        { months: '2 mois', desc: 'Projet pratique', accent: false },
        { months: '2 mois', desc: 'Stage garanti en entreprise', accent: true },
      ].map((item) => (
        <div
          key={item.desc}
          className={`rounded-xl border p-4 text-center ${
            item.accent
              ? 'border-accent-100 bg-accent-50 dark:border-accent-900 dark:bg-accent-900/20'
              : 'border-border bg-muted/50 dark:border-gray-700 dark:bg-gray-800'
          }`}
        >
          <span className={`font-heading text-2xl font-bold ${item.accent ? 'text-accent-600 dark:text-accent-400' : 'text-primary-800 dark:text-primary-300'}`}>
            {item.months}
          </span>
          <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

function SectionWrapper({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <div className={i % 2 === 1 ? 'rounded-2xl bg-muted/50 p-6 sm:p-8 dark:bg-gray-900' : ''}>
      {children}
    </div>
  )
}

export default function FormationDetail({ formation: f }: FormationDetailProps) {
  const sections = [
    {
      id: 'phase',
      title: 'Phase de formation',
      icon: '📅',
      content: <PhaseSection />,
    },
    {
      id: 'filieres',
      title: 'Nos filières',
      icon: '📋',
      content: (
        <ul className="space-y-3">
          {f.filieres.map((fi, i) => (
            <li key={fi} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-800 text-xs font-bold text-white dark:bg-primary-700">
                {i + 1}
              </span>
              <span className="font-medium text-foreground">{fi}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'diplomes',
      title: 'Diplômes',
      icon: '📜',
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="green">AQP</Badge>
            <Badge variant="green">CQP</Badge>
            <Badge variant="green">DQP</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Diplômes professionnels reconnus par le <strong>MINEFOP</strong>, avec certificat de secourisme inclus.
          </p>
          {f.certificates && (
            <div className="rounded-xl border border-border bg-muted/50 p-4">
              <h4 className="font-heading text-sm font-bold text-foreground">Certificats optionnels</h4>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {f.certificates.map((c) => (
                  <li key={c}>&bull; {c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'competences',
      title: 'Compétences / Savoir-faire',
      icon: '⚡',
      content: (
        <ul className="grid gap-2 sm:grid-cols-2">
          {f.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 rounded-lg border border-border bg-white p-3 text-sm text-foreground dark:bg-gray-800"
            >
              <span className="text-primary-600 dark:text-primary-400">✓</span>
              {skill}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'participation',
      title: 'Participation',
      icon: '💰',
      content: (
        <div className="space-y-6">
          <div className="rounded-xl bg-accent-50 p-6 text-center dark:bg-accent-900/20">
            <p className="text-sm text-muted-foreground">Frais de formation</p>
            <p className="font-heading text-4xl font-extrabold text-accent-600 dark:text-accent-400">
              {f.price.toLocaleString()} FCFA
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-bold text-foreground">
              Paiement en {f.installments.length} mensualité{f.installments.length > 1 ? 's' : ''}
            </h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {f.installments.map((inst) => (
                <div key={inst.label} className="rounded-lg border border-border p-4 text-center">
                  <span className="font-heading text-lg font-bold text-primary-800 dark:text-primary-300">
                    {inst.amount.toLocaleString()} FCFA
                  </span>
                  <p className="text-xs text-muted-foreground">{inst.label}</p>
                </div>
              ))}
            </div>
          </div>
          {f.extras && (
            <div className="rounded-xl border-2 border-accent-200 bg-accent-50/50 p-4 dark:border-accent-800 dark:bg-accent-900/10">
              <h5 className="font-heading text-sm font-bold text-accent-700 dark:text-accent-400">Inclus dans l&apos;inscription</h5>
              <div className="mt-2 flex flex-wrap gap-2">
                {f.extras.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 dark:bg-gray-800 dark:text-primary-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="orange">Inscriptions ouvertes</Badge>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            <span className="font-display text-accent-300">Spéciale</span>{' '}
            <span className="block">FORMATION en</span>
            <span className="block">{f.title}</span>
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300">
            {f.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton to="/contact">S&apos;inscrire</CTAButton>
            <a
              href="https://wa.me/237670109235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary-800"
            >
              <Phone size={16} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="bg-white py-12 sm:py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {sections.map((s, i) => (
              <motion.section key={s.id} id={s.id} variants={itemVariants}>
                <SectionWrapper i={i}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                    <h2 className="font-heading text-2xl font-extrabold text-primary-900 dark:text-primary-100 sm:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-6 max-w-3xl">{s.content}</div>
                </SectionWrapper>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="bg-accent-500 py-12 dark:bg-accent-700">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-extrabold text-white">Prêt à rejoindre la formation ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-accent-100">Inscrivez-vous dès maintenant.</p>
          <div className="mt-6">
            <CTAButton to="/contact" variant="secondary">S&apos;inscrire maintenant</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
