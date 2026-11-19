import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-200 py-8 font-mono text-xs text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-500">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  )
}
