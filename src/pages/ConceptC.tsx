import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
  Menu,
  X,
  Calendar,
  Monitor,
  GraduationCap,
  BookOpen,
  Code2,
  Briefcase,
  Users,
  Heart,
  Compass,
} from 'lucide-react'
import { Logo } from '../components/shared/Logo'
import { HeroIllustration } from '../components/shared/HeroIllustration'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/shared/FadeIn'
import { useScrolled } from '../hooks/useScrolled'
import {
  NAV_LINKS,
  STUDENT_PROBLEMS,
  STUDENT_STAGES,
  PROGRAMS,
  CAREER_JOURNEY,
  WHY_CHOOSE,
  WORKSHOPS,
  FAQS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
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

const stageIcons = [GraduationCap, BookOpen, Code2, Briefcase, Users, Building2]
const stageColors = [
  'bg-blue-50 text-primary border-blue-100',
  'bg-teal-50 text-secondary border-teal-100',
  'bg-orange-50 text-accent border-orange-100',
  'bg-purple-50 text-purple-600 border-purple-100',
  'bg-pink-50 text-pink-600 border-pink-100',
  'bg-indigo-50 text-indigo-600 border-indigo-100',
]

function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : 'bg-white/50'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-all hover:bg-secondary/10 hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/" className="text-xs text-gray-400 hover:text-secondary">
            Concepts
          </Link>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-secondary to-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-secondary/25 transition-all hover:shadow-lg hover:brightness-110"
          >
            Book Free Career Consultation
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-secondary/5">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-secondary to-primary px-4 py-3 text-center text-sm font-semibold text-white">
                Book Free Career Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-5 text-left">
        <span className="pr-4 font-medium text-primary">{question}</span>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${open ? 'bg-secondary text-white' : 'bg-surface text-gray-400'}`}>
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ConceptC() {
  return (
    <div className="bg-surface-warm">
      <Navbar />

      {/* Hero — centered friendly */}
      <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="gradient-mesh-warm absolute inset-0" />
        <div className="pointer-events-none absolute top-32 left-[15%] animate-float">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Compass className="h-7 w-7 text-secondary" />
          </div>
        </div>
        <div className="pointer-events-none absolute top-48 right-[12%] animate-float-slow" style={{ animationDelay: '2s' }}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 shadow-md">
            <Heart className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-secondary shadow-sm">
                <GraduationCap className="h-4 w-4" />
                For students across Karnataka
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
                See the career before you choose it.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500">
                Helping students make informed career decisions through industry mentorship, analytics, career roadmaps and practical guidance.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Explore Programs
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-white px-7 py-3.5 text-sm font-semibold text-secondary transition-all hover:bg-secondary/5">
                  Book Free Consultation
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-12">
            <div className="mx-auto max-w-lg rounded-3xl bg-white p-6 shadow-xl shadow-primary/5 lg:max-w-2xl">
              <HeroIllustration className="w-full" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problems — speech bubbles */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">We hear you</h2>
            <p className="mt-3 text-gray-500">These questions come up all the time.</p>
          </FadeIn>
          <StaggerContainer className="mt-12 space-y-4">
            {STUDENT_PROBLEMS.map((problem, i) => (
              <StaggerItem key={problem}>
                <div className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-md rounded-3xl px-6 py-4 shadow-sm ${
                    i % 2 === 0
                      ? 'rounded-bl-md bg-white'
                      : 'rounded-br-md bg-primary text-white'
                  }`}>
                    <p className={`text-sm font-medium ${i % 2 === 0 ? 'text-gray-700' : 'text-white/90'}`}>
                      &ldquo;{problem}&rdquo;
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="mt-12 text-center">
            <div className="inline-block rounded-3xl bg-gradient-to-r from-secondary/10 to-primary/10 px-8 py-5">
              <p className="text-lg font-semibold text-primary">
                CareerLens India is here to help. 💡
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Help — colorful cards */}
      <section id="help" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Where are you right now?</h2>
            <p className="mt-3 text-gray-500">Pick your stage — we&apos;ll guide you from there.</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENT_STAGES.map((stage, i) => {
              const Icon = stageIcons[i]
              return (
                <FadeIn key={stage.title} delay={i * 0.08}>
                  <div className={`group cursor-pointer rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${stageColors[i]}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{stage.title}</h3>
                    <p className="mt-2 text-sm opacity-80">{stage.description}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs — pill grid */}
      <section id="programs" className="rounded-t-[3rem] bg-white py-20 shadow-[0_-10px_40px_rgba(25,58,122,0.05)] lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Programs</h2>
            <p className="mt-3 text-gray-500">Pick what fits your journey.</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.05}>
                <div className="group rounded-3xl bg-surface p-6 text-center transition-all hover:bg-secondary/5 hover:shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm transition-transform group-hover:scale-110">
                    {programIcons[program.icon]}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-800">{program.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey — winding path */}
      <section id="journey" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Your Career Journey</h2>
            <p className="mt-3 text-gray-500">CareerLens walks with you every step.</p>
          </FadeIn>
          <div className="relative mt-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-1 lg:-translate-x-1/2 lg:bg-gradient-to-b lg:from-secondary lg:via-primary lg:to-accent lg:opacity-20" />
            <div className="space-y-6">
              {CAREER_JOURNEY.map((step, i) => (
                <FadeIn key={step} delay={i * 0.05}>
                  <div className={`flex items-center gap-4 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`hidden lg:block lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      {(i === 1 || i === 4 || i === 7) && (
                        <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                          ✦ CareerLens
                        </span>
                      )}
                    </div>
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-primary shadow-md ring-4 ring-secondary/20">
                      {i + 1}
                    </div>
                    <div className={`rounded-2xl bg-white px-5 py-3 shadow-sm lg:w-[calc(50%-2rem)]`}>
                      <span className="text-sm font-semibold text-primary">{step}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Why students choose us</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div className="rounded-3xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 h-2 w-8 rounded-full bg-gradient-to-r from-secondary to-accent" />
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-gray-500">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Upcoming Workshops</h2>
            <p className="mt-3 text-gray-500">More sessions coming soon!</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WORKSHOPS.map((workshop, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-3xl border-2 border-dashed border-gray-200 bg-surface p-6 transition-all hover:border-secondary/40 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Presentation className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-primary">{workshop.technology}</h3>
                  <div className="mt-3 space-y-1.5 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" />{workshop.date}</div>
                    <div className="flex items-center gap-2"><Monitor className="h-4 w-4 text-accent" />{workshop.mode}</div>
                  </div>
                  <button className="mt-5 w-full rounded-full bg-secondary py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary">
                    Register
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2.5rem] bg-primary p-10 text-center text-white md:p-14">
              <h2 className="text-3xl font-bold md:text-4xl">Our Vision</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                We believe every student deserves access to the right career guidance regardless of background.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium">📍 Starting in Karnataka</span>
                <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium">🇮🇳 Expanding across India</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Got questions?</h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <FadeIn key={faq.question}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="rounded-t-[3rem] bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo variant="light" />
              <p className="mt-4 max-w-xs text-sm text-white/60">
                Career guidance that puts students first. Starting from Karnataka.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80">Follow Us</h4>
              <ul className="mt-4 space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} CareerLens India. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
