import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 md:px-10 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mb-14 md:mb-16 max-w-2xl">
      <span className="mono-label text-xs text-[var(--color-accent-2)]">{eyebrow}</span>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-text-dim)] leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
