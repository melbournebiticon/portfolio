import Section from './ui/Section'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" number="01" title="about" meta="WHO I AM">
      <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
