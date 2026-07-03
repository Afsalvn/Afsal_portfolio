import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 md:px-10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Framer Motion.
        </p>
        <p className="mono-label text-[10px] text-[var(--color-text-faint)]">
          VLSI · Digital Design · Embedded Systems
        </p>
      </div>
    </footer>
  )
}
