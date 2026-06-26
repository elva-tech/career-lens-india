import { motion } from 'framer-motion'
import { Map, Users, GitBranch, Presentation, GraduationCap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: Map, label: 'Career Roadmaps' },
  { icon: Users, label: '1:1 Mentorship' },
  { icon: GitBranch, label: 'Branch Analytics' },
  { icon: Presentation, label: 'Campus Workshops' },
]

const journeySteps = ['10th', 'PUC', 'College', 'Branch', 'Career']

export function HeroVisual({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-full max-w-md lg:max-w-none ${className}`}
    >
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
        {/* Photo */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src="/images/campus-impact/web-dev-workshop-1.png"
            alt="CareerLens India conducting an industry workshop at an engineering college"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[11px] font-semibold tracking-wider text-secondary uppercase">Campus Impact</p>
            <p className="mt-0.5 text-sm font-medium text-white">Real workshops. Real colleges.</p>
          </div>
        </div>

        {/* Services — clean grid, no overlap */}
        <div className="grid grid-cols-2 gap-px bg-border">
          {services.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2.5 bg-white px-4 py-3.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold leading-tight text-primary">{item.label}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Journey — separated row */}
        <div className="border-t border-border bg-section-alt px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-secondary" />
              <span className="text-xs font-semibold text-primary">Your Career Journey</span>
            </div>
            <Link
              to="/campus-impact"
              className="flex items-center gap-0.5 text-[11px] font-medium text-secondary hover:text-primary"
            >
              See impact <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="relative flex items-start justify-between px-1">
            <div className="absolute top-3.5 right-6 left-6 h-px bg-border" aria-hidden="true" />
            {journeySteps.map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ring-4 ring-section-alt ${
                    i < 3 ? 'bg-secondary text-white' : 'bg-white text-primary border border-border'
                  }`}
                >
                  {i + 1}
                </span>
                <span className="mt-2 text-[10px] font-medium text-muted">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
