import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  variant?: 'page' | 'alt' | 'dark' | 'mesh'
  className?: string
  divider?: boolean
}

const variants = {
  page: 'bg-page section-mesh',
  alt: 'bg-section-alt',
  dark: 'bg-section-dark',
  mesh: 'bg-page section-mesh',
}

export function Section({ id, children, variant = 'page', className = '', divider }: SectionProps) {
  return (
    <>
      {divider && <div className="section-divider" aria-hidden="true" />}
      <section id={id} className={`section-pad relative ${variants[variant]} ${className}`}>
        {children}
      </section>
    </>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-xs font-semibold tracking-widest uppercase ${dark ? 'text-secondary' : 'text-secondary'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 font-serif text-3xl tracking-tight md:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
