import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavLink as NavLinkType } from '@/types'

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
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navLinks: NavLinkType[] = [
    { to: '/', label: t('header.nav.home') },
    { to: '/formations/construction-metallique', label: t('header.nav.constructionMetallique') },
    { to: '/formations/gestion-finances-management', label: t('header.nav.gestionManagement') },
    { to: '/formations/electricite', label: t('header.nav.electricite') },
    { to: '/a-propos', label: t('header.nav.about') },
    { to: '/contact', label: t('header.nav.contact') },
  ]

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
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md dark:bg-gray-900/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label={t('header.ariaLabel')}>
        <Link to="/" className="flex items-center gap-3" onClick={close} aria-label={t('header.homeAriaLabel')}>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-extrabold tracking-tight text-primary-800 dark:text-primary-300">
              CFPMIE
            </span>
            <span className="text-[10px] leading-tight text-primary-600 dark:text-primary-400">
              {t('header.logoSubtitle')}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={close}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
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
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-600"
          >
            <Phone size={14} aria-hidden="true" />
            {t('header.whatsapp')}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
            className="rounded-lg px-2.5 py-1.5 text-xs font-bold text-primary-800 transition hover:bg-muted dark:text-primary-300 dark:hover:bg-gray-800"
            aria-label={i18n.language === 'fr' ? 'English' : 'Français'}
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>

          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 text-gray-600 transition hover:bg-muted dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label={dark ? t('header.theme.light') : t('header.theme.dark')}
          >
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            ref={buttonRef}
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? t('header.menu.close') : t('header.menu.open')}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>
    </header>

    <div
      ref={menuRef}
      id="mobile-menu"
      role="dialog"
      aria-modal={open}
      aria-label={t('header.ariaLabel')}
      className={cn(
        'lg:hidden',
        open
          ? 'fixed inset-0 top-16 z-[100] flex flex-col gap-1 overflow-y-auto bg-white p-6 pt-4 dark:bg-gray-900'
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
              'rounded-lg px-3 py-2 text-sm font-medium transition',
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
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600"
      >
        <Phone size={16} aria-hidden="true" />
        {t('header.whatsapp')}
      </a>
    </div>
    </>
  )
}
