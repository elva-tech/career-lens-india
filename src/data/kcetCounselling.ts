export const KCET_CATEGORIES = [
  'GM',
  '2A',
  '2B',
  '3A',
  '3B',
  'SC',
  'ST',
  'CAT-1',
] as const

export const KCET_BRANCHES = [
  'Computer Science (CS)',
  'Information Science (IS)',
  'Electronics & Communication (EC)',
  'Telecommunication (TC)',
  'AI / ML',
  'Data Science',
] as const

export const KCET_LOCATIONS = [
  'Bangalore',
  'Mysuru',
  'Tumkur',
  'Other Karnataka',
  'No preference',
] as const

export type KcetCategory = (typeof KCET_CATEGORIES)[number]
export type KcetBranch = (typeof KCET_BRANCHES)[number]
export type KcetLocation = (typeof KCET_LOCATIONS)[number]

export const FEATURED_RESOURCES = [
  {
    id: 'preference-guide',
    anchor: '#preference-builder',
    title: 'KCET Preference Guide',
    description: 'Build a personalised option-entry list based on your rank, category and branch goals.',
    icon: 'list-checks',
  },
  {
    id: 'branch-priority',
    anchor: '#branch-priority',
    title: 'Branch Priority',
    description: 'Understand which engineering branches to prioritise and when each makes sense.',
    icon: 'git-branch',
  },
  {
    id: 'college-preference',
    anchor: '#college-preference',
    title: 'College Preference',
    description: 'Explore highly preferred, strong and recommended college options across Karnataka.',
    icon: 'building',
  },
  {
    id: 'option-strategy',
    anchor: '#option-strategy',
    title: 'Option Entry Strategy',
    description: 'Learn the correct way to fill KCET options for the best possible outcomes.',
    icon: 'route',
  },
  {
    id: 'rank-guide',
    anchor: '#rank-guide',
    title: 'Rank-wise Guide',
    description: 'See what colleges and branches are realistic for your KCET rank range.',
    icon: 'bar-chart',
  },
  {
    id: 'college-explorer',
    anchor: '#college-preference',
    title: 'College Explorer',
    description: 'Browse colleges by preference group with branches offered — more detail coming soon.',
    icon: 'search',
  },
] as const

export const BRANCH_PRIORITIES = [
  {
    code: 'CS',
    name: 'Computer Science',
    priority: 1,
    explanation:
      'Highest industry demand, strongest placement ecosystem and the widest range of software and product career paths.',
    scenarios: [
      'Best default choice when available at your target colleges.',
      'Ideal for students interested in software, product, data and core tech roles.',
    ],
  },
  {
    code: 'IS',
    name: 'Information Science',
    priority: 2,
    explanation:
      'Closely aligned with CS in curriculum and outcomes, often with strong placement support in reputed colleges.',
    scenarios: [
      'Excellent alternative when CS cutoffs are out of reach.',
      'Strong choice in top and mid-tier colleges with active placement cells.',
    ],
  },
  {
    code: 'EC',
    name: 'Electronics & Communication',
    priority: 3,
    explanation:
      'Solid core engineering branch with opportunities in embedded systems, hardware, telecom and allied tech roles.',
    scenarios: [
      'Preferred when CS/IS are unavailable at realistic colleges.',
      'Good for students interested in core engineering with tech overlap.',
    ],
  },
  {
    code: 'TC',
    name: 'Telecommunication',
    priority: 4,
    explanation:
      'Niche branch with fewer campus opportunities compared to CS, IS and EC in most colleges.',
    scenarios: [
      'Consider mainly in highly preferred colleges with strong industry connect.',
      'Generally not recommended in lower-tier colleges if CS/IS/EC are available.',
    ],
  },
  {
    code: 'AI/DS',
    name: 'AI / Data Science',
    priority: 5,
    explanation:
      'Emerging branches that can be valuable in select institutions but vary widely in curriculum quality and placements.',
    scenarios: [
      'Recommended primarily in top 5 colleges with established CS/IS ecosystems.',
      'Avoid in lower-tier colleges when core branches are available.',
    ],
  },
] as const

export const BRANCH_SELECTION_RULES = {
  topColleges: ['CS', 'IS', 'AI/ML', 'Data Science', 'EC', 'TC'],
  belowTopColleges: ['CS', 'IS', 'EC'],
  topCollegesNote:
    'For top colleges (e.g. RVCE, BMSCE, MSRIT, PES, UVCE, SIT) — you can consider AI/ML, Data Science and TC after CS and IS.',
  belowTopCollegesNote:
    'For other colleges — stick to core branches only. Avoid AI/ML, Data Science and TC unless CS, IS and EC are unavailable.',
  note:
    'AI/ML, Data Science and Telecommunication are generally recommended only in selected highly preferred colleges — and only when CS, IS or EC are not available at realistic options.',
  locationPicks: [
    {
      location: 'Tumkur',
      description: 'Location-specific options from our guide',
      colleges: 'SSIT (CS, IS) · CIT (CS, IS)',
    },
    {
      location: 'Bangalore',
      description: 'Location-specific options from our guide',
      colleges: 'Global Academy of Technology (CS, IS, EC) · BNMIT (CS, IS, EC)',
    },
  ],
} as const

export interface CollegeEntry {
  name: string
  shortName: string
  branches: string[]
}

export const COLLEGE_GROUPS = [
  {
    id: 'highly-preferred',
    title: 'Highly Preferred Colleges',
    description: 'Most sought-after options with strong academics, placements and industry reputation.',
    accent: 'from-primary to-primary-light',
    colleges: [
      { name: 'R V College of Engineering', shortName: 'RVCE', branches: ['CS', 'IS', 'EC', 'TC', 'AI/DS'] },
      { name: 'BMS College of Engineering', shortName: 'BMSCE', branches: ['CS', 'IS', 'EC', 'TC', 'AI/DS'] },
      { name: 'Ramaiah Institute of Technology', shortName: 'MSRIT', branches: ['CS', 'IS', 'EC', 'TC', 'AI/DS'] },
      { name: 'PES University (RR Campus)', shortName: 'PES (RR)', branches: ['CS', 'IS', 'EC', 'TC', 'AI/DS'] },
      { name: 'University Visvesvaraya College of Engineering', shortName: 'UVCE', branches: ['CS', 'IS', 'EC'] },
      { name: 'Siddaganga Institute of Technology', shortName: 'SIT Tumkur', branches: ['CS', 'IS', 'EC', 'TC'] },
    ] satisfies CollegeEntry[],
  },
  {
    id: 'strong-choices',
    title: 'Strong Choices',
    description: 'Well-regarded colleges offering dependable outcomes across core branches.',
    accent: 'from-secondary/90 to-primary',
    colleges: [
      { name: 'Bangalore Institute of Technology', shortName: 'BIT', branches: ['CS', 'IS', 'EC'] },
      { name: 'B N M Institute of Technology', shortName: 'BNMIT', branches: ['CS', 'IS', 'EC'] },
      { name: 'JSS Science & Technology University', shortName: 'JSS Mysuru', branches: ['CS', 'IS', 'EC'] },
      { name: 'The National Institute of Engineering', shortName: 'NIE Mysuru', branches: ['CS', 'IS', 'EC'] },
      { name: 'Dayananda Sagar College of Engineering', shortName: 'DSCE', branches: ['CS', 'IS', 'EC'] },
      { name: 'Nitte Meenakshi Institute of Technology', shortName: 'NMIT', branches: ['CS', 'IS', 'EC'] },
    ] satisfies CollegeEntry[],
  },
  {
    id: 'recommended-options',
    title: 'Good Options',
    description: 'Realistic choices for mid-range ranks — prioritise branch quality over brand alone.',
    accent: 'from-accent/90 to-primary',
    colleges: [
      { name: 'RNS Institute of Technology', shortName: 'RNSIT', branches: ['CS', 'IS'] },
      { name: 'BMS Institute of Technology', shortName: 'BMSIT', branches: ['CS', 'IS'] },
      { name: 'CMR Institute of Technology', shortName: 'CMRIT', branches: ['CS', 'IS'] },
      { name: 'SJB Institute of Technology', shortName: 'SJBIT', branches: ['CS', 'IS'] },
      { name: 'New Horizon College of Engineering', shortName: 'New Horizon', branches: ['CS', 'IS'] },
      { name: 'Global Academy of Technology', shortName: 'GAT', branches: ['CS', 'IS', 'EC'] },
      { name: 'Sri Siddhartha Institute of Technology', shortName: 'SSIT Tumkur', branches: ['CS', 'IS'] },
      { name: 'Channabasaveshwara Institute of Technology', shortName: 'CIT Tumkur', branches: ['CS', 'IS'] },
      { name: 'Dr. Ambedkar Institute of Technology', shortName: 'AIT', branches: ['CS', 'IS'] },
    ] satisfies CollegeEntry[],
  },
] as const

export const OPTION_STRATEGY = {
  correct: {
    title: 'Correct Way',
    subtitle: 'Fill by branch priority across all preferred colleges',
    steps: ['Fill CS in all preferred colleges', 'Then fill IS across colleges', 'Then fill EC across colleges'],
    tip: 'More options in the right order means better chances of securing your best possible branch.',
  },
  wrong: {
    title: 'Wrong Way',
    subtitle: 'Complete one college before moving to the next',
    example: 'RVCE CS → RVCE IS → RVCE EC → BMSCE CS',
    warning: 'Never place EC of a top college above CS or IS at another college. This reduces your overall chances.',
  },
} as const

export const RANK_GUIDE = [
  {
    range: 'Above 10K',
    label: 'Excellent',
    colleges: 'Highly preferred colleges and BIT',
    branches: 'CS / IS likely across top options',
    strategy: 'You can realistically target CS or IS in most highly preferred colleges. Fill maximum CS options first.',
  },
  {
    range: '10K – 20K',
    label: 'Very Good',
    colleges: 'Highly preferred, BIT, BNMIT, NMIT, DSCE, JSS, NIE',
    branches: 'CS / IS in top 7–8 colleges possible',
    strategy: 'Prioritise CS across all reachable colleges, then IS. Keep EC as a strategic backup.',
  },
  {
    range: '20K – 40K',
    label: 'Good',
    colleges: 'Strong choices and good options',
    branches: 'Focus on CS → IS → EC',
    strategy: 'Avoid AI/DS/TC in lower-tier colleges. Branch quality matters more than college brand alone.',
  },
  {
    range: '40K – 50K',
    label: 'Average',
    colleges: 'Strong choices and recommended options',
    branches: 'CS / IS in good private colleges; EC as safe backup',
    strategy: 'Maximise CS and IS options. Consider location, fees and hostel while filling choices.',
  },
  {
    range: '50K+',
    label: 'Safe planning',
    colleges: 'Recommended options and beyond',
    branches: 'Prioritise branch over college',
    strategy: 'Fill CS and IS wherever realistic. Keep multiple safe EC options. Verify latest cutoffs on KEA.',
  },
] as const

export const QUICK_RECAP = [
  'Follow branch priority: CS → IS → EC before considering niche branches.',
  'Apply top-college rules: broader branch options in highly preferred colleges, narrower below.',
  'Avoid AI/ML, Data Science and TC in lower-tier colleges when core branches are available.',
  'Fill maximum options in the correct order — branch first, then college.',
  'Branch matters more than college brand for long-term career outcomes.',
  'Factor in location, fees, hostel and your personal career goals.',
  'Verify the latest KEA seat matrix and cutoffs every year before finalising choices.',
] as const

export const COUNSELLING_DISCLAIMER = {
  title: 'Disclaimer',
  points: [
    'The preference order presented here is CareerLens India\'s independent analysis for student guidance.',
    'Recommendations are based on a holistic evaluation of multiple publicly available and historical factors including previous years\' cutoffs, placement statistics, industry demand, academic reputation, infrastructure, faculty, alumni outcomes and student feedback.',
    'This guidance is intended to support informed decision-making. It should not be interpreted as an official ranking, rating or endorsement of any engineering college.',
    'Engineering colleges continuously improve their academic quality, infrastructure, industry collaborations and placement performance. Therefore, students should not consider these recommendations as permanent classifications.',
    'The best college for one student may not be the best choice for another. Final decisions should always consider individual interests, career goals, preferred branch, location, fees, hostel facilities and financial circumstances.',
    'Admission criteria, seat availability and cutoffs change every year.',
    'Students must verify the latest information before making admission decisions.',
  ],
  affiliation:
    'CareerLens India is an independent career guidance platform and is not affiliated with, endorsed by, or associated with the Karnataka Examinations Authority (KEA), Visvesvaraya Technological University (VTU), or any engineering college unless explicitly stated.',
} as const

export const KEA_PORTAL_LINKS = {
  home: 'https://cetonline.karnataka.gov.in/kea/',
  ugcetCurrent: 'https://cetonline.karnataka.gov.in/kea/ugcet2026',
  ugcetPrevious: 'https://cetonline.karnataka.gov.in/kea/ugcet2025',
} as const

export const OFFICIAL_KEA_RESOURCES = {
  title: 'Official KCET Resources',
  description:
    'CareerLens recommends referring to the official KEA publications as the final authority for counselling-related information.',
  items: [
    {
      label: 'Engineering Seat Matrix',
      href: KEA_PORTAL_LINKS.ugcetCurrent,
      hint: 'Published on the current UGCET portal',
    },
    {
      label: 'Previous Year Cutoffs',
      href: KEA_PORTAL_LINKS.ugcetPrevious,
      hint: 'Previous year UGCET notifications and cutoffs',
    },
    {
      label: 'Counselling Schedule',
      href: KEA_PORTAL_LINKS.ugcetCurrent,
      hint: 'Round-wise schedule on the UGCET portal',
    },
    {
      label: 'Option Entry Dates',
      href: KEA_PORTAL_LINKS.home,
      hint: 'Candidate login and option entry via KEA homepage',
    },
    {
      label: 'Official Notifications',
      href: KEA_PORTAL_LINKS.ugcetCurrent,
      hint: 'Latest KEA announcements and PDFs',
    },
  ],
  link: KEA_PORTAL_LINKS.home,
} as const
