import { ArrowUpRight, Award } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { RevealGroup, RevealItem } from './ui/Reveal'
import { TiltCard } from './ui/TiltCard'
import { GithubIcon } from './ui/BrandIcons'
import { projects } from '../data/portfolio'
import { iconMap } from './ui/icons'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="03 · Projects"
        title="Selected work"
        description="RTL and edge-AI hardware builds, plus software side-projects — from UART transceivers and on-device gesture inference to expense analytics tools."
      />

      <RevealGroup className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => {
          const Icon = iconMap[p.icon]
          return (
            <RevealItem key={p.title} direction="up" className="h-full">
              <TiltCard className="glow-border group relative flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-7 transition-shadow duration-400 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View on GitHub"
                      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text-dim)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:rotate-12"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text)]">
                  {p.title}
                </h3>
                <p className="mt-1 mono-label text-[11px] text-[var(--color-accent-2)]">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dim)]">
                  {p.description}
                </p>

                {p.award && (
                  <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--color-accent-2-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent-2)]">
                    <Award size={13} /> {p.award}
                  </div>
                )}

                <div className="flex-1" />
                <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[11px] text-[var(--color-text-faint)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--color-text)]"
                  >
                    View repository <ArrowUpRight size={15} />
                  </a>
                )}
              </TiltCard>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
