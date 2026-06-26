import {
  ArrowRight,
  BarChart3,
  Building2,
  GitBranch,
  ListChecks,
  Route,
  Search,
  type LucideIcon,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../shared/FadeIn'
import { SectionHeader } from '../shared/Section'
import { FEATURED_RESOURCES } from '../../data/kcetCounselling'

const iconMap: Record<string, LucideIcon> = {
  'list-checks': ListChecks,
  'git-branch': GitBranch,
  building: Building2,
  route: Route,
  'bar-chart': BarChart3,
  search: Search,
}

export function FeaturedResources() {
  return (
    <section id="featured-resources" className="section-pad bg-page section-mesh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="Knowledge Hub"
            title="Featured Resources"
            description="Everything you need to plan your KCET counselling — structured, clear and actionable."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_RESOURCES.map((resource) => {
            const Icon = iconMap[resource.icon] ?? ListChecks
            return (
              <StaggerItem key={resource.id}>
                <a
                  href={resource.anchor}
                  className="card-premium group flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-secondary/15 group-hover:text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{resource.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{resource.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
