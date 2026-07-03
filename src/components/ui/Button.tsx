import { type MouseEvent, type ReactNode, useRef } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const span = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    span.className = 'ripple-span'
    span.style.width = span.style.height = `${size}px`
    span.style.left = `${e.clientX - rect.left - size / 2}px`
    span.style.top = `${e.clientY - rect.top - size / 2}px`
    el.appendChild(span)
    setTimeout(() => span.remove(), 600)
  }

  const base =
    'ripple inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 select-none'
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-accent)] text-[#05070a] hover:shadow-[0_0_28px_-4px_var(--color-accent)] hover:-translate-y-0.5'
      : 'border border-[var(--color-border-hover)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-0.5'

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    spawnRipple(e)
    onClick?.()
  }

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={handleClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  )
}
