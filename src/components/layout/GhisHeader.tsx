import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Phone, Moon, Sun, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import FireEffect from '@/components/common/FireEffect'
import { useTheme } from '@/hooks/useTheme'
import type { NavLink as NavLinkType } from '@/types'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemReveal: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 26 } },
}

const mobileContainer: Variants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.25 } },
}

const mobileOverlay: Variants = {
  closed: { opacity: 0, transition: { duration: 0.25 } },
  open: { opacity: 1, transition: { duration: 0.3 } },
}

const mobilePanel: Variants = {
  closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 350, damping: 32 } },
  open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 350, damping: 32 } },
}

const mobileLink: Variants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.06 + i * 0.04, type: 'spring', stiffness: 200 } }),
}

const particles = [
  { left: '10%', delay: '0s', size: 2 },
  { left: '30%', delay: '2s', size: 3 },
  { left: '55%', delay: '4s', size: 2 },
  { left: '75%', delay: '1.5s', size: 3 },
  { left: '90%', delay: '3.5s', size: 2 },
  { left: '20%', delay: '5s', size: 1 },
  { left: '65%', delay: '0.8s', size: 2 },
  { left: '45%', delay: '3s', size: 1 },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 animate-float rounded-full bg-primary-300/30 dark:bg-primary-400/20"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        backgroundSize: '256px 256px',
      }}
      aria-hidden="true"
    />
  )
}

function GlowDot({ className, size }: { className?: string; size?: string }) {
  return (
    <span
      className={cn('absolute rounded-full blur-sm animate-pulse', className)}
      style={{
        background: 'radial-gradient(circle, var(--color-primary-400) 0%, transparent 70%)',
        width: size ?? '3rem',
        height: size ?? '3rem',
      }}
    />
  )
}

function ActiveGlow() {
  return (
    <motion.span
      layoutId="activeGlow"
      className="absolute inset-0 rounded-xl"
      style={{
        background:
          'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-400) 50%, var(--color-primary-300) 100%)',
        opacity: 0.12,
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.3)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  )
}

function NavHoverGlow() {
  return (
    <motion.span
      layoutId="navHoverGlow"
      className="absolute inset-0 rounded-xl"
      style={{
        background:
          'linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-300) 50%, var(--color-primary-200) 100%)',
        opacity: 0.06,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  )
}

function Hamburger({ open, toggle, ref }: { open: boolean; toggle: () => void; ref: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={ref}
      type="button"
      className="relative flex size-10 items-center justify-center rounded-xl border border-white/30 bg-white/50 shadow-sm backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300 lg:hidden"
      onClick={toggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <motion.span
          animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-5 rounded-full bg-foreground dark:bg-white"
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        />
        <motion.span
          animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          className="block h-0.5 w-5 rounded-full bg-foreground dark:bg-white"
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-5 rounded-full bg-foreground dark:bg-white"
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
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
    if (!open) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        buttonRef.current?.focus()
      }
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) &&
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
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-700',
          scrolled
            ? 'shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : '',
        )}
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 animate-gradient-shift transition-opacity duration-700"
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(232,245,233,0.95) 0%, rgba(255,255,255,0.98) 50%, rgba(232,245,233,0.9) 100%)'
              : 'linear-gradient(135deg, rgba(232,245,233,0.85) 0%, rgba(255,255,255,0.95) 50%, rgba(200,230,201,0.8) 100%)',
          }}
        />
        <div
          className="absolute inset-0 animate-gradient-shift transition-opacity duration-700 dark:opacity-100 opacity-0"
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(13,59,15,0.9) 50%, rgba(15,23,42,0.98) 100%)'
              : 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(13,59,15,0.85) 50%, rgba(15,23,42,0.9) 100%)',
          }}
        />
        <NoiseOverlay />
        <FloatingParticles />

        {/* Glassmorphism overlay */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        />

        {/* Subtle gradient border glow */}
        <div className="absolute inset-0 rounded-b-2xl opacity-20 dark:opacity-30" style={{
          background: 'linear-gradient(180deg, var(--color-primary-400) 0%, transparent 40%)',
          mask: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMask: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Animated bottom border */}
        <div
          className={cn(
            'absolute bottom-0 right-0 left-0 h-[1px] transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="h-full w-full animate-gradient-shift animate-border-glow" style={{
            background: 'linear-gradient(90deg, transparent, var(--color-primary-400), var(--color-primary-500), var(--color-primary-400), transparent)',
            backgroundSize: '200% 100%',
          }} />
        </div>

        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
          aria-label={t('header.ariaLabel')}
        >
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5" onClick={close} aria-label={t('header.homeAriaLabel')}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.58, rotate: 5 }}
              className="relative flex size-9 items-center justify-center"
            >
              <img src="/pics/logo.svg" alt="CFPMIE" className="h-full w-full" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                CFPMIE
              </span>
              <span className="text-[9px] leading-tight text-muted-foreground tracking-[0.12em] uppercase">
                {t('header.logoSubtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hidden items-center lg:flex"
          >
            <div className="relative hidden items-center rounded-2xl border border-white/30 bg-white/30 px-1 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl lg:flex dark:border-white/[0.08] dark:bg-gray-900/30 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              {/* Neon border glow */}
              <div
                className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-30 dark:opacity-25"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary-300), transparent 40%, transparent 60%, var(--color-primary-400))',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={itemReveal}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={close}
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={({ isActive }) =>
                      cn(
                        'relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'text-primary-900 dark:text-primary-200'
                          : 'text-muted-foreground/80 hover:text-foreground',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-flex items-center gap-1.5">
                        {isActive && <ActiveGlow />}
                        {!isActive && hoveredLink === link.to && <NavHoverGlow />}
                        <span className="relative z-10">{link.label}</span>
                        {isActive && (
                          <>
                            <motion.span
                              className="absolute -bottom-[3px] left-[15%] h-0.5 w-[70%] rounded-full"
                              style={{
                                background: 'linear-gradient(90deg, var(--color-primary-400), var(--color-primary-500), var(--color-primary-400))',
                                boxShadow: '0 0 6px 1px var(--color-primary-400)',
                              }}
                              layoutId="activeUnderline"
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                            <GlowDot className="-left-2 size-2 opacity-70" size="0.75rem" />
                          </>
                        )}
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="ml-4 flex items-center gap-2 pl-4 border-l border-white/20 dark:border-white/10">
              <motion.button
                type="button"
                onClick={() => setDark(!dark)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="flex size-8 items-center justify-center rounded-xl border border-white/30 bg-white/50 text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300"
                aria-label={dark ? t('header.theme.light') : t('header.theme.dark')}
              >
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {dark ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
                </motion.div>
              </motion.button>
              <motion.button
                type="button"
                onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="rounded-xl border border-white/30 bg-white/50 px-2.5 py-1 text-xs font-bold text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300"
                aria-label={i18n.language === 'fr' ? 'English' : 'Français'}
              >
                {i18n.language === 'fr' ? 'EN' : 'FR'}
              </motion.button>
            </div>

            <motion.a
              href="https://wa.me/237670109235"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemReveal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative ml-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-primary-500/50 hover:shadow-xl dark:from-primary-500 dark:via-primary-400 dark:to-primary-500 dark:shadow-primary-400/30"
              style={{ backgroundSize: '200% 100%' }}
            >
              <GlowDot className="-left-1 size-12 opacity-60" />
              <Phone size={13} aria-hidden="true" />
              {t('header.whatsapp')}
              <FireEffect />
            </motion.a>
          </motion.div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <motion.button
              type="button"
              onClick={() => setDark(!dark)}
              whileTap={{ scale: 0.92 }}
              className="flex size-8 items-center justify-center rounded-xl border border-white/30 bg-white/50 text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300"
              aria-label={dark ? t('header.theme.light') : t('header.theme.dark')}
            >
              {dark ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
            </motion.button>
            <motion.button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
              whileTap={{ scale: 0.92 }}
              className="rounded-xl border border-white/30 bg-white/50 px-2.5 py-1 text-xs font-bold text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300"
              aria-label={i18n.language === 'fr' ? 'English' : 'Français'}
            >
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </motion.button>
            <Hamburger open={open} toggle={() => setOpen(!open)} ref={buttonRef} />
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileContainer}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40"
          >
            <motion.div
              variants={mobileOverlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
              onClick={close}
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal={open}
              aria-label={t('header.ariaLabel')}
              variants={mobilePanel}
              className="absolute top-0 right-0 flex h-full w-full max-w-sm flex-col border-l border-white/20 bg-white/80 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/5 dark:bg-gray-950/80"
            >
              <div className="flex items-center justify-between border-b border-white/20 px-6 pt-6 pb-3 dark:border-white/5">
                <span className="text-[11px] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {t('header.ariaLabel')}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="flex size-8 items-center justify-center rounded-xl border border-white/30 bg-white/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary-400/50 hover:text-primary-700 dark:border-white/10 dark:bg-gray-800/50 dark:hover:border-primary-500/50 dark:hover:text-primary-300"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      variants={mobileLink}
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
                            'group relative flex items-center justify-between overflow-hidden rounded-xl px-4 py-3.5 text-sm font-medium transition-all',
                            isActive
                              ? 'text-primary-800 dark:text-primary-300'
                              : 'text-foreground hover:bg-white/50 dark:hover:bg-white/5',
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {isActive && (
                              <motion.span
                                layoutId="mobileActiveBg"
                                className="absolute inset-0 bg-linear-to-r from-primary-50/80 to-primary-50/30 dark:from-primary-900/50 dark:to-primary-900/20"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              />
                            )}
                            <span className="relative flex items-center gap-3">
                              <span
                                className={cn(
                                  'h-1.5 w-1.5 rounded-full transition-all duration-300',
                                  isActive
                                    ? 'bg-primary-500 shadow-[0_0_10px_rgba(76,175,80,0.6)] scale-100'
                                    : 'bg-border scale-0',
                                )}
                              />
                              {link.label}
                            </span>
                            <ChevronRight
                              size={14}
                              className={cn(
                                'relative transition-all duration-300',
                                isActive
                                  ? 'translate-x-0 text-primary-500 opacity-100'
                                  : '-translate-x-2 opacity-0',
                              )}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/20 px-4 pt-4 pb-6 dark:border-white/5">
                <motion.a
                  href="https://wa.me/237670109235"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={mobileLink}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={navLinks.length}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/50 dark:from-primary-500 dark:via-primary-400 dark:to-primary-500 dark:shadow-primary-400/30"
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <GlowDot className="-left-1 size-14 opacity-60" />
                  <Phone size={15} aria-hidden="true" />
                  {t('header.whatsapp')}
                  <FireEffect />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[57px]" aria-hidden="true" />
    </>
  )
}
