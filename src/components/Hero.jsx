import { FiArrowUpRight, FiDownload, FiMapPin, FiCode, FiDatabase, FiTerminal } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const Pill = ({ icon: Icon, children }) => (
  <span className="mx-0.5 inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2 py-0.5 align-baseline font-mono text-xs font-medium text-zinc-900 shadow-2xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
    {Icon && <Icon className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />}
    {children}
  </span>
)

const highlights = [
  { label: 'ACADEMICS', value: '4th Year BSIT', sub: 'Laguna University' },
  { label: 'SPECIALIZATION', value: 'System Dev', sub: 'Python · Flask · PostgreSQL' },
  { label: 'STATUS', value: 'Open for OJT', sub: 'Majayjay, Laguna, PH' },
]

export default function Hero() {
  const { name, photo, resume, email, socials, location } = profile

  const socialLinks = [
    socials.github && { label: 'github', href: socials.github },
    socials.linkedin && { label: 'linkedin', href: socials.linkedin },
    { label: 'email', href: `mailto:${email}` },
    { label: 'resume.pdf', href: resume, download: true },
  ].filter(Boolean)

  return (
    <section id="home" className="relative pt-10 pb-14 sm:pt-16 sm:pb-16">
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-x-0 -top-6 bottom-0 -z-10 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      <div className="grid items-center gap-8 sm:grid-cols-[180px_1fr] sm:gap-10">
        {/* Portrait */}
        <div className="mx-auto w-40 sm:mx-0 sm:w-full">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 p-1.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
            <img
              src={photo}
              alt={`Portrait of ${name}`}
              className="aspect-square w-full rounded-xl object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </div>
          <p className="mt-2.5 flex items-center justify-center gap-1.5 font-mono text-[11px] text-zinc-500 sm:justify-start">
            <FiMapPin className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
            {location.replace(', Philippines', '')}
          </p>
        </div>

        {/* Intro */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">{name}</h1>

          <p className="mt-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            I'm an IT student intern specializing in <Pill icon={FiCode}>System Development</Pill>. I build
            web-based systems with <Pill icon={FiTerminal}>Python &amp; Flask</Pill> and design relational
            databases in <Pill icon={FiDatabase}>PostgreSQL &amp; MySQL</Pill>.
          </p>

          <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            Currently focused on turning real school and business workflows into clean, reliable software.
          </p>

          {/* Compact inline links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                download={l.download}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                {l.download ? <FiDownload className="h-3 w-3" /> : null}
                <span>{l.label}</span>
                {!l.download && <FiArrowUpRight className="h-3 w-3 opacity-60" />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="mt-12 grid gap-4 border-y border-zinc-200 py-6 sm:grid-cols-3 dark:border-zinc-800/80">
        {highlights.map((h) => (
          <div key={h.label}>
            <p className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
              {h.label}
            </p>
            <p className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{h.value}</p>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">{h.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
