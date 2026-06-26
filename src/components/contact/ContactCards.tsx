import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT } from '../../data/contact'
import { FadeIn } from '../shared/FadeIn'

const cards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    external: false,
    color: 'text-primary bg-primary/5',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Chat with us instantly',
    href: CONTACT.whatsappHref,
    external: true,
    color: 'text-[#25D366] bg-[#25D366]/10',
  },
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT.email,
    href: CONTACT.emailHref,
    external: false,
    color: 'text-secondary bg-secondary/10',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: CONTACT.location,
    href: CONTACT.mapsHref,
    external: true,
    color: 'text-accent bg-accent/10',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: CONTACT.workingHours,
    sub: CONTACT.workingTime,
    href: undefined,
    external: false,
    color: 'text-primary bg-surface',
  },
] as const

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const Icon = card.icon
        const inner = (
          <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-primary">{card.title}</h3>
            <p className="mt-1 text-sm font-medium text-gray-800">{card.value}</p>
            {'sub' in card && card.sub && (
              <p className="mt-0.5 text-sm text-gray-500">{card.sub}</p>
            )}
            {card.href && (
              <span className="mt-4 text-xs font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                Tap to {card.title === 'Call Us' ? 'call' : card.title === 'WhatsApp' ? 'chat' : card.title === 'Email' ? 'email' : 'open maps'} →
              </span>
            )}
          </div>
        )

        return (
          <FadeIn key={card.title} delay={i * 0.06}>
            {card.href ? (
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="block h-full"
              >
                {inner}
              </a>
            ) : (
              inner
            )}
          </FadeIn>
        )
      })}
    </div>
  )
}
