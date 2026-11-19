import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Section from './ui/Section'
import { profile } from '../data/portfolio'

// Dot size & color per contribution level (0–4)
const dotStyles = [
  'h-1.5 w-1.5 bg-zinc-200 dark:bg-zinc-800/80',
  'h-2 w-2 bg-emerald-200 dark:bg-emerald-900/80',
  'h-2.5 w-2.5 bg-emerald-400 dark:bg-emerald-700',
  'h-3 w-3 bg-emerald-500 dark:bg-emerald-500',
  'h-3 w-3 bg-emerald-600 dark:bg-emerald-400',
]

// Fallback deterministic preview grid when no username is set yet
function buildPreviewWeeks() {
  const weeks = []
  for (let w = 0; w < 52; w++) {
    const days = []
    for (let d = 0; d < 7; d++) {
      const seed = (w * 7 + d * 13 + (w % 5) * 3) % 11
      const level = seed < 5 ? 0 : seed < 7 ? 1 : seed < 9 ? 2 : seed === 9 ? 3 : 4
      days.push({ date: '', count: level * 2, level })
    }
    weeks.push(days)
  }
  return weeks
}

export default function GithubActivity() {
  const username = profile.socials.githubUsername?.trim()
  const [weeks, setWeeks] = useState(() => (username ? [] : buildPreviewWeeks()))
  const [total, setTotal] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!username) return
    let cancelled = false

    fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load')
        return r.json()
      })
      .then((data) => {
        if (cancelled) return
        const list = data.contributions ?? []
        const grouped = []
        for (let i = 0; i < list.length; i += 7) {
          grouped.push(list.slice(i, i + 7))
        }
        setWeeks(grouped)
        setTotal(data.total?.lastYear ?? list.reduce((sum, c) => sum + c.count, 0))
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setWeeks(buildPreviewWeeks())
        }
      })

    return () => {
      cancelled = true
    }
  }, [username])

  const profileUrl = profile.socials.github || (username ? `https://github.com/${username}` : '')

  return (
    <Section
      id="github"
      number="06"
      title="github"
      meta={
        username && profileUrl ? (
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            @{username.toUpperCase()} <FiArrowUpRight className="h-3 w-3" />
          </a>
        ) : (
          'ADD GITHUB USERNAME'
        )
      }
    >
      <div className="overflow-x-auto pb-2">
        <div className="inline-grid min-w-full grid-flow-col gap-1.5">
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-rows-7 gap-1.5">
              {week.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  title={day.date ? `${day.count} contributions on ${day.date}` : undefined}
                  className="flex h-3 w-3 items-center justify-center"
                >
                  <span className={`rounded-full transition-transform hover:scale-125 ${dotStyles[day.level] ?? dotStyles[0]}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-zinc-500">
        <span>
          {username && total !== null && !error
            ? `${total.toLocaleString()} CONTRIBUTIONS IN THE LAST YEAR`
            : username && error
              ? 'UNABLE TO LOAD LIVE GITHUB DATA'
              : 'PREVIEW · SET githubUsername IN src/data/portfolio.js'}
        </span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {dotStyles.map((cls, i) => (
            <span key={i} className="flex h-3 w-3 items-center justify-center">
              <span className={`rounded-full ${cls}`} />
            </span>
          ))}
          <span>More</span>
        </div>
      </div>
    </Section>
  )
}
