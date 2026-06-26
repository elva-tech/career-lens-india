import { ArrowRight, Download, ExternalLink, Shield } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { useConsultation } from '../../context/ConsultationContext'
import { COUNSELLING_DISCLAIMER, OFFICIAL_KEA_RESOURCES } from '../../data/kcetCounselling'

export function DownloadGuideSection() {
  const { open } = useConsultation()

  return (
    <section id="download-guide" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="cta-gradient relative overflow-hidden rounded-[1.5rem] px-8 py-12 md:px-12 md:py-16">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">Complete Guide</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-white md:text-4xl">
                Need the complete printable guide?
              </h2>
              <p className="mt-4 text-white/75">
                Download the full KCET preference reference or speak with our counsellors for personalised guidance
                based on your rank and goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  onClick={() => window.print()}
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={open}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function KeaResourcesSection() {
  return (
    <section id="kea-resources" className="bg-section-alt pb-8 pt-4 lg:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-[1.125rem] border border-secondary/25 bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
            <h2 className="font-serif text-2xl text-primary">{OFFICIAL_KEA_RESOURCES.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{OFFICIAL_KEA_RESOURCES.description}</p>
            <p className="mt-2 text-sm text-muted">
              Students should always verify the following using the Karnataka Examinations Authority (KEA) website:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {OFFICIAL_KEA_RESOURCES.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.hint}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-page px-4 py-3 text-sm text-gray-700 transition-all hover:border-secondary/40 hover:bg-secondary/5 hover:text-primary"
                  >
                    <span className="flex items-center gap-2.5">
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-secondary transition-transform group-hover:scale-110" />
                      {item.label}
                    </span>
                    <span className="text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                      Open
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              KEA publishes seat matrices, cutoffs and schedules as notifications on the official portal. Links open
              the relevant KEA page in a new tab.
            </p>
            <a
              href={OFFICIAL_KEA_RESOURCES.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Visit KEA official website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function DisclaimerSection() {
  return (
    <section id="disclaimer" className="bg-section-alt pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="card-premium p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary">{COUNSELLING_DISCLAIMER.title}</h2>
            <ul className="mt-5 space-y-3.5">
              {COUNSELLING_DISCLAIMER.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/10 bg-primary/5 p-5">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary/70" />
              <p className="text-sm leading-relaxed text-gray-700">{COUNSELLING_DISCLAIMER.affiliation}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
