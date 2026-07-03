import { Mail, MapPin, ArrowUpRight, Download } from 'lucide-react'
import { Section } from './ui/Section'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { profile } from '../data/portfolio'

export function Contact() {
  const links = [
    { icon: GithubIcon, label: profile.github, href: profile.githubUrl },
    { icon: LinkedinIcon, label: profile.linkedin, href: profile.linkedinUrl },
  ]

  return (
    <Section id="contact" className="bg-[var(--color-bg-elevated)]/40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="mono-label text-xs text-[var(--color-accent-2)]">06 · Contact</span>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-[var(--color-text)]">
          Let's build something at the edge of hardware and software.
        </h2>
        <p className="mt-5 text-[var(--color-text-dim)]">
          Open to VLSI, digital design, and embedded systems roles — reach out directly or find me
          on GitHub / LinkedIn.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${profile.email}`} className="gap-2">
            <Mail size={16} /> {profile.email}
          </Button>
          <Button href={profile.resume} variant="ghost" external className="gap-2">
            <Download size={16} /> Download Resume
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="link-underline flex items-center gap-2 text-sm text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors"
            >
              <l.icon className="h-4 w-4" />
              {l.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
          <span className="flex items-center gap-2 text-sm text-[var(--color-text-faint)]">
            <MapPin size={15} /> {profile.location}
          </span>
        </div>
      </Reveal>
    </Section>
  )
}
