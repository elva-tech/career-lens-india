export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#193A7A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#12A6B5" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#12A6B5" />
          <stop offset="100%" stopColor="#193A7A" />
        </linearGradient>
      </defs>

      <circle cx="280" cy="240" r="200" fill="url(#heroGrad1)" />
      <circle cx="420" cy="120" r="60" fill="#12A6B5" fillOpacity="0.08" className="animate-float-slow" />
      <circle cx="100" cy="360" r="40" fill="#FF8C32" fillOpacity="0.1" className="animate-float" />

      {/* Dashboard card */}
      <rect x="80" y="100" width="200" height="140" rx="16" fill="white" stroke="#E8ECF2" strokeWidth="1.5" />
      <rect x="100" y="125" width="80" height="8" rx="4" fill="#193A7A" fillOpacity="0.2" />
      <rect x="100" y="145" width="120" height="6" rx="3" fill="#E8ECF2" />
      <rect x="100" y="160" width="100" height="6" rx="3" fill="#E8ECF2" />
      <rect x="100" y="185" width="160" height="40" rx="8" fill="url(#heroGrad1)" />
      <path d="M110 215 L130 200 L150 210 L170 190 L190 205 L210 195" stroke="#12A6B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Student figure */}
      <circle cx="380" cy="180" r="28" fill="#FDE8D0" />
      <path d="M352 220 C352 200 364 195 380 195 C396 195 408 200 408 220 L408 280 L352 280 Z" fill="#193A7A" fillOpacity="0.85" />
      <rect x="340" y="250" width="80" height="50" rx="8" fill="white" stroke="#E8ECF2" strokeWidth="1.5" />
      <rect x="350" y="260" width="60" height="4" rx="2" fill="#12A6B5" fillOpacity="0.5" />
      <rect x="350" y="270" width="45" height="4" rx="2" fill="#E8ECF2" />
      <rect x="350" y="280" width="55" height="4" rx="2" fill="#E8ECF2" />

      {/* Roadmap path */}
      <rect x="280" y="300" width="220" height="120" rx="16" fill="white" stroke="#E8ECF2" strokeWidth="1.5" />
      <circle cx="310" cy="340" r="10" fill="#12A6B5" />
      <line x1="320" y1="340" x2="370" y2="340" stroke="#12A6B5" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="380" cy="340" r="10" fill="#193A7A" fillOpacity="0.3" />
      <line x1="390" y1="340" x2="440" y2="340" stroke="#E8ECF2" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="450" cy="340" r="10" fill="#E8ECF2" />
      <rect x="300" y="365" width="60" height="6" rx="3" fill="#193A7A" fillOpacity="0.15" />
      <rect x="370" y="365" width="80" height="6" rx="3" fill="#12A6B5" fillOpacity="0.2" />
      <rect x="300" y="385" width="100" height="6" rx="3" fill="#E8ECF2" />

      {/* Floating icons */}
      <g className="animate-float" style={{ animationDelay: '1s' }}>
        <rect x="440" y="80" width="48" height="48" rx="12" fill="white" stroke="#E8ECF2" strokeWidth="1.5" />
        <path d="M456 104 L472 96 L472 112 Z" fill="#FF8C32" />
        <circle cx="460" cy="100" r="3" fill="#12A6B5" />
      </g>
      <g className="animate-float-slow">
        <rect x="60" y="280" width="48" height="48" rx="12" fill="white" stroke="#E8ECF2" strokeWidth="1.5" />
        <circle cx="84" cy="304" r="12" stroke="#193A7A" strokeWidth="2" fill="none" />
        <circle cx="84" cy="304" r="4" fill="#FF8C32" />
      </g>

      {/* Growth arrow */}
      <path d="M160 60 L200 40 L200 55 L240 55 L240 70 L200 70 L200 85 Z" fill="#12A6B5" fillOpacity="0.6" className="animate-pulse-soft" />
    </svg>
  )
}
