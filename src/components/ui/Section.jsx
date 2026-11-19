import useReveal from '../../hooks/useReveal'

// Editorial numbered section wrapper: e.g. "01 / about"
export default function Section({ id, number, title, meta, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} className={`py-14 sm:py-16 ${className}`}>
      <div ref={ref} className="reveal">
        {title && (
          <div className="mb-8 flex items-baseline justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800/80">
            <h2 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
              {number && <span className="mr-2 text-emerald-600 dark:text-emerald-400">{number} /</span>}
              {title}
            </h2>
            {meta && <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">{meta}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
