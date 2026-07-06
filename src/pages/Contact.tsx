import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import SEO from '@/components/common/SEO'
import { formations } from '@/features/formations/formationData'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const schema = useMemo(() => z.object({
    nom: z.string().min(2, t('contact.form.errors.name')),
    telephone: z.string().min(6, t('contact.form.errors.phone')),
    formation: z.string().min(1, t('contact.form.errors.formation')),
    message: z.string().optional(),
  }), [t])

  const contactInfo = useMemo(() => [
    { icon: MapPin, title: t('contact.info.address'), content: t('contact.info.addressValue') },
    { icon: Phone, title: t('contact.info.phone'), content: t('contact.info.phoneValue'), href: 'tel:+237659245821' },
    { icon: MessageCircle, title: t('contact.info.whatsapp'), content: t('contact.info.whatsappValue'), href: 'https://wa.me/237670109235' },
    { icon: Mail, title: t('contact.info.email'), content: t('contact.info.emailValue'), href: 'mailto:contact@cfpmie.com' },
    { icon: Globe, title: t('contact.info.website'), content: t('contact.info.websiteValue'), href: 'https://www.formationcfpmie.com' },
  ], [t])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = useCallback((data: { nom: string; telephone: string; formation: string; message?: string }) => {
    setStatus('sending')
    const text = t('contact.whatsappMessage', {
      nom: data.nom,
      telephone: data.telephone,
      formation: data.formation,
      message: data.message || '',
    })

    try {
      window.open(`https://wa.me/237670109235?text=${text}`, '_blank')
      setStatus('success')
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }, [t])

  const meta = useMemo(() => ({
    title: t('contact.seoTitle'),
    description: t('contact.seoDescription'),
  }), [t])

  return (
    <>
      <SEO {...meta} />
      <section className="bg-linear-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="orange">{t('contact.hero.badge')}</Badge>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            {t('contact.hero.title')}
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-heading text-2xl font-extrabold text-foreground">
                {t('contact.form.title')}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t('contact.form.description')}
              </p>

              {status === 'success' ? (
                <div className="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-8 text-center dark:border-primary-800 dark:bg-primary-900/20" role="status">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  <p className="mt-3 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">
                    {t('contact.form.successTitle')}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t('contact.form.successText')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-foreground">
                      {t('contact.form.nameLabel')} <span className="text-accent-500">{t('contact.form.required')}</span>
                    </label>
                    <input
                      {...register('nom')}
                      type="text"
                      id="nom"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      placeholder={t('contact.form.namePlaceholder')}
                      aria-invalid={!!errors.nom}
                      aria-describedby={errors.nom ? 'nom-error' : undefined}
                    />
                    {errors.nom && (
                      <p id="nom-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.nom.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-foreground">
                      {t('contact.form.phoneLabel')} <span className="text-accent-500">{t('contact.form.required')}</span>
                    </label>
                    <input
                      {...register('telephone')}
                      type="tel"
                      id="telephone"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      placeholder={t('contact.form.phonePlaceholder')}
                      aria-invalid={!!errors.telephone}
                      aria-describedby={errors.telephone ? 'tel-error' : undefined}
                    />
                    {errors.telephone && (
                      <p id="tel-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.telephone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="formation" className="block text-sm font-medium text-foreground">
                      {t('contact.form.formationLabel')} <span className="text-accent-500">{t('contact.form.required')}</span>
                    </label>
                    <select
                      {...register('formation')}
                      id="formation"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      aria-invalid={!!errors.formation}
                      aria-describedby={errors.formation ? 'formation-error' : undefined}
                    >
                      <option value="">{t('contact.form.formationPlaceholder')}</option>
                      {formations.map((f) => {
                        const fKey = `formations.${f.slug}`
                        return (
                          <option key={f.slug} value={t(`${fKey}.title`)}>{t(`${fKey}.title`)}</option>
                        )
                      })}
                    </select>
                    {errors.formation && (
                      <p id="formation-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.formation.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      {t('contact.form.messageLabel')}
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 resize-y min-h-25 dark:bg-gray-800"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    ) : (
                      <Send size={18} aria-hidden="true" />
                    )}
                    {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    {t('contact.form.redirectNote')}
                  </p>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-extrabold text-foreground">
                {t('contact.info.title')}
              </h2>
              <div className="mt-6 space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const Wrapper = info.href ? 'a' : 'div'
                  const wrapperProps = info.href
                    ? { href: info.href, target: '_blank', rel: 'noopener noreferrer' as const }
                    : {}

                  return (
                    <Wrapper
                      key={info.title}
                      {...wrapperProps}
                      className="flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4 transition hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white dark:bg-primary-700">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-bold text-foreground">{t('contact.social.title')}</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {['Facebook', 'Instagram', 'YouTube', 'TikTok', 'X'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-primary-700 transition hover:bg-primary-800 hover:text-white dark:text-primary-300 dark:hover:bg-primary-700"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-bold text-foreground">{t('contact.map.title')}</h3>
                <div className="mt-3 overflow-hidden rounded-xl">
                  <iframe
                    title={t('contact.map.iframeTitle')}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6961979996663!2d9.7678!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112c4b3f1e1db%3A0x9e0f1e2e3a4b5c6d!2sDouala!5e0!3m2!1sfr!2scm!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-2 text-xs italic text-muted-foreground">
                  {t('contact.map.location')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
