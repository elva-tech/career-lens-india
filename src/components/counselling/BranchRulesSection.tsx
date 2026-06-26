import { ArrowDown, Info } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { BRANCH_SELECTION_RULES } from '../../data/kcetCounselling'

function FlowColumn({
  title,
  subtitle,
  branches,
}: {
  title: string
  subtitle: string
  branches: readonly string[]
}) {
  return (
    <div className="card-premium flex flex-col p-6 md:p-8">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>
      <div className="mt-6 flex flex-col items-center gap-2">
        {branches.map((branch, i) => (
          <div key={branch} className="flex w-full flex-col items-center">
            <span className="w-full rounded-xl border border-border bg-white px-4 py-3 text-center text-sm font-semibold text-primary shadow-sm transition-colors hover:border-secondary/30 hover:bg-secondary/5">
              {branch}
            </span>
            {i < branches.length - 1 && <ArrowDown className="my-1 h-4 w-4 text-secondary/60" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function BranchRulesSection() {
  return (
    <section id="branch-rules" className="section-pad bg-page section-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Selection Rules"
            title="Branch selection rules"
            description="The branch order you follow depends on how strong the college is. In top colleges you can consider more branches; in others, stick to CS, IS and EC."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <FlowColumn
              title="Top colleges"
              subtitle={BRANCH_SELECTION_RULES.topCollegesNote}
              branches={BRANCH_SELECTION_RULES.topColleges}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <FlowColumn
              title="Other colleges"
              subtitle={BRANCH_SELECTION_RULES.belowTopCollegesNote}
              branches={BRANCH_SELECTION_RULES.belowTopColleges}
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl border border-secondary/25 bg-secondary/8 p-5 md:p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
            <p className="text-sm leading-relaxed text-gray-700">{BRANCH_SELECTION_RULES.note}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8">
          <p className="mb-4 text-sm font-semibold text-primary">Popular picks by city</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {BRANCH_SELECTION_RULES.locationPicks.map((item) => (
              <div key={item.location} className="card-premium p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.location}</p>
                <p className="mt-1 text-xs text-muted">{item.description}</p>
                <p className="mt-2 text-sm font-medium text-primary">{item.colleges}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
