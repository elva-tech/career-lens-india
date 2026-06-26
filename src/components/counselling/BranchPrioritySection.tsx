import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { BRANCH_PRIORITIES } from '../../data/kcetCounselling'

export function BranchPrioritySection() {
  return (
    <section id="branch-priority" className="section-pad bg-section-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Branch Priority"
            title="Which branch should you choose?"
            description="Priority order based on industry demand, placement trends and long-term career flexibility."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BRANCH_PRIORITIES.map((branch) => (
            <StaggerItem key={branch.code}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card-premium group h-full p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    Priority {branch.priority}
                  </span>
                  <span className="rounded-lg bg-secondary/10 px-2.5 py-1 text-xs font-bold text-secondary">
                    {branch.code}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">{branch.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{branch.explanation}</p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {branch.scenarios.map((scenario) => (
                    <li key={scenario} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {scenario}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
