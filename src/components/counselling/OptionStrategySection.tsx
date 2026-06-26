import { ArrowDown, CheckCircle2, XCircle } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { OPTION_STRATEGY } from '../../data/kcetCounselling'

export function OptionStrategySection() {
  const { correct, wrong } = OPTION_STRATEGY

  return (
    <section id="option-strategy" className="section-pad bg-page section-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Option Entry"
            title="Option filling strategy"
            description="The order you fill KCET options can significantly affect which seat you receive."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-[1.125rem] border border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-[var(--shadow-card)] md:p-8">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-wide">{correct.title}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-primary">{correct.subtitle}</h3>
              <div className="mt-6 flex flex-col items-center gap-2">
                {correct.steps.map((step, i) => (
                  <div key={step} className="flex w-full flex-col items-center">
                    <span className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800">
                      {step}
                    </span>
                    {i < correct.steps.length - 1 && (
                      <ArrowDown className="my-1 h-4 w-4 text-emerald-500/70" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-emerald-800/80">{correct.tip}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-[1.125rem] border border-red-200/80 bg-gradient-to-br from-red-50 to-white p-6 shadow-[var(--shadow-card)] md:p-8">
              <div className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-wide">{wrong.title}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-primary">{wrong.subtitle}</h3>
              <div className="mt-6 rounded-xl border border-red-200 bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600/70">Example to avoid</p>
                <p className="mt-2 font-mono text-sm text-gray-700">{wrong.example}</p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-red-800/80">{wrong.warning}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
