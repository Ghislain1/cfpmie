import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '@/components/common/SEO'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } as const,
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('notFound.seoTitle')} />
      <section className="flex min-h-[70vh] items-center justify-center bg-white dark:bg-gray-950">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={numberVariants}
            className="inline-block font-heading text-8xl font-extrabold text-primary-800 dark:text-primary-400"
          >
            404
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="mt-4 font-heading text-2xl font-bold text-foreground"
          >
            {t('notFound.title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-muted-foreground"
          >
            {t('notFound.message')}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-primary-700 hover:shadow-xl"
            >
              <Home
                size={16}
                aria-hidden="true"
                className="transition group-hover:-translate-x-1"
              />
              {t('notFound.button')}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
