import Section from './ui/Section'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" number="04" title="education" meta="ACADEMIC HISTORY">
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
        {education.map((e) => (
          <div
            key={e.school}
            className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[120px_1fr_auto] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-xs text-zinc-500">{e.period}</span>
            <div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{e.degree}</h3>
              {e.details?.length > 0 && (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">{e.details.join(' · ')}</p>
              )}
            </div>
            <span className="text-xs text-zinc-500 sm:text-right dark:text-zinc-400">{e.school}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
