import { Eye } from 'lucide-react'
import { useVisitCounter } from '../../context/VisitCounterContext'

export function VisitCounter() {
  const { totalVisits, status } = useVisitCounter()

  if (status === 'error') return null

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs text-white/50"
      title="Total site visits"
      aria-live="polite"
      aria-label={
        totalVisits !== null
          ? `${totalVisits.toLocaleString('en-IN')} total site visits`
          : 'Loading visit count'
      }
    >
      <Eye className="h-3.5 w-3.5 shrink-0 text-secondary/80" aria-hidden="true" />
      {status === 'loading' ? 'Loading visits…' : `${totalVisits?.toLocaleString('en-IN')} visits`}
    </span>
  )
}
