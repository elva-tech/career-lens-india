import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '../shared/Logo'
import { useConsultation } from '../../context/ConsultationContext'
import { NAV_LINKS } from '../../data/content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { open: openConsultation } = useConsultation()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const resolveHref = (href: string) => {
    if (href.startsWith('#') && !isHome) return `/${href}`
    return href
  }

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const resolved = resolveHref(href)
    const isRoute = resolved.startsWith('/') && !resolved.startsWith('/#')
    const isActive = resolved === location.pathname

    const className = `text-[13px] font-medium transition-colors ${
      isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
    }`

    if (isRoute) {
      return (
        <Link to={resolved} className={className} onClick={() => setOpen(false)}>
          {label}
        </Link>
      )
    }

    return (
      <a href={resolved} className={className} onClick={() => setOpen(false)}>
        {label}
      </a>
    )
  }

  return (
    <header className="nav-bar fixed inset-x-0 top-0 z-50">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
        style={{ minHeight: 'var(--nav-height)' }}
      >
        <Link to="/" className="flex shrink-0 items-center py-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <button onClick={openConsultation} className="btn-primary text-[13px] !py-2.5 !px-4">
            Book Free Consultation
          </button>
        </div>

        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary hover:bg-section-alt lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-page lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="rounded-xl px-3 py-2.5 hover:bg-section-alt">
                  <NavItem href={link.href} label={link.label} />
                </div>
              ))}
              <button
                onClick={() => {
                  setOpen(false)
                  openConsultation()
                }}
                className="mt-2 w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
