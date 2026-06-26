import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'
import { FadeIn } from '../components/shared/FadeIn'
import { PreferenceBuilder } from '../components/counselling/PreferenceBuilder'
import { FeaturedResources } from '../components/counselling/FeaturedResources'
import { BranchPrioritySection } from '../components/counselling/BranchPrioritySection'
import { BranchRulesSection } from '../components/counselling/BranchRulesSection'
import { CollegePreferenceSection } from '../components/counselling/CollegePreferenceSection'
import { OptionStrategySection } from '../components/counselling/OptionStrategySection'
import { RankGuideSection } from '../components/counselling/RankGuideSection'
import { QuickRecapSection } from '../components/counselling/QuickRecapSection'
import { DownloadGuideSection, KeaResourcesSection, DisclaimerSection } from '../components/counselling/DownloadGuideSection'
import { useConsultation } from '../context/ConsultationContext'

export function CounsellingPage() {
  const { open: openConsultation } = useConsultation()

  useEffect(() => {
    document.title = 'KCET Counselling Guide — CareerLens India'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'KCET counselling guide by CareerLens India — branch priority, college preference, option entry strategy and rank-wise recommendations for engineering admissions.',
      )
    }
    return () => {
      document.title = 'CareerLens India — See the career before you choose it'
    }
  }, [])

  return (
    <div className="bg-page">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="hero-premium relative overflow-hidden pt-nav-offset pb-20 lg:pb-28">
        <div className="hero-mesh-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase">Engineering Admissions</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              KCET Counselling Guide
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Make informed college and branch decisions with CareerLens India&apos;s expert counselling resources.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#preference-builder"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Guide
                <ArrowDown className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {[
              { value: '21+', label: 'Colleges mapped' },
              { value: '5', label: 'Branch priorities' },
              { value: '5', label: 'Rank bands covered' },
            ].map((stat) => (
              <div key={stat.label} className="card-glass px-5 py-4 text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <PreferenceBuilder />
      <FeaturedResources />
      <BranchPrioritySection />
      <BranchRulesSection />
      <CollegePreferenceSection />
      <OptionStrategySection />
      <RankGuideSection />
      <QuickRecapSection />
      <DownloadGuideSection />
      <KeaResourcesSection />
      <DisclaimerSection />

      <Footer />
    </div>
  )
}
