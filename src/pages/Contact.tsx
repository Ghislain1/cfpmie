import { useState, useMemo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import SEO from '@/components/common/SEO'
import { formations } from '@/features/formations/formationData'

const schema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  telephone: z.string().min(6, 'Numéro de téléphone invalide'),
  formation: z.string().min(1, 'Veuillez sélectionner une formation'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  { icon: MapPin, title: 'Adresse', content: 'Chefferie Makepe Missoké, Douala, Cameroun' },
  { icon: Phone, title: 'Téléphone', content: '+237 659 245 821 / +237 674 234 872', href: 'tel:+237659245821' },
  { icon: MessageCircle, title: 'WhatsApp', content: '+237 670 109 235', href: 'https://wa.me/237670109235' },
  { icon: Mail, title: 'E-mail', content: 'contact@cfpmie.com', href: 'mailto:contact@cfpmie.com' },
  { icon: Globe, title: 'Site web', content: 'www.formationcfpmie.com', href: 'https://www.formationcfpmie.com' },
]

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = useCallback((data: FormData) => {
    setStatus('sending')
    const text = `Bonjour CFPMIE ! Je souhaite m'inscrire.%0A%0ANom : ${data.nom}%0ATéléphone : ${data.telephone}%0AFormation : ${data.formation}%0AMessage : ${data.message || ''}`

    try {
      window.open(`https://wa.me/237670109235?text=${text}`, '_blank')
      setStatus('success')
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }, [])

  const meta = useMemo(() => ({
    title: 'Contact & Inscription',
    description: 'Contactez le CFPMIE à Douala pour vous inscrire à nos formations professionnelles.',
  }), [])

  return (
    <>
      <SEO {...meta} />
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 py-16 sm:py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="orange">Inscriptions ouvertes</Badge>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-4 font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            Contact &amp; Inscription
          </motion.h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100 dark:text-gray-300">
            Prêt à rejoindre le CFPMIE ? Remplissez le formulaire ou contactez-nous directement.
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
                Formulaire d&apos;inscription
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez ce formulaire et nous vous recontacterons via WhatsApp.
              </p>

              {status === 'success' ? (
                <div className="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-8 text-center dark:border-primary-800 dark:bg-primary-900/20" role="status">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  <p className="mt-3 font-heading text-lg font-bold text-primary-800 dark:text-primary-200">
                    Message envoyé !
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Vous allez être redirigé vers WhatsApp pour confirmer.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-foreground">
                      Nom complet <span className="text-accent-500">*</span>
                    </label>
                    <input
                      {...register('nom')}
                      type="text"
                      id="nom"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      placeholder="Votre nom et prénom"
                      aria-invalid={!!errors.nom}
                      aria-describedby={errors.nom ? 'nom-error' : undefined}
                    />
                    {errors.nom && (
                      <p id="nom-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.nom.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-foreground">
                      Téléphone <span className="text-accent-500">*</span>
                    </label>
                    <input
                      {...register('telephone')}
                      type="tel"
                      id="telephone"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      placeholder="+237 6XX XXX XXX"
                      aria-invalid={!!errors.telephone}
                      aria-describedby={errors.telephone ? 'tel-error' : undefined}
                    />
                    {errors.telephone && (
                      <p id="tel-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.telephone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="formation" className="block text-sm font-medium text-foreground">
                      Formation souhaitée <span className="text-accent-500">*</span>
                    </label>
                    <select
                      {...register('formation')}
                      id="formation"
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 dark:bg-gray-800"
                      aria-invalid={!!errors.formation}
                      aria-describedby={errors.formation ? 'formation-error' : undefined}
                    >
                      <option value="">Sélectionnez une formation</option>
                      {formations.map((f) => (
                        <option key={f.slug} value={f.title}>{f.title}</option>
                      ))}
                    </select>
                    {errors.formation && (
                      <p id="formation-error" className="mt-1 text-xs text-accent-600 dark:text-accent-400" role="alert">{errors.formation.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 resize-y min-h-[100px] dark:bg-gray-800"
                      placeholder="Votre message (optionnel)"
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
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer via WhatsApp'}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Vous serez redirigé vers WhatsApp pour confirmer votre message.
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
                Nos coordonnées
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
                <h3 className="font-heading font-bold text-foreground">Suivez-nous</h3>
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
                <h3 className="font-heading font-bold text-foreground">Nous trouver</h3>
                <div className="mt-3 overflow-hidden rounded-xl">
                  <iframe
                    title="Localisation CFPMIE Douala"
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
                  Chefferie Makepe Missoké, Douala
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
