import { useState } from 'react'
import { FiSend, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import Section from './ui/Section'
import { profile, formspreeId } from '../data/portfolio'

const inputClass =
  'w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100 dark:placeholder:text-zinc-600'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const { socials } = profile
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: FiMail },
    socials.github && { href: socials.github, label: 'GitHub', icon: FiGithub },
    socials.linkedin && { href: socials.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  ].filter(Boolean)

  return (
    <Section id="contact" number="07" title="contact" meta="GET IN TOUCH">
      <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Have an internship opportunity, a project idea, or just want to connect? Send a message and I'll get back
            to you as soon as I can.
          </p>
          <div className="space-y-2 pt-2">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2.5 font-mono text-xs text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" aria-label="Your name" className={inputClass} />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your message"
            aria-label="Your message"
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-emerald-600 disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-emerald-400"
          >
            <FiSend className="h-3.5 w-3.5" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-xs text-emerald-600 dark:text-emerald-400">Message sent! Thanks.</p>}
          {status === 'error' && (
            <p className="text-xs text-red-500">Something went wrong. Please email me directly instead.</p>
          )}
        </form>
      </div>
    </Section>
  )
}
