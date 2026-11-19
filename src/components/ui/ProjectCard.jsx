import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, description, image, tech, github, live } = project
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-4 text-sm font-medium">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
              <FiGithub /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
