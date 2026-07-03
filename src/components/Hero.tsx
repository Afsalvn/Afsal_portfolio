import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, MapPin, Mail } from 'lucide-react'
import { LetterReveal } from './ui/LetterReveal'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { profile } from '../data/portfolio'
import { Button } from './ui/Button'

const Chip3D = lazy(() => import('./three/Chip3D'))

function useDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return desktop
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const desktop = useDesktop()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const chipY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const socials = [
    { icon: GithubIcon, href: profile.githubUrl, label: 'GitHub' },
    { icon: LinkedinIcon, href: profile.linkedinUrl, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 md:px-10"
    >
      <motion.div className="absolute inset-0 circuit-grid" style={{ y: gridY }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      {/* glow accents */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[var(--color-accent-2)]/10 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 pt-24 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-2)] animate-pulse" />
            <span className="mono-label text-[11px] text-[var(--color-text-dim)]">
              Available for VLSI / Embedded Roles
            </span>
          </motion.div>

          <h1 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] text-[clamp(2.6rem,6vw,4.8rem)] text-[var(--color-text)]">
            <LetterReveal text={profile.name} delay={0.15} />
          </h1>

          <div className="mt-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed"
            >
              {profile.headline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-base md:text-lg text-[var(--color-text-dim)] leading-relaxed"
            >
              {profile.subheadline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-8 flex items-center gap-2 text-sm text-[var(--color-text-faint)]"
          >
            <MapPin size={15} className="text-[var(--color-accent)]" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">View Projects</Button>
            <Button href={profile.resume} variant="ghost" external>
              <Download size={15} /> Resume
            </Button>

            <div className="ml-2 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text-dim)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_18px_-4px_var(--color-accent)]"
                >
                  <s.icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 3D microchip — desktop only */}
        {desktop && (
          <motion.div style={{ y: chipY, opacity: contentOpacity }} className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Suspense fallback={<div className="h-[420px]" />}>
                <Chip3D className="h-[420px] w-full" />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-faint)] hover:text-[var(--color-accent)] transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
