import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { EventCard } from './EventCard'
import { PartnerWithSection } from './PartnerWithSection'
import { CAMPUS_IMPACT_HEADING, getFeaturedEvents } from '../../data/campusImpact'

interface CampusImpactSectionProps {
  showViewAll?: boolean
  limit?: number
}

export function CampusImpactSection({ showViewAll = true, limit }: CampusImpactSectionProps) {
  const events = getFeaturedEvents().slice(0, limit ?? getFeaturedEvents().length)

  return (
    <>
      <section id="campus-impact" className="bg-section-dark relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 hero-mesh-grid opacity-20" />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Learning in Action"
              title={CAMPUS_IMPACT_HEADING.title}
              description={CAMPUS_IMPACT_HEADING.subtitle}
              dark
            />
          </FadeIn>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} variant="dark" />
            ))}
          </div>

          {showViewAll && (
            <FadeIn className="mt-16 text-center">
              <Link
                to="/campus-impact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
              >
                View All Campus Impact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          )}
        </div>
      </section>

      <PartnerWithSection />
    </>
  )
}
