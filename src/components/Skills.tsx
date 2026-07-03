import { Section, SectionHeading } from './ui/Section'
import { RevealGroup, RevealItem } from './ui/Reveal'
import { skillCategories } from '../data/portfolio'
import { iconMap } from './ui/icons'

export function Skills() {
  return (
    <Section id="skills" className="bg-[var(--color-bg-elevated)]/40">
      <SectionHeading
        eyebrow="02 · Skills"
        title="Tools of the trade"
        description="Languages, hardware platforms, EDA tooling, and ML pipelines I use to move between silicon and software."
      />

      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <RevealItem
              key={cat.title}
              direction="up"
              className="glow-border group rounded-2xl bg-[var(--color-surface)]/50 p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-transform duration-500 group-hover:rotate-6">
                  <Icon size={19} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)]">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-text-dim)] transition-colors duration-300 hover:border-[var(--color-accent-2)] hover:text-[var(--color-accent-2)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
