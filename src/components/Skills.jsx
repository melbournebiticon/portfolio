import Section from './ui/Section'
import TechIcon from './ui/TechIcon'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" number="03" title="stack & skills" meta="TOOLS I USE">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.category} className="grid gap-3 sm:grid-cols-[130px_1fr] sm:items-baseline">
            <h3 className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 transition hover:border-emerald-500/50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-emerald-500/40"
                >
                  {s.icon && <TechIcon name={s.icon} className="h-3.5 w-3.5" />}
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
