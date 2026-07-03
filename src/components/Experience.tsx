import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, BadgeCheck } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { timeline, certifications, achievements } from '../data/portfolio'

export function Experience() {
  const railRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 80%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="05 · Experience & Leadership"
        title="Where I've shown up"
        description="Technical experience in the VLSI flow, alongside leadership roles managing large technical teams and events."
      />

      <div ref={railRef} className="relative pl-8 md:pl-10">
        <div className="absolute left-[7px] md:left-[9px] top-1 bottom-1 w-px bg-[var(--color-border)]" />
        <motion.div
          className="absolute left-[7px] md:left-[9px] top-1 w-px origin-top bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent-2)]"
          style={{ scaleY: lineScale, height: '100%' }}
        />

        <div className="flex flex-col gap-10">
          {timeline.map((item) => (
            <Reveal key={item.title} direction="left" className="relative">
              <span
                className={`absolute -left-8 md:-left-10 top-1 h-4 w-4 rounded-full border-2 ${
                  item.category === 'Experience'
                    ? 'border-[var(--color-accent)] bg-[var(--color-bg)]'
                    : 'border-[var(--color-accent-2)] bg-[var(--color-bg)]'
                }`}
              />
              <div className="glow-border rounded-2xl bg-[var(--color-surface)]/50 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`mono-label rounded-full px-2.5 py-0.5 text-[10px] ${
                      item.category === 'Experience'
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                        : 'bg-[var(--color-accent-2-soft)] text-[var(--color-accent-2)]'
                    }`}
                  >
                    {item.category}
                  </span>
                  {item.period && (
                    <span className="font-mono text-xs text-[var(--color-text-faint)]">
                      {item.period}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-dim)]">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="mono-label mb-6 text-xs text-[var(--color-text-faint)]">
            Certifications
          </h3>
          <RevealGroup className="space-y-3">
            {certifications.map((c) => (
              <RevealItem
                key={c.title}
                direction="up"
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] p-4 transition-colors duration-300 hover:border-[var(--color-accent)]"
              >
                <BadgeCheck size={17} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{c.title}</p>
                  <p className="text-xs text-[var(--color-text-faint)] leading-snug">{c.org}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div>
          <h3 className="mono-label mb-6 text-xs text-[var(--color-text-faint)]">
            Achievements
          </h3>
          <RevealGroup className="space-y-3">
            {achievements.map((a) => (
              <RevealItem
                key={a.title}
                direction="up"
                className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] p-4 transition-colors duration-300 hover:border-[var(--color-accent-2)]"
              >
                <Award size={17} className="mt-0.5 shrink-0 text-[var(--color-accent-2)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{a.title}</p>
                  <p className="text-xs text-[var(--color-text-faint)] leading-snug">{a.org}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}
