import { ArrowRight, Brain, ShieldAlert } from 'lucide-react'
import { Section, SectionHeading } from './ui/Section'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { Counter } from './ui/Counter'
import { research } from '../data/portfolio'

export function Research() {
  return (
    <Section id="research" className="bg-[var(--color-bg-elevated)]/40">
      <SectionHeading eyebrow="04 · Research" title="Brain-computer interfaces" />

      <div className="grid lg:grid-cols-5 gap-12">
        <Reveal direction="right" className="lg:col-span-2">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <Brain size={22} />
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[var(--color-text)]">
            {research.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-accent-2)] mono-label">{research.role}</p>
          <p className="text-sm text-[var(--color-text-dim)]">{research.org}</p>
          <p className="mt-1 text-xs text-[var(--color-text-faint)]">
            Supervised by {research.supervisors}
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-dim)]">
            {research.summary}
          </p>

          <div className="mt-6 space-y-3">
            {research.notes.map((n) => (
              <div key={n} className="flex items-start gap-2.5">
                <ShieldAlert
                  size={15}
                  className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                />
                <p className="text-sm text-[var(--color-text-dim)] leading-relaxed">{n}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="lg:col-span-3 space-y-10">
          {/* pipeline */}
          <RevealGroup className="flex flex-col md:flex-row md:items-stretch gap-3">
            {research.pipeline.map((step, i) => (
              <RevealItem key={step.label} className="flex items-center flex-1 gap-3">
                <div className="glow-border flex-1 rounded-xl bg-[var(--color-surface)]/60 p-4">
                  <p className="mono-label text-[10px] text-[var(--color-accent)]">
                    0{i + 1}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-faint)] leading-snug">
                    {step.detail}
                  </p>
                </div>
                {i < research.pipeline.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="hidden md:block shrink-0 text-[var(--color-text-faint)]"
                  />
                )}
              </RevealItem>
            ))}
          </RevealGroup>

          {/* metrics */}
          <RevealGroup className="grid grid-cols-2 gap-4">
            {research.metrics.map((m) => (
              <RevealItem
                key={m.label}
                direction="scale"
                className="rounded-2xl border border-[var(--color-border)] p-5"
              >
                <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gradient">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-1.5 text-xs text-[var(--color-text-dim)] leading-snug">
                  {m.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  )
}
