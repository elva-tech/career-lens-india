import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { FadeIn } from '../shared/FadeIn'
import { useConsultation } from '../../context/ConsultationContext'
import { PARTNER_SECTION } from '../../data/campusImpact'
import { whatsappWithMessage } from '../../data/contact'

export function PartnerWithSection() {
  const { open: openConsultation } = useConsultation()

  return (
    <section className="cta-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 hero-mesh-grid opacity-40" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">Partner With CareerLens India</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-white md:text-4xl lg:text-5xl">
            {PARTNER_SECTION.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{PARTNER_SECTION.subtitle}</p>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_SECTION.features.map((feature) => (
              <div key={feature} className="card-glass flex items-center gap-3 px-4 py-3.5 transition-all hover:bg-white/12">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappWithMessage('Hi CareerLens India! We would like to invite you to our campus for a session.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Invite Us
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={openConsultation}
            className="inline-flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Contact Us
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-white/75 transition-all hover:text-white"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
