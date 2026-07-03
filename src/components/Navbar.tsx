import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 md:h-18 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            className="transition-transform duration-500 group-hover:rotate-90"
          >
            <rect
              x="9"
              y="9"
              width="14"
              height="14"
              rx="1.5"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.6"
            />
            <rect x="13" y="13" width="6" height="6" rx="0.5" fill="var(--color-accent-2)" />
            <g stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round">
              <path d="M13 9V4" />
              <path d="M19 9V4" />
              <path d="M13 28v-5" />
              <path d="M19 28v-5" />
              <path d="M9 13H4" />
              <path d="M9 19H4" />
              <path d="M28 13h-5" />
              <path d="M28 19h-5" />
            </g>
          </svg>
          <span className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-[var(--color-text)]">
            Afsal V N
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="link-underline mono-label text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-hover)] px-4 py-2 text-xs mono-label text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          <Download size={13} /> Resume
        </a>

        <button
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="py-3 mono-label text-sm text-[var(--color-text-dim)] hover:text-[var(--color-accent)] border-b border-[var(--color-border)] last:border-none transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
