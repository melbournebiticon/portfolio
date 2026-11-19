import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiDownload, FiMail, FiArrowUpRight } from 'react-icons/fi'
import ThemeToggle from './ui/ThemeToggle'
import { profile } from '../data/portfolio'

const navItems = [
  { href: '#home', id: 'home', label: 'Overview', num: '00' },
  { href: '#about', id: 'about', label: 'About', num: '01' },
  { href: '#projects', id: 'projects', label: 'Projects', num: '02' },
  { href: '#skills', id: 'skills', label: 'Tech Stack', num: '03' },
  { href: '#education', id: 'education', label: 'Education', num: '04' },
  { href: '#certifications', id: 'certifications', label: 'Trainings', num: '05' },
  { href: '#github', id: 'github', label: 'GitHub', num: '06' },
  { href: '#contact', id: 'contact', label: 'Contact', num: '07' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const shortName = profile.name.split(' ').slice(0, 2).join(' ')

  const NavContent = ({ onNavigate }) => (
    <div className="flex h-full flex-col justify-between px-5 py-6">
      <div>
        <a
          href="#home"
          onClick={onNavigate}
          className="block text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {shortName}
        </a>
        <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open for OJT
        </p>

        <nav className="mt-8" aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onNavigate}
                    className={`group flex items-center justify-between rounded-lg px-2.5 py-2 text-sm transition ${
                      isActive
                        ? 'bg-zinc-200/70 font-medium text-zinc-950 dark:bg-zinc-800/70 dark:text-white'
                        : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`font-mono text-[10px] ${
                        isActive
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-zinc-400 opacity-60 group-hover:opacity-100 dark:text-zinc-600'
                      }`}
                    >
                      {item.num}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800/80">
          <a
            href={profile.resume}
            download
            className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:text-emerald-400"
          >
            <span className="inline-flex items-center gap-2">
              <FiDownload className="h-3.5 w-3.5" /> Resume PDF
            </span>
            <FiArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>

      <div className="space-y-4 border-t border-zinc-200 pt-5 dark:border-zinc-800/80">
        <ThemeToggle />
        <div>
          <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
            For internships &amp; collaborations, reach me at:
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
          >
            <FiMail className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{profile.email}</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop fixed left sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 border-r border-zinc-200 bg-zinc-50/90 backdrop-blur-md lg:block dark:border-zinc-800/80 dark:bg-[#09090b]/95">
        <NavContent />
      </aside>

      {/* Mobile sticky top bar */}
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-zinc-200 bg-zinc-50/90 px-5 backdrop-blur-md lg:hidden dark:border-zinc-800/80 dark:bg-[#09090b]/90">
        <a href="#home" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {shortName}
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg border border-zinc-200 p-2 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile slide-over drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setOpen(false)} />
          <div className="relative h-full w-64 border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-[#09090b]">
            <NavContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
