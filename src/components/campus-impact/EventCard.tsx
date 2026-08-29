import { motion } from 'framer-motion'
import { MapPin, Building2, CalendarDays } from 'lucide-react'
import { EventImageCarousel } from './EventImageCarousel'
import type { CampusEvent } from '../../data/campusImpact'

interface EventCardProps {
  event: CampusEvent
  index: number
  compact?: boolean
  variant?: 'light' | 'dark'
}

export function EventCard({ event, index, compact = false, variant = 'light' }: EventCardProps) {
  const imageRight = index % 2 === 1
  const dark = variant === 'dark'

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div
        className={`grid items-center gap-8 lg:gap-14 ${
          compact ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
        } ${imageRight && !compact ? 'lg:[&>*:first-child]:order-2' : ''}`}
      >
        <EventImageCarousel
          images={event.images}
          priority={index === 0}
          className={`aspect-[16/10] rounded-[1.125rem] transition-all duration-500 ${
            dark
              ? 'card-elevated group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]'
              : 'shadow-xl shadow-primary/5 group-hover:shadow-2xl group-hover:shadow-primary/10'
          } ${compact ? 'max-h-72' : 'min-h-[280px] lg:min-h-[360px]'}`}
        />

        <motion.div
          initial={{ opacity: 0, x: imageRight ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${
              dark ? 'bg-secondary/20 text-secondary' : 'bg-secondary/10 text-secondary'
            }`}
          >
            {event.eventType}
          </span>
          <h3 className={`mt-3 text-2xl font-bold tracking-tight md:text-3xl ${dark ? 'text-white' : 'text-primary'}`}>
            {event.topic}
          </h3>

          <div className={`mt-4 flex flex-col gap-2 text-sm ${dark ? 'text-white/70' : 'text-muted'}`}>
            <div className="flex items-start gap-2">
              <Building2 className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'text-secondary' : 'text-primary/60'}`} />
              <span className="font-medium">{event.institution}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className={`h-4 w-4 shrink-0 ${dark ? 'text-secondary' : 'text-primary/60'}`} />
              <span>{event.location}</span>
            </div>
            {event.date && (
              <div className="flex items-center gap-2">
                <CalendarDays className={`h-4 w-4 shrink-0 ${dark ? 'text-secondary' : 'text-primary/60'}`} />
                <span>{event.date}</span>
              </div>
            )}
          </div>

          <p className={`mt-5 leading-relaxed ${dark ? 'text-white/60' : 'text-muted'}`}>{event.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  dark
                    ? 'border border-white/15 bg-white/10 text-white/75'
                    : 'border border-border bg-white text-muted'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
