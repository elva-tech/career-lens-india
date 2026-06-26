import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { COLLEGE_GROUPS } from '../../data/kcetCounselling'

export function CollegePreferenceSection() {
  return (
    <section id="college-preference" className="section-pad bg-section-dark relative overflow-hidden">
      <div className="hero-mesh-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="College Preference"
            title="Where should you apply?"
            description="Grouped by preference level — not official rankings. Choose based on your rank, branch goals and practical factors."
            dark
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {COLLEGE_GROUPS.map((group) => (
            <StaggerItem key={group.id}>
              <motion.article
                whileHover={{ y: -4 }}
                className="card-glass flex h-full flex-col overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${group.accent} px-6 py-5`}>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{group.description}</p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-2">
                    {group.colleges.map((college) => (
                      <button
                        key={college.shortName}
                        type="button"
                        title={`${college.name} — ${college.branches.join(', ')}`}
                        className="group/chip rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 transition-all hover:border-secondary/40 hover:bg-secondary/20 hover:text-white"
                      >
                        {college.shortName}
                        <span className="ml-1.5 text-white/40 group-hover/chip:text-white/60">
                          {college.branches.join(' · ')}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-5 flex items-center gap-1.5 text-xs text-white/45">
                    <MapPin className="h-3.5 w-3.5" />
                    Individual college profiles coming soon
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15} className="mt-8 text-center">
          <p className="text-sm text-white/55">
            Branch matters more than college brand alone. Also consider location, fees and hostel facilities.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
