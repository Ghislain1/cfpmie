import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Music2, Twitter } from 'lucide-react'

const socials = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'TikTok', icon: Music2, href: '#' },
  { name: 'X', icon: Twitter, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">CFPMIE</h3>
            <p className="mt-2 text-sm text-primary-200 dark:text-primary-300">
              Centre de Formation Professionnelle<br />Multi-Industriel de l&apos;Excellence
            </p>
            <p className="mt-1 text-xs italic text-primary-300 dark:text-primary-400">
              &ldquo;Une Formation &ndash; Un Métier &ndash; Un Emploi&rdquo;
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
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
              Nos formations
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/formations/construction-metallique" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  Construction Métallique
                </Link>
              </li>
              <li>
                <Link to="/formations/gestion-finances-management" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  Gestion des Finances &amp; Management
                </Link>
              </li>
              <li>
                <Link to="/formations/electricite" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">
                  Électricité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-200 dark:text-primary-300">
              <li>Chefferie Makepe Missoké, Douala</li>
              <li><a href="tel:+237659245821" className="transition hover:text-white">+237 659 245 821</a></li>
              <li><a href="tel:+237674234872" className="transition hover:text-white">+237 674 234 872</a></li>
              <li><a href="mailto:contact@cfpmie.com" className="transition hover:text-white">contact@cfpmie.com</a></li>
              <li><a href="https://www.formationcfpmie.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">www.formationcfpmie.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">Contact</Link></li>
              <li><a href="https://wa.me/237670109235" target="_blank" rel="noopener noreferrer" className="text-primary-200 transition hover:text-white dark:text-primary-300 dark:hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-700 pt-6 text-center text-xs text-primary-300 dark:border-gray-800 dark:text-primary-400">
          <p>&copy; {new Date().getFullYear()} CFPMIE &ndash; Tous droits réservés.</p>
          <p className="mt-1">
            Sous la tutelle du <strong className="text-primary-100 dark:text-primary-200">MINEFOP</strong> &ndash; Ministère de l&apos;Emploi et de la Formation Professionnelle, Cameroun
          </p>
        </div>
      </div>
    </footer>
  )
}
