import { GraduationCap } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { Counter } from './ui/Counter'
import { bio, education, stats } from '../data/portfolio'
import photo from '../assets/photo_cutout.webp'

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 · About" title="Who I am" />

      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <Reveal className="md:col-span-3" direction="right">
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-dim)]">
            {bio}
          </p>

          <div className="mt-10 space-y-4">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-4"
              >
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{ed.degree}</p>
                  <p className="text-sm text-[var(--color-text-dim)]">{ed.institute}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
                    {ed.period} {ed.period && '·'} {ed.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="md:col-span-2 flex flex-col gap-6">
          <Reveal direction="left" className="relative mx-auto w-full max-w-xs md:max-w-none">
            {/* offset accent frame */}
            <div className="absolute -inset-0 translate-x-3 translate-y-3 rounded-2xl border border-[var(--color-accent)]/40" />
            <div className="glow-border group relative overflow-hidden rounded-2xl bg-[var(--color-surface)]">
              {/* themed backdrop: circuit grid + glow halo behind subject */}
              <div className="absolute inset-0 circuit-grid opacity-70" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 75% 55% at 50% 34%, rgba(79,157,255,0.30), transparent 68%), radial-gradient(ellipse 55% 40% at 82% 88%, rgba(57,255,158,0.14), transparent 62%)',
                }}
              />
              <div className="relative flex aspect-[4/5] items-end justify-center pt-6">
                <img
                  src={photo}
                  alt="Afsal V N — professional portrait"
                  className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-bg)]/70 to-transparent" />
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <RevealItem
                key={s.label}
                direction="scale"
                className="glow-border rounded-2xl bg-[var(--color-surface)]/50 p-5"
              >
                <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <p className="mt-2 text-xs text-[var(--color-text-dim)] leading-snug">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}
