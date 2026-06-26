export const CONTACT = {
  name: 'Rohith R',
  phone: '6361910673',
  phoneDisplay: '+91 63619 10673',
  phoneHref: 'tel:+916361910673',
  whatsappHref: 'https://wa.me/916361910673',
  email: 'careerlensindia@gmail.com',
  emailHref: 'mailto:careerlensindia@gmail.com',
  location: 'Bangalore, Karnataka',
  mapsHref: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
  workingHours: 'Mon – Sat',
  workingTime: '9:00 AM – 7:00 PM',
} as const

export const CONSULTATION_TOPICS = [
  'Career Guidance',
  'College Selection',
  'Branch Selection',
  'Mentorship',
  'Workshop Enquiry',
  'College Partnership',
  'Corporate Partnership',
] as const

export type ConsultationTopic = (typeof CONSULTATION_TOPICS)[number]

export const INSTITUTION_OFFERINGS = [
  'Career Awareness Sessions',
  'Industrial Workshops',
  'Placement Training',
  'Mentorship Programs',
] as const

export const AUDIENCE_TYPES = ['Student', 'Parent', 'College', 'Company'] as const

export type AudienceType = (typeof AUDIENCE_TYPES)[number]

export function whatsappWithMessage(message: string) {
  return `${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`
}

export function consultationWhatsAppLink(topic: ConsultationTopic) {
  return whatsappWithMessage(
    `Hi CareerLens India! I'd like to book a free consultation for: ${topic}.`,
  )
}
