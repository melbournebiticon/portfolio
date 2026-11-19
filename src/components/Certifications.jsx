import { FiArrowUpRight } from 'react-icons/fi'
import Section from './ui/Section'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      number="05"
      title="trainings & seminars"
      meta={`${certifications.length} ATTENDED`}
    >
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="grid gap-1 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[110px_1fr_auto] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-xs text-zinc-500">{c.date}</span>
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  {c.name} <FiArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                c.name
              )}
            </h3>
            <span className="text-xs text-zinc-500 sm:text-right">{c.issuer}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
