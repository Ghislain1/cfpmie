import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavLink as NavLinkType } from '@/types'

const navLinks: NavLinkType[] = [
  { to: '/', label: 'Accueil' },
  { to: '/formations/construction-metallique', label: 'Construction Métallique' },
  { to: '/formations/gestion-finances-management', label: 'Gestion & Management' },
  { to: '/formations/electricite', label: 'Électricité' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return [dark, setDark] as const
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        buttonRef.current?.focus()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md dark:bg-gray-900/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-3" onClick={close} aria-label="Accueil CFPMIE">
          <div className="flex flex-col">
            <span className="font-heading text-xl font-extrabold tracking-tight text-primary-800 dark:text-primary-300">
              CFPMIE
            </span>
            <span className="text-[10px] leading-tight text-primary-600 dark:text-primary-400">
              Sous tutelle du MINEFOP
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 text-gray-600 transition hover:bg-muted dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            ref={buttonRef}
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal={open}
          aria-label="Navigation"
          className={cn(
            'lg:flex lg:items-center lg:gap-0',
            open
              ? 'fixed inset-0 top-16 z-40 flex flex-col gap-1 overflow-y-auto bg-white p-6 pt-4 dark:bg-gray-900'
              : 'hidden',
          )}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition lg:px-4',
                  isActive
                    ? 'bg-primary-800 text-white dark:bg-primary-700'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-800 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary-300',
                )
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <span aria-current={isActive ? 'page' : undefined}>{link.label}</span>
              )}
            </NavLink>
          ))}
          <a
            href="https://wa.me/237670109235"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600 lg:ml-4 lg:mt-0"
          >
            <Phone size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  )
}
