import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import {
  KCET_BRANCHES,
  KCET_CATEGORIES,
  KCET_LOCATIONS,
  type KcetBranch,
  type KcetCategory,
  type KcetLocation,
} from '../../data/kcetCounselling'

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20'

export function PreferenceBuilder() {
  const [rank, setRank] = useState('')
  const [category, setCategory] = useState<KcetCategory>('GM')
  const [branch, setBranch] = useState<KcetBranch>('Computer Science (CS)')
  const [location, setLocation] = useState<KcetLocation>('Bangalore')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="preference-builder" className="section-pad relative bg-section-alt">
      <div className="absolute inset-0 section-mesh pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase">Smart Counselling Tool</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-primary md:text-4xl">
              KCET Preference Builder
            </h2>
            <p className="mt-4 text-muted">
              Enter your details to preview your personalised preference list. Our recommendation engine integration
              is coming soon.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="card-premium overflow-hidden">
            <div className="border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Build your option list</p>
                  <p className="text-sm text-muted">Rank · Category · Branch · Location</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="kcet-rank" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                    KCET Rank *
                  </label>
                  <input
                    id="kcet-rank"
                    type="number"
                    min={1}
                    required
                    placeholder="e.g. 15000"
                    value={rank}
                    onChange={(e) => {
                      setRank(e.target.value)
                      setSubmitted(false)
                    }}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="kcet-category" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                    Category *
                  </label>
                  <select
                    id="kcet-category"
                    required
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value as KcetCategory)
                      setSubmitted(false)
                    }}
                    className={inputClass}
                  >
                    {KCET_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="kcet-branch" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                    Preferred Branch *
                  </label>
                  <select
                    id="kcet-branch"
                    required
                    value={branch}
                    onChange={(e) => {
                      setBranch(e.target.value as KcetBranch)
                      setSubmitted(false)
                    }}
                    className={inputClass}
                  >
                    {KCET_BRANCHES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="kcet-location" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
                    Preferred Location *
                  </label>
                  <select
                    id="kcet-location"
                    required
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value as KcetLocation)
                      setSubmitted(false)
                    }}
                    className={inputClass}
                  >
                    {KCET_LOCATIONS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                Generate Preference List
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border-t border-border bg-secondary/5"
                >
                  <div className="flex items-start gap-3 p-6 md:p-8">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <p className="font-semibold text-primary">Preference preview queued</p>
                      <p className="mt-1 text-sm text-muted">
                        Rank <span className="font-medium text-primary">{rank}</span> · {category} · {branch} ·{' '}
                        {location}. Our recommendation engine will generate your full option list here soon. For now,
                        explore the guide sections below or book a free consultation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
