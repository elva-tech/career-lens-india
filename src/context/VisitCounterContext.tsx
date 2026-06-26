import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { recordPageVisit } from '../lib/visitCounter'

type VisitCounterStatus = 'loading' | 'ready' | 'error'

interface VisitCounterContextValue {
  totalVisits: number | null
  status: VisitCounterStatus
}

const VisitCounterContext = createContext<VisitCounterContextValue>({
  totalVisits: null,
  status: 'loading',
})

export function VisitCounterProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [totalVisits, setTotalVisits] = useState<number | null>(null)
  const [status, setStatus] = useState<VisitCounterStatus>('loading')

  useEffect(() => {
    let active = true
    setStatus('loading')

    recordPageVisit(pathname).then((total) => {
      if (!active) return

      if (total === null) {
        setStatus('error')
        return
      }

      setTotalVisits(total)
      setStatus('ready')
    })

    return () => {
      active = false
    }
  }, [pathname])

  return (
    <VisitCounterContext.Provider value={{ totalVisits, status }}>
      {children}
    </VisitCounterContext.Provider>
  )
}

export function useVisitCounter() {
  return useContext(VisitCounterContext)
}
