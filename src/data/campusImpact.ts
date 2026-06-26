export type EventType =
  | 'Guest Lecture'
  | 'Industrial Workshop'
  | 'Technology Session'
  | 'Career Guidance'
  | 'Placement Preparation'

export interface CampusEventImage {
  src: string
  alt: string
}

export interface CampusEvent {
  id: string
  slug: string
  eventType: EventType
  topic: string
  institution: string
  location: string
  description: string
  tags: string[]
  images: CampusEventImage[]
  date?: string
  featured: boolean
  order: number
}

export const CAMPUS_IMPACT_HEADING = {
  title: 'Making an Impact Across Campuses',
  subtitle:
    'We collaborate with schools and engineering colleges to deliver industry-focused guest lectures, hands-on workshops, career guidance sessions and mentorship programs that prepare students for the future.',
} as const

export const PARTNER_SECTION = {
  title: 'Bring Industry to Your Campus',
  subtitle:
    'CareerLens India partners with educational institutions to conduct technology workshops, career awareness programs, guest lectures and placement preparation sessions tailored to student needs.',
  features: [
    'Guest Lectures',
    'Industrial Workshops',
    'Career Guidance',
    'Placement Preparation',
    'AI & Emerging Technologies',
    'Resume Building',
    'Mock Interviews',
    'Faculty Development Programs',
  ],
} as const

export const FUTURE_COLLABORATIONS = {
  title: 'Future Collaborations',
  description:
    'We are actively partnering with engineering colleges and schools across Karnataka to expand industry connect programs. If your institution is interested in guest lectures, workshops or placement preparation — we would love to hear from you.',
  areas: [
    'Guest lectures on emerging technologies',
    'Hands-on industrial workshops',
    'Career awareness and guidance programs',
    'Placement and interview preparation',
    'Faculty development sessions',
  ],
} as const

/** Add new events here — UI updates automatically. */
export const CAMPUS_EVENTS: CampusEvent[] = [
  {
    id: 'evt-big-data-sit',
    slug: 'big-data-analytics-sit-tumakuru',
    eventType: 'Guest Lecture',
    topic: 'Big Data Analytics',
    institution: 'Siddaganga Institute of Technology',
    location: 'Tumakuru, Karnataka',
    description:
      'An interactive guest lecture introducing students to Big Data Analytics, the Hadoop ecosystem, distributed computing and real-world industry applications.',
    tags: ['Big Data', 'Guest Lecture', 'Engineering', 'Technology'],
    images: [
      {
        src: '/images/campus-impact/big-data-guest-lecture-1.png',
        alt: 'Big Data Analytics guest lecture at Siddaganga Institute of Technology with students in a classroom session',
      },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'evt-web-dev-workshop',
    slug: 'full-stack-web-development-workshop',
    eventType: 'Industrial Workshop',
    topic: 'Full Stack Web Development',
    institution: 'Siddaganga Institute of Technology',
    location: 'Tumakuru, Karnataka',
    description:
      'Hands-on industrial workshop covering modern web development — from fundamentals to building real-world applications with industry-relevant tools and practices.',
    tags: ['Web Development', 'Industrial Workshop', 'Engineering', 'Technology'],
    images: [
      {
        src: '/images/campus-impact/web-dev-workshop-1.png',
        alt: 'CareerLens team conducting a web development workshop with an interactive session on stage',
      },
      {
        src: '/images/campus-impact/web-dev-workshop-2.png',
        alt: 'Students participating in a full stack web development workshop with laptops in a lecture hall',
      },
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'evt-ai-workshop',
    slug: 'artificial-intelligence-workshop',
    eventType: 'Industrial Workshop',
    topic: 'Artificial Intelligence',
    institution: 'Siddaganga Institute of Technology',
    location: 'Tumakuru',
    description:
      'An engaging hands-on workshop introducing students to Artificial Intelligence concepts, practical applications and how AI is transforming careers across industries.',
    tags: ['Artificial Intelligence', 'Industrial Workshop', 'Engineering', 'Emerging Tech'],
    images: [
      {
        src: '/images/campus-impact/ai-workshop-1.png',
        alt: 'AI workshop session with CareerLens facilitators and students in an interactive classroom',
      },
      {
        src: '/images/campus-impact/ai-workshop-2.png',
        alt: 'Students attending an Artificial Intelligence workshop conducted by CareerLens India',
      },
    ],
    featured: true,
    order: 3,
  },
  {
    id: 'evt-school-stem-workshop',
    slug: 'stem-technology-workshop-school-outreach',
    eventType: 'Technology Session',
    topic: 'STEM & Technology Workshop',
    institution: 'Partner School',
    location: 'Karnataka',
    description:
      'A multi-day school outreach program introducing secondary students to digital literacy, science and astronomy, and hands-on robotics. Students explored real-world technology through interactive classroom sessions, live science demonstrations, and a practical electronics workshop building circuits with breadboards and microcontrollers.',
    tags: ['STEM', 'School Outreach', 'Robotics', 'Digital Skills', 'Science'],
    images: [
      {
        src: '/images/campus-impact/school-stem-workshop-1.png',
        alt: 'CareerLens facilitators conducting a digital literacy and technology awareness session with school students in a classroom',
      },
      {
        src: '/images/campus-impact/school-stem-workshop-2.png',
        alt: 'Interactive science and astronomy demonstration workshop with school students seated in a classroom',
      },
      {
        src: '/images/campus-impact/school-stem-workshop-3.png',
        alt: 'Students building electronic circuits on breadboards during a hands-on robotics and STEM workshop',
      },
    ],
    featured: true,
    order: 4,
  },
]

export function getFeaturedEvents() {
  return [...CAMPUS_EVENTS].filter((e) => e.featured).sort((a, b) => a.order - b.order)
}

export function getGuestLectures() {
  return CAMPUS_EVENTS.filter((e) => e.eventType === 'Guest Lecture').sort((a, b) => a.order - b.order)
}

export function getWorkshops() {
  return CAMPUS_EVENTS.filter(
    (e) => e.eventType === 'Industrial Workshop' || e.eventType === 'Technology Session',
  ).sort((a, b) => a.order - b.order)
}

export function getEventBySlug(slug: string) {
  return CAMPUS_EVENTS.find((e) => e.slug === slug)
}

export function getTimelineEvents() {
  return [...CAMPUS_EVENTS].sort((a, b) => a.order - b.order)
}
