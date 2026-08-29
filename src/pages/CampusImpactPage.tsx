import { useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'
import { FadeIn } from '../components/shared/FadeIn'
import { EventCard } from '../components/campus-impact/EventCard'
import { PartnerWithSection } from '../components/campus-impact/PartnerWithSection'
import { Pagination } from '../components/campus-impact/Pagination'
import {
  CAMPUS_IMPACT_HEADING,
  CAMPUS_IMPACT_PAGE_SIZE,
  FUTURE_COLLABORATIONS,
  getPaginatedEvents,
  getSortedEvents,
  getTimelineEvents,
  type CampusImpactFilter,
} from '../data/campusImpact'

const FILTERS: { id: CampusImpactFilter; label: string }[] = [
  { id: 'all', label: 'All Sessions' },
  { id: 'career', label: 'Career Guidance' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'lecture', label: 'Guest Lectures' },
]

function parseFilter(value: string | null): CampusImpactFilter {
  if (value === 'career' || value === 'workshop' || value === 'lecture') return value
  return 'all'
}

function HeroBanner() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 120])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const latest = getSortedEvents()[0]
  const heroImage = latest?.images[0]

  return (
    <section className="hero-premium relative flex min-h-[50vh] items-end overflow-hidden lg:min-h-[55vh]">
      <div className="hero-mesh-grid pointer-events-none absolute inset-0 opacity-30" />
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroImage?.src ?? '/images/campus-impact/big-data-guest-lecture-1.png'}
          alt={heroImage?.alt ?? 'CareerLens India conducting a session at a campus'}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/85 to-primary/50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative w-full pt-nav-offset pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase">Industry Connect</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              Campus Impact
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {CAMPUS_IMPACT_HEADING.subtitle}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-gray-50"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Timeline() {
  const events = getTimelineEvents()

  return (
    <section className="border-b border-border bg-section-alt py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-2xl tracking-tight text-primary md:text-3xl">Across Campuses</h2>
          <p className="mt-2 text-gray-500">Our journey of industry connect with educational institutions.</p>
        </FadeIn>

        <div className="relative mt-12">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-secondary via-primary to-accent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-10">
            {events.map((event, i) => (
              <FadeIn key={event.id} delay={i * 0.08}>
                <div className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <span className="text-xs font-semibold text-secondary uppercase">{event.eventType}</span>
                    <h3 className="mt-1 font-semibold text-primary">{event.topic}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {event.institution}, {event.location}
                      {event.date ? ` · ${event.date}` : ''}
                    </p>
                  </div>
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-secondary/20 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <span className="text-xs font-semibold text-secondary uppercase">{event.eventType}</span>
                    <h3 className="mt-1 font-semibold text-primary">{event.topic}</h3>
                    <p className="mt-1 text-sm text-gray-500">{event.institution}</p>
                  </div>
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CampusImpactPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = parseFilter(searchParams.get('type'))
  const requestedPage = Number(searchParams.get('page') || '1') || 1

  const { events, total, totalPages, currentPage } = useMemo(
    () => getPaginatedEvents(requestedPage, filter),
    [requestedPage, filter],
  )

  useEffect(() => {
    document.title = 'Campus Impact — CareerLens India'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'CareerLens India campus impact — guest lectures, industrial workshops and career programs at engineering colleges across Karnataka.',
      )
    }
    return () => {
      document.title = 'CareerLens India — See the career before you choose it'
    }
  }, [])

  useEffect(() => {
    if (requestedPage !== currentPage) {
      const next = new URLSearchParams(searchParams)
      if (currentPage <= 1) next.delete('page')
      else next.set('page', String(currentPage))
      setSearchParams(next, { replace: true })
    }
  }, [requestedPage, currentPage, searchParams, setSearchParams])

  const updateParams = (nextPage: number, nextFilter: CampusImpactFilter) => {
    const next = new URLSearchParams()
    if (nextFilter !== 'all') next.set('type', nextFilter)
    if (nextPage > 1) next.set('page', String(nextPage))
    setSearchParams(next)
    document.getElementById('campus-sessions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-page">
      <Navbar />
      <WhatsAppFloat />
      <HeroBanner />
      <Timeline />

      <section id="campus-sessions" className="bg-section-dark relative overflow-hidden py-16 lg:py-24">
        <div className="hero-mesh-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-8">
            <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">Campus Sessions</h2>
            <p className="mt-2 text-white/60">
              {total} {total === 1 ? 'session' : 'sessions'} across schools and colleges.
            </p>
          </FadeIn>

          <div className="mb-14 flex flex-wrap gap-2">
            {FILTERS.map((item) => {
              const active = item.id === filter
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => updateParams(1, item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? 'bg-white text-primary'
                      : 'border border-white/20 bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {events.length === 0 ? (
            <p className="text-white/60">No sessions in this category yet.</p>
          ) : (
            <div className="space-y-20 lg:space-y-28">
              {events.map((event, i) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={(currentPage - 1) * CAMPUS_IMPACT_PAGE_SIZE + i}
                  variant="dark"
                />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => updateParams(page, filter)}
          />
        </div>
      </section>

      <section className="bg-section-alt py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-primary">{FUTURE_COLLABORATIONS.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{FUTURE_COLLABORATIONS.description}</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="card-premium p-8">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="font-semibold">Topics We Cover</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {FUTURE_COLLABORATIONS.areas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Start a collaboration <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnerWithSection />
      <Footer />
    </div>
  )
}
