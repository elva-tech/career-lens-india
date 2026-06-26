import { Link } from 'react-router-dom'
import { Logo } from '../shared/Logo'
import { VisitCounter } from '../shared/VisitCounter'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../data/content'

export function Footer() {
  const FooterLink = ({ href, label }: { href: string; label: string }) => {
    const isRoute = href.startsWith('/') && !href.startsWith('/#')
    const cls = 'text-sm text-white/55 transition-colors hover:text-white'
    if (isRoute) {
      return <Link to={href} className={cls}>{label}</Link>
    }
    return <a href={href} className={cls}>{label}</a>
  }

  return (
    <footer className="footer-premium relative overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-flex rounded-2xl bg-white px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
              <Logo size="footer" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Career Intelligence & Employability Platform helping students across Karnataka make informed career decisions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/85">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/85">Social</h4>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-divider mt-12 opacity-25" />
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-center text-xs text-white/35 sm:text-left">
              &copy; {new Date().getFullYear()} CareerLens India. All rights reserved.
            </p>
            <VisitCounter />
          </div>
          <a
            href="https://elvatech.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-100"
            aria-label="Elva Tech — Elevating Value"
          >
            <img
              src="/images/elva-tech-logo.png"
              alt="Elva Tech"
              className="h-14 w-auto opacity-90 sm:h-16"
              draggable={false}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
