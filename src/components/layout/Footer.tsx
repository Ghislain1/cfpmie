import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Music2, Twitter, Shield } from 'lucide-react'

const socials = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'TikTok', icon: Music2, href: '#' },
  { name: 'X', icon: Twitter, href: '#' },
]

interface FooterProps {
  onOpenDatenschutz?: () => void
}

export default function Footer({ onOpenDatenschutz }: FooterProps) {
  const { t } = useTranslation()
  return (
    <footer className="bg-primary-900 text-primary-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">CFPMIE</h3>
            <p className="mt-2 text-sm text-primary-200 dark:text-primary-300" dangerouslySetInnerHTML={{ __html: t('footer.description') }} />
            <p className="mt-1 text-xs italic text-primary-300 dark:text-primary-400">
              {t('footer.motto')}
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-200 transition hover:bg-primary-700 hover:text-white dark:bg-gray-800"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                )
              })}
              <button
                type="button"
                onClick={onOpenDatenschutz}
                aria-label={t('footer.datenschutz')}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-primary-200 transition hover:bg-primary-700 hover:text-white dark:bg-gray-800"
              >
                <Shield size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
              {t('footer.formations')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/formations/construction-metallique" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  {t('footer.constructionMetallique')}
                </Link>
              </li>
              <li>
                <Link to="/formations/gestion-finances-management" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  {t('footer.gestionManagement')}
                </Link>
              </li>
              <li>
                <Link to="/formations/electricite" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  {t('footer.electricite')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm text-primary-200 dark:text-primary-300">
              <li>{t('footer.address')}</li>
              <li><a href="tel:+237659245821" className="transition hover:text-white">+237 659 245 821</a></li>
              <li><a href="tel:+237674234872" className="transition hover:text-white">+237 674 234 872</a></li>
              <li><a href="mailto:contact@cfpmie.com" className="transition hover:text-white">contact@cfpmie.com</a></li>
              <li><a href="https://www.formationcfpmie.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">www.formationcfpmie.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">{t('footer.usefulLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">{t('footer.about')}</Link></li>
              <li><Link to="/contact" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">{t('footer.contact')}</Link></li>
              <li><a href="https://wa.me/237670109235" target="_blank" rel="noopener noreferrer" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">{t('footer.whatsapp')}</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDatenschutz}
                  className="cursor-pointer text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white"
                >
                  {t('footer.datenschutz')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-700 pt-6 text-center text-xs text-primary-300 dark:border-gray-800 dark:text-primary-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="mt-1">
            <Trans i18nKey="footer.minefop" components={{ 1: <strong className="text-primary-100 dark:text-primary-200" /> }} />
          </p>
        </div>
      </div>
    </footer>
  )
}
