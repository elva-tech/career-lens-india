interface LogoProps {
  className?: string
  showPoweredBy?: boolean
  poweredByClassName?: string
  variant?: 'default' | 'light'
  size?: 'default' | 'compact' | 'footer'
}

const sizeClasses = {
  compact: 'h-7 w-auto sm:h-8',
  default: 'h-9 w-auto sm:h-10',
  footer: 'h-12 w-auto sm:h-[52px] md:h-14',
} as const

export function Logo({
  className = '',
  showPoweredBy = true,
  poweredByClassName = '',
  variant = 'default',
  size = 'default',
}: LogoProps) {
  const isLight = variant === 'light'

  return (
    <div className={`flex shrink-0 flex-col justify-center ${className}`}>
      <img
        src="/careerlens-logo.png"
        alt="CareerLens India"
        className={`block object-contain object-left ${sizeClasses[size]} ${
          isLight ? 'brightness-0 invert' : ''
        }`}
        draggable={false}
      />
      {showPoweredBy && (
        <span
          className={`mt-1.5 block text-[10px] font-medium leading-none tracking-wide sm:text-[11px] ${
            isLight ? 'text-white/50' : 'text-slate-500'
          } ${poweredByClassName}`}
        >
          Powered by{' '}
          <a
            href="https://elvatech.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors hover:underline ${
              isLight ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-primary'
            }`}
          >
            Elva Tech
          </a>
        </span>
      )}
    </div>
  )
}
