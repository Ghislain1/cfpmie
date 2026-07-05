import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Moon, Sun, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import FireEffect from '@/components/common/FireEffect'
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

const neonGlow = '0 0 10px rgba(0, 255, 200, 0.3), 0 0 40px rgba(0, 255, 200, 0.1)'
const neonBorder = '0 0 15px rgba(0, 255, 200, 0.4), 0 0 45px rgba(0, 255, 200, 0.1)'

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 20 } },
}

const linkVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

const mobileMenuVariants = {
  closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
}

const mobileItemVariants = {
  closed: { opacity: 0, x: 50 },
  open: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.05, type: 'spring', stiffness: 200 } }),
}

const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 5px rgba(0, 255, 200, 0.2), 0 0 20px rgba(0, 255, 200, 0.05)',
      '0 0 15px rgba(0, 255, 200, 0.4), 0 0 45px rgba(0, 255, 200, 0.1)',
      '0 0 5px rgba(0, 255, 200, 0.2), 0 0 20px rgba(0, 255, 200, 0.05)',
    ],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

function NeonActiveIndicator() {
  return (
    <motion.div
      layoutId="activeIndicator"
      className="absolute -bottom-[3px] left-1/2 h-[3px] w-[calc(100%-16px)] -translate-x-1/2 rounded-full"
      style={{ boxShadow: neonBorder, backgroundColor: '#00e5bf' }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  )
}

function HamburgerButton({
  open,
  toggle,
  buttonRef,
}: {
  open: boolean
  toggle: () => void
  buttonRef: React.RefObject<HTMLButtonElement | null>
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className="relative flex size-10 items-center justify-center lg:hidden"
      onClick={toggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <div className="flex flex-col items-center justify-center gap-[5px]">
        <motion.span
          animate={open ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
          className="block h-[2px] rounded-full bg-cyan-300"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ boxShadow: '0 0 8px rgba(0, 255, 200, 0.6)' }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="block h-[2px] w-6 rounded-full bg-cyan-300"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ boxShadow: '0 0 8px rgba(0, 255, 200, 0.6)' }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 24 }}
          className="block h-[2px] rounded-full bg-cyan-300"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ boxShadow: '0 0 8px rgba(0, 255, 200, 0.6)' }}
        />
      </div>
    </button>
  )
}

export default function GhisHeader() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useTheme()
  const [scrolled, setScrolled] = useState(false)
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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-slate-900/70 shadow-lg shadow-cyan-500/5'
            : 'bg-slate-900/40',
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          borderBottom: '1px solid rgba(0, 255, 200, 0.12)',
        }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={glowPulse.animate}
          style={{ borderBottom: '1px solid transparent' }}
        />

        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label={t('header.ariaLabel')}
        >
          <Link to="/" className="group flex items-center gap-3" onClick={close} aria-label={t('header.homeAriaLabel')}>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex size-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10"
              style={{ boxShadow: neonGlow }}
            >
              <GraduationCap size={20} className="text-cyan-300" />
            </motion.div>
            <div className="flex flex-col">
              <span
                className="font-heading text-xl font-extrabold tracking-tight"
                style={{ color: '#00e5bf', textShadow: '0 0 20px rgba(0, 229, 191, 0.4)' }}
              >
                CFPMIE
              </span>
              <span className="text-[10px] leading-tight text-cyan-400/70">
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
                    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-cyan-200'
                      : 'text-slate-300 hover:text-cyan-300',
                  )
                }
              >
                {({ isActive }: { isActive: boolean }) => (
                  <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="relative inline-flex items-center gap-1.5"
                  >
                    {isActive && <NeonActiveIndicator />}
                    <span className="relative z-10" aria-current={isActive ? 'page' : undefined}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeGlow"
                        className="absolute inset-0 -z-10 rounded-lg"
                        style={{
                          background: 'rgba(0, 255, 200, 0.08)',
                          boxShadow: 'inset 0 0 20px rgba(0, 255, 200, 0.1)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            ))}
            <motion.a
              href="https://wa.me/237670109235"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 200, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="relative ml-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-cyan-500/20"
              style={{ boxShadow: '0 0 15px rgba(0, 255, 200, 0.2)' }}
            >
              <Phone size={14} aria-hidden="true" />
              {t('header.whatsapp')}
              <FireEffect />
            </motion.a>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 200, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              className="rounded-lg border border-cyan-400/20 px-2.5 py-1.5 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-500/10"
              aria-label={i18n.language === 'fr' ? 'English' : 'Français'}
            >
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setDark(!dark)}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 200, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              className="flex size-9 items-center justify-center rounded-lg border border-cyan-400/20 text-cyan-300 transition-colors hover:bg-cyan-500/10"
              aria-label={dark ? t('header.theme.light') : t('header.theme.dark')}
            >
              <motion.div
                key={dark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
              </motion.div>
            </motion.button>

            <HamburgerButton open={open} toggle={() => setOpen(!open)} buttonRef={buttonRef} />
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal={open}
            aria-label={t('header.ariaLabel')}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 z-40 flex h-full w-full max-w-xs flex-col gap-1 overflow-y-auto pt-20 sm:max-w-sm"
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderLeft: '1px solid rgba(0, 255, 200, 0.15)',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="flex flex-col gap-1 px-4 pb-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={i}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-lg px-4 py-3 text-sm font-medium transition-all',
                        isActive
                          ? 'border border-cyan-400/30 bg-cyan-500/10 text-cyan-200'
                          : 'text-slate-300 hover:border hover:border-cyan-400/20 hover:bg-cyan-500/5 hover:text-cyan-300',
                      )
                    }
                  >
                    {({ isActive }: { isActive: boolean }) => (
                      <span
                        aria-current={isActive ? 'page' : undefined}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={cn(
                            'h-1.5 w-1.5 rounded-full transition-all duration-300',
                            isActive ? 'bg-cyan-400' : 'bg-slate-600',
                          )}
                          style={isActive ? { boxShadow: '0 0 10px rgba(0, 255, 200, 0.8)' } : {}}
                        />
                        {link.label}
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href="https://wa.me/237670109235"
                target="_blank"
                rel="noopener noreferrer"
                variants={mobileItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                custom={navLinks.length}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cyan-500/20"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 200, 0.2)' }}
              >
                <Phone size={16} aria-hidden="true" />
                {t('header.whatsapp')}
                <FireEffect />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={close}
        />
      )}
    </>
  )
}
