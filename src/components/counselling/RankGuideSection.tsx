import { GraduationCap, Lightbulb, Target } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { RANK_GUIDE } from '../../data/kcetCounselling'

export function RankGuideSection() {
  return (
    <section id="rank-guide" className="section-pad bg-section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Rank-wise Guide"
            title="What to expect at your rank"
            description="Realistic college and branch expectations based on typical KCET counselling patterns."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {RANK_GUIDE.map((item) => (
            <StaggerItem key={item.range}>
              <article className="card-premium flex h-full flex-col p-6 transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-2xl font-bold text-primary">{item.range}</span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    {item.label}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary/50" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Likely colleges</p>
                      <p className="mt-1 text-sm text-gray-700">{item.colleges}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-primary/50" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Expected branches</p>
                      <p className="mt-1 text-sm text-gray-700">{item.branches}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-border pt-4">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">Strategy</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">{item.strategy}</p>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
