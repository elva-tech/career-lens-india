import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Building2,
  ChevronDown,
  GitBranch,
  Map,
  MessageCircle,
  Mic,
  Presentation,
  UserCheck,
  Calendar,
  Monitor,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { CampusImpactSection } from '../components/campus-impact/CampusImpactSection'
import { HeroVisual } from '../components/shared/HeroVisual'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/shared/FadeIn'
import { Section, SectionHeader } from '../components/shared/Section'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'
import { useConsultation } from '../context/ConsultationContext'
import {
  STUDENT_PROBLEMS,
  STUDENT_STAGES,
  PROGRAMS,
  CAREER_JOURNEY,
  WHY_CHOOSE,
  WORKSHOPS,
  FAQS,
} from '../data/content'

const programIcons: Record<string, ReactNode> = {
  chart: <BarChart3 className="h-6 w-6" />,
  building: <Building2 className="h-6 w-6" />,
  'git-branch': <GitBranch className="h-6 w-6" />,
  map: <Map className="h-6 w-6" />,
  'user-check': <UserCheck className="h-6 w-6" />,
  message: <MessageCircle className="h-6 w-6" />,
  presentation: <Presentation className="h-6 w-6" />,
  mic: <Mic className="h-6 w-6" />,
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="pr-4 font-medium text-primary">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-sm leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ConsultCTA({ className = '' }: { className?: string }) {
  const { open } = useConsultation()
  return (
    <button onClick={open} className={`btn-cta ${className}`}>
      Book Free Career Consultation
      <ArrowRight className="h-4 w-4" />
    </button>
  )
}

export function HomePage() {
  const { open: openConsultation } = useConsultation()

  return (
    <div className="bg-page">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero */}
      <section id="home" className="hero-premium relative overflow-hidden pt-nav-offset pb-24 lg:pb-32">
        <div className="hero-mesh-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-secondary/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/85 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Career Intelligence Platform
            </span>
            <h1 className="mt-7 font-serif text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              See the career before you choose it.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Helping students make informed career decisions through industry mentorship, analytics, career roadmaps and practical guidance.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </a>
              <button onClick={openConsultation} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                Book Free Consultation
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      {/* Problems */}
      <Section variant="page" divider>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <SectionHeader title="Sound familiar?" description="These are the questions students ask every day." align="center" />
          </FadeIn>
          <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_PROBLEMS.map((problem) => (
              <StaggerItem key={problem}>
                <div className="card-premium group p-7 hover:-translate-y-1">
                  <div className="mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-accent to-accent/60 transition-all group-hover:w-12" />
                  <p className="text-base font-medium text-slate-700">&ldquo;{problem}&rdquo;</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-8 py-5 shadow-sm">
              <div className="h-10 w-1 rounded-full bg-gradient-to-b from-secondary to-primary" />
              <p className="text-lg font-medium text-primary">CareerLens India helps solve these problems.</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How We Help */}
      <Section id="help" variant="alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="How we help students" description="Guidance tailored to where you are in your journey." />
          </FadeIn>
          <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_STAGES.map((stage) => (
              <StaggerItem key={stage.title}>
                <div className="card-premium group flex h-full flex-col p-7 hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-primary">{stage.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{stage.description}</p>
                  <button onClick={openConsultation} className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Programs */}
      <Section id="programs" variant="page" divider>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <SectionHeader title="Our Programs" description="Comprehensive career intelligence for every stage." align="center" />
          </FadeIn>
          <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program) => (
              <StaggerItem key={program.title}>
                <div className="card-premium group p-6 text-center hover:-translate-y-1">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/8 to-secondary/10 text-primary transition-colors group-hover:from-secondary/15 group-hover:text-secondary">
                    {programIcons[program.icon]}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-800">{program.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="mt-12 text-center">
            <ConsultCTA />
          </FadeIn>
        </div>
      </Section>

      {/* Career Journey */}
      <section id="journey" className="bg-section-dark relative overflow-hidden py-24 lg:py-32">
        <div className="hero-mesh-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <SectionHeader title="Your Career Journey" description="CareerLens guides you at every step." align="center" dark />
          </FadeIn>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {CAREER_JOURNEY.map((step, i) => (
              <FadeIn key={step} delay={i * 0.05} className="flex items-center">
                <div className="group relative">
                  <div className="card-glass rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all group-hover:bg-white/15 md:px-5">
                    {step}
                  </div>
                  {i > 0 && i < 5 && (
                    <div className="absolute -top-6 left-1/2 hidden -translate-x-1/2 text-[10px] font-semibold text-secondary md:block">
                      CareerLens
                    </div>
                  )}
                </div>
                {i < CAREER_JOURNEY.length - 1 && (
                  <div className="mx-1 hidden text-white/25 md:mx-2 md:block">↓</div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <Section variant="alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <SectionHeader title="Why Choose CareerLens" align="center" />
          </FadeIn>
          <StaggerContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-premium h-full p-6 hover:-translate-y-0.5">
                  <div className="mb-3 h-1 w-6 rounded-full bg-secondary/60" />
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Campus Impact + CTA */}
      <CampusImpactSection limit={3} />

      {/* Workshops */}
      <Section id="workshops" variant="page" divider>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Upcoming Workshops" description="Stay tuned for upcoming sessions." />
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WORKSHOPS.map((workshop, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-premium p-6 hover:-translate-y-1">
                  <h3 className="font-semibold text-primary">{workshop.technology}</h3>
                  <div className="mt-4 space-y-2 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-secondary" />
                      {workshop.mode}
                    </div>
                  </div>
                  <Link to="/contact" className="mt-6 block w-full rounded-xl border border-primary/15 py-2.5 text-center text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white">
                    Register
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section id="vision" variant="alt">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <SectionHeader title="Our Vision" align="center" />
            <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-slate-700 md:text-3xl">
              &ldquo;We believe every student deserves access to the right career guidance regardless of background.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 text-sm font-medium text-secondary">Starting in Karnataka</span>
              <span className="rounded-full border border-primary/15 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">Expanding across India</span>
            </div>
            <div className="mt-10">
              <ConsultCTA />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="page" divider>
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <SectionHeader title="Frequently Asked Questions" align="center" />
          </FadeIn>
          <FadeIn className="mt-12 card-premium px-6 md:px-8">
            {FAQS.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </FadeIn>
          <FadeIn className="mt-10 text-center">
            <p className="text-sm text-muted">Still have questions?</p>
            <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
