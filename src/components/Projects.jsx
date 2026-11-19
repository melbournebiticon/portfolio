import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'
import Section from './ui/Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  const isSingle = projects.length === 1

  return (
    <Section
      id="projects"
      number="02"
      title="projects"
      meta={`${projects.length} FEATURED`}
    >
      <div className={isSingle ? 'space-y-6' : 'grid gap-5 sm:grid-cols-2'}>
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 dark:border-zinc-800/90 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
          >
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">{p.title}</h3>
                  {p.subtitle && (
                    <p className="mt-0.5 font-mono text-xs text-zinc-500 dark:text-zinc-500">{p.subtitle}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      <FiGithub className="h-3.5 w-3.5" /> code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" /> live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>

              {p.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4 dark:border-zinc-800/70">
                  {p.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <FiCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
