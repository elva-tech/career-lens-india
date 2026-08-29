export type EventType =
  | 'Guest Lecture'
  | 'Industrial Workshop'
  | 'Technology Session'
  | 'Career Guidance'
  | 'Placement Preparation'
  | 'Faculty Development'

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

export const CAMPUS_IMPACT_PAGE_SIZE = 3

export type CampusImpactFilter = 'all' | 'career' | 'workshop' | 'lecture'

/** Add new events here — UI updates automatically. Newest sessions use the lowest `order`. */
export const CAMPUS_EVENTS: CampusEvent[] = [
  {
    id: 'evt-sit-generative-ai-faculty',
    slug: 'generative-ai-prompt-engineering-sit-tumakuru-faculty',
    eventType: 'Faculty Development',
    topic: 'Generative AI & Prompt Engineering',
    institution: 'Siddaganga Institute of Technology',
    location: 'Tumakuru, Karnataka',
    description:
      'An engaging faculty session on Generative AI and Prompt Engineering at Siddaganga Institute of Technology, Tumakuru — conducted by Arun P.N., with Prabhu T.P. supporting coordination. Faculty from Information Science & Engineering, Computer Science & Engineering and MCA explored practical AI techniques for teaching and research. For CareerLens, the visit was also a homecoming: SIT is where Arun and Prabhu began their engineering journey. Our thanks to Prof. Nagarathna, Prof. Jayanna and Prof. Aparna for the opportunity and warm welcome.',
    tags: ['Faculty Development', 'Generative AI', 'Prompt Engineering', 'SIT Tumakuru', 'ISE', 'CSE', 'MCA'],
    images: [
      {
        src: '/images/campus-impact/sit-generative-ai-faculty-1.jpg',
        alt: 'Arun P.N. conducting a Generative AI and Prompt Engineering session for faculty at Siddaganga Institute of Technology, Tumakuru',
      },
      {
        src: '/images/campus-impact/sit-generative-ai-faculty-2.jpg',
        alt: 'Faculty members in a computer lab attending the CareerLens Generative AI session at SIT Tumakuru',
      },
      {
        src: '/images/campus-impact/sit-generative-ai-faculty-3.jpg',
        alt: 'SIT faculty at computer workstations during the Generative AI and Prompt Engineering workshop',
      },
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'evt-bit-prompt-engineering-fdp',
    slug: 'prompt-engineering-aicte-atal-fdp-bit-bengaluru',
    eventType: 'Faculty Development',
    topic: 'Prompt Engineering: Core Techniques',
    institution: 'Bangalore Institute of Technology',
    location: 'VV Puram, Bengaluru',
    date: '5 August 2026',
    description:
      'Session 5 of the AICTE ATAL Faculty Development Program at Bangalore Institute of Technology, delivered by CareerLens India co-founder Arun P.N. Faculty and researchers explored practical Prompt Engineering and Generative AI techniques — a hands-on guide to making AI work in teaching and research.',
    tags: ['Faculty Development', 'Prompt Engineering', 'Generative AI', 'AICTE ATAL', 'BIT Bengaluru'],
    images: [
      {
        src: '/images/campus-impact/bit-prompt-engineering-fdp-1.jpg',
        alt: 'Arun P.N. presenting Prompt Engineering for Research at the AICTE ATAL Faculty Development Program, Bangalore Institute of Technology',
      },
      {
        src: '/images/campus-impact/bit-prompt-engineering-fdp-2.jpg',
        alt: 'Faculty members and researchers attending the Prompt Engineering session in the seminar hall at BIT Bengaluru',
      },
      {
        src: '/images/campus-impact/bit-prompt-engineering-fdp-3.jpg',
        alt: 'Felicitation of Arun P.N. after the Prompt Engineering session at Bangalore Institute of Technology',
      },
      {
        src: '/images/campus-impact/bit-prompt-engineering-fdp-4.jpg',
        alt: 'Speakers seated at the dais during the AICTE ATAL Faculty Development Program at BIT Bengaluru',
      },
      {
        src: '/images/campus-impact/bit-prompt-engineering-fdp-5.jpg',
        alt: 'Group photograph of faculty participants after the Prompt Engineering FDP session at Bangalore Institute of Technology',
      },
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'evt-career-roadmap-vijaya-puc',
    slug: 'career-roadmap-after-12th-vijaya-puc-tumkur',
    eventType: 'Career Guidance',
    topic: 'Career Roadmap After 12th',
    institution: 'Vijaya Pre-University College',
    location: 'Tumkur, Karnataka',
    date: '4 July 2026',
    description:
      'A campus-wide career guidance session — Career Roadmap After 12th: Every Path, Every Opportunity — at Vijaya Pre-University College, Tumkur. Students explored post-PUC pathways, entrance options and industry-ready careers through an interactive session with CareerLens India, with hundreds of PUC students in attendance.',
    tags: ['Career Guidance', 'After 12th', 'PUC', 'Career Roadmap', 'School Outreach'],
    images: [
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-1.jpg',
        alt: 'Career Roadmap After 12th session at Vijaya Pre-University College, Tumkur, with CareerLens India on the projector screen',
      },
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-2.jpg',
        alt: 'Hall full of PUC students attending the Career Roadmap After 12th workshop at Vijaya Pre-University College',
      },
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-3.jpg',
        alt: 'Speaker addressing students seated on the hall floor during the career guidance session at Vijaya PUC',
      },
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-4.jpg',
        alt: 'Career guidance presentation in progress with students in uniform listening at Vijaya Pre-University College',
      },
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-5.jpg',
        alt: 'Wide view of the career guidance workshop with students taking notes at Vijaya Pre-University College, Tumkur',
      },
      {
        src: '/images/campus-impact/career-roadmap-vijaya-puc-6.jpg',
        alt: 'Mentor speaking to a packed student audience during the Campus Impact career session at Vijaya PUC',
      },
    ],
    featured: true,
    order: 3,
  },
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
    order: 4,
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
    order: 5,
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
    order: 6,
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
    order: 7,
  },
]

export function getSortedEvents() {
  return [...CAMPUS_EVENTS].sort((a, b) => a.order - b.order)
}

export function getFeaturedEvents() {
  return getSortedEvents().filter((e) => e.featured)
}

function matchesFilter(event: CampusEvent, filter: CampusImpactFilter) {
  if (filter === 'all') return true
  if (filter === 'career') return event.eventType === 'Career Guidance' || event.eventType === 'Placement Preparation'
  if (filter === 'lecture') return event.eventType === 'Guest Lecture'
  return (
    event.eventType === 'Industrial Workshop' ||
    event.eventType === 'Technology Session' ||
    event.eventType === 'Faculty Development'
  )
}

export function getFilteredEvents(filter: CampusImpactFilter = 'all') {
  return getSortedEvents().filter((e) => matchesFilter(e, filter))
}

export function getPaginatedEvents(
  page: number,
  filter: CampusImpactFilter = 'all',
  pageSize = CAMPUS_IMPACT_PAGE_SIZE,
) {
  const events = getFilteredEvents(filter)
  const totalPages = Math.max(1, Math.ceil(events.length / pageSize))
  const currentPage = Math.min(Math.max(1, page), totalPages)
  const start = (currentPage - 1) * pageSize
  return {
    events: events.slice(start, start + pageSize),
    total: events.length,
    totalPages,
    currentPage,
    pageSize,
  }
}

export function getGuestLectures() {
  return getFilteredEvents('lecture')
}

export function getWorkshops() {
  return getFilteredEvents('workshop')
}

export function getEventBySlug(slug: string) {
  return CAMPUS_EVENTS.find((e) => e.slug === slug)
}

export function getTimelineEvents() {
  return getSortedEvents()
}
