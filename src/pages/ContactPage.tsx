import { MessageCircle, Check, Building2, Share2 } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WhatsAppFloat } from '../components/layout/WhatsAppFloat'
import { ContactCards } from '../components/contact/ContactCards'
import { SimpleContactForm } from '../components/contact/SimpleContactForm'
import { FadeIn } from '../components/shared/FadeIn'
import { useConsultation } from '../context/ConsultationContext'
import { CONTACT, INSTITUTION_OFFERINGS, whatsappWithMessage } from '../data/contact'
import { SOCIAL_LINKS } from '../data/content'

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Share2 className="h-5 w-5" />,
  Instagram: <Share2 className="h-5 w-5" />,
  YouTube: <Share2 className="h-5 w-5" />,
  X: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
}

export function ContactPage() {
  const { open: openConsultation } = useConsultation()

  return (
    <div className="bg-page">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="section-mesh border-b border-border pt-nav-offset pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-secondary uppercase">Get in Touch</p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-primary md:text-5xl">
              Contact CareerLens India
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;d love to help you with your career journey.
            </p>
            <p className="mt-3 text-gray-500">
              Whether you&apos;re a student, parent, college, or organization, feel free to reach out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-secondary/10 border border-[#25D366]/20 p-8 md:flex-row md:p-10">
              <div>
                <h2 className="text-xl font-semibold text-primary">Need quick guidance?</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Many students and parents prefer messaging over forms. We&apos;re here on WhatsApp.
                </p>
              </div>
              <a
                href={whatsappWithMessage('Hi CareerLens India! I need some career guidance.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Institutions */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-primary">For Colleges & Schools</h2>
              <p className="mt-3 text-gray-500">Interested in:</p>
              <ul className="mt-4 space-y-3">
                {INSTITUTION_OFFERINGS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">Contact us to organize a session at your institution.</p>
              <a
                href={whatsappWithMessage('Hi CareerLens India! We are a college/school interested in organizing a session.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-light"
              >
                Contact for Partnership
              </a>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="font-semibold text-primary">Book a Free Consultation</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Not sure where to start? Pick a topic and we&apos;ll guide you.
                </p>
                <button
                  onClick={openConsultation}
                  className="mt-5 w-full rounded-lg border border-primary/20 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  Book Free Career Consultation
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social + Form */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-serif text-2xl text-primary">Follow Us</h2>
              <p className="mt-2 text-sm text-gray-500">
                Stay connected for career tips, workshops, and updates.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-medium text-gray-700 transition-all hover:border-secondary/30 hover:shadow-md"
                  >
                    <span className="text-primary">{socialIcons[link.label]}</span>
                    {link.label}
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400">
                Contact: {CONTACT.name} · {CONTACT.phoneDisplay}
              </p>
            </FadeIn>
            <SimpleContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
