import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
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
  Sparkles,
} from 'lucide-react'
import { Logo } from '../components/shared/Logo'
import { HeroIllustration } from '../components/shared/HeroIllustration'
import { FadeIn } from '../components/shared/FadeIn'
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
  chart: <BarChart3 className="h-5 w-5" />,
  building: <Building2 className="h-5 w-5" />,
  'git-branch': <GitBranch className="h-5 w-5" />,
  map: <Map className="h-5 w-5" />,
  'user-check': <UserCheck className="h-5 w-5" />,
  message: <MessageCircle className="h-5 w-5" />,
  presentation: <Presentation className="h-5 w-5" />,
  mic: <Mic className="h-5 w-5" />,
}

function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/" className="text-xs text-gray-400 hover:text-gray-600">
            Concepts
          </Link>
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gray-900 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:shadow-lg hover:shadow-gray-900/20"
          >
            <span className="relative z-10">Book Free Career Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white">
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
    <div className="rounded-2xl border border-gray-200/80 bg-white">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-5 text-left">
        <span className="pr-4 text-sm font-medium">{question}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
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

export function ConceptB() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero — asymmetric bento */}
      <section id="home" className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="gradient-mesh absolute inset-0" />
        <div className="pointer-events-none absolute top-20 right-[10%] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-[5%] h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-4">
            <FadeIn className="lg:col-span-7">
              <div className="flex h-full flex-col justify-center py-8 lg:py-16">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  Career Intelligence Platform
                </div>
                <h1 className="mt-6 text-5xl font-bold tracking-[-0.03em] text-gray-900 md:text-6xl lg:text-7xl">
                  See the career
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    before you choose it.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-gray-500">
                  Helping students make informed career decisions through industry mentorship, analytics, career roadmaps and practical guidance.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl">
                    Explore Programs
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:shadow-md">
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/50 p-4 shadow-2xl shadow-gray-200/50 backdrop-blur-sm lg:mt-8">
                <HeroIllustration className="w-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problems — horizontal scroll cards */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase">Why CareerLens exists</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Students are asking...</h2>
          </FadeIn>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 scrollbar-none lg:grid lg:grid-cols-5 lg:overflow-visible">
            {STUDENT_PROBLEMS.map((problem, i) => (
              <FadeIn key={problem} delay={i * 0.08}>
                <div className="w-64 shrink-0 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-lg lg:w-auto">
                  <span className="text-2xl font-bold text-gray-200">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-3 text-sm font-medium text-gray-700">&ldquo;{problem}&rdquo;</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10">
            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary to-secondary p-6 text-white md:p-8">
              <div className="flex-1">
                <p className="text-lg font-semibold md:text-xl">CareerLens India helps solve these problems.</p>
              </div>
              <ArrowUpRight className="hidden h-8 w-8 shrink-0 md:block" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Help — bento grid */}
      <section id="help" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How we help students</h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {STUDENT_STAGES.map((stage, i) => (
              <FadeIn key={stage.title} delay={i * 0.06}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-xl ${
                    i === 0 ? 'md:col-span-2 lg:row-span-1 bg-gray-900 text-white border-gray-800' : 'bg-white hover:border-gray-300'
                  }`}
                >
                  {i === 0 && (
                    <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-2xl" />
                  )}
                  <h3 className={`text-lg font-semibold ${i === 0 ? 'text-white' : 'text-gray-900'}`}>{stage.title}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>{stage.description}</p>
                  <ArrowUpRight className={`mt-4 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${i === 0 ? 'text-secondary' : 'text-gray-400'}`} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — dark bento */}
      <section id="programs" className="bg-gray-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-secondary uppercase">Our Programs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Everything you need</h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.05}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-secondary/30 hover:bg-white/10">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                    {programIcons[program.icon]}
                  </div>
                  <h3 className="mt-4 text-sm font-medium">{program.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey — vertical timeline */}
      <section id="journey" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your Career Journey</h2>
              <p className="mt-4 text-gray-500">CareerLens appears at every critical decision point.</p>
            </FadeIn>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-secondary via-primary to-accent" />
              {CAREER_JOURNEY.map((step, i) => (
                <FadeIn key={step} delay={i * 0.05}>
                  <div className="relative flex items-center gap-4 pb-6 last:pb-0">
                    <div className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      i % 3 === 0 ? 'bg-secondary text-white' : i % 3 === 1 ? 'bg-primary text-white' : 'bg-accent text-white'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all hover:shadow-md">
                      <span className="text-sm font-medium">{step}</span>
                      {(i === 2 || i === 5 || i === 8) && (
                        <span className="ml-2 rounded-full bg-secondary/10 px-2 py-0.5 text-[10px] font-semibold text-secondary">
                          CareerLens
                        </span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose — 2-col stagger */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose CareerLens</h2>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.04}>
                <div className="rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-gray-500">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Upcoming Workshops</h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {WORKSHOPS.map((workshop, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-gray-900 hover:shadow-xl">
                  <h3 className="font-semibold">{workshop.technology}</h3>
                  <div className="mt-4 flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{workshop.date}</span>
                    <span className="flex items-center gap-1"><Monitor className="h-3.5 w-3.5" />{workshop.mode}</span>
                  </div>
                  <button className="mt-5 w-full rounded-full bg-gray-900 py-2.5 text-xs font-semibold text-white opacity-0 transition-all group-hover:opacity-100">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-light to-secondary p-10 text-white md:p-16">
              <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <h2 className="text-3xl font-bold md:text-4xl">Our Vision</h2>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
                &ldquo;We believe every student deserves access to the right career guidance regardless of background.&rdquo;
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">Starting in Karnataka</span>
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">Expanding across India</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight">FAQ</h2>
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
      <footer id="contact" className="border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm text-gray-500">
                Career Intelligence for Karnataka students.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Links</h4>
                <ul className="mt-3 space-y-2">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Social</h4>
                <ul className="mt-3 space-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} CareerLens India. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
