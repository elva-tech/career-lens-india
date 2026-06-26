import { Check } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { QUICK_RECAP } from '../../data/kcetCounselling'

export function QuickRecapSection() {
  return (
    <section id="quick-recap" className="section-pad bg-page section-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeader
              eyebrow="Quick Recap"
              title="Plan smart. Fill wisely."
              description="Keep these principles in mind before you lock your KCET option entry."
            />
            <p className="mt-6 text-lg font-semibold text-primary">More options, better chances.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="card-premium divide-y divide-border">
              {QUICK_RECAP.map((point) => (
                <li key={point} className="flex items-start gap-3 p-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
