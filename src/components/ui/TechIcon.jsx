import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaFigma, FaCode,
  FaPython, FaNetworkWired, FaTools,
} from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiMysql, SiFlask, SiPostgresql } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Map ng icon keys (ginagamit sa data/portfolio.js) papunta sa icon + kulay.
// Para magdagdag: i-import ang icon galing sa https://react-icons.github.io/react-icons
const icons = {
  html: [FaHtml5, '#E34F26'],
  css: [FaCss3Alt, '#1572B6'],
  javascript: [FaJs, '#F7DF1E'],
  react: [FaReact, '#61DAFB'],
  tailwind: [SiTailwindcss, '#06B6D4'],
  node: [FaNodeJs, '#5FA04E'],
  express: [SiExpress, 'currentColor'],
  php: [FaPhp, '#777BB4'],
  mysql: [SiMysql, '#4479A1'],
  mongodb: [SiMongodb, '#47A248'],
  firebase: [SiFirebase, '#FFCA28'],
  git: [FaGitAlt, '#F05032'],
  github: [FaGithub, 'currentColor'],
  vscode: [VscVscode, '#007ACC'],
  figma: [FaFigma, '#F24E1E'],
  python: [FaPython, '#3776AB'],
  flask: [SiFlask, 'currentColor'],
  postgresql: [SiPostgresql, '#4169E1'],
  network: [FaNetworkWired, '#6366F1'],
  troubleshoot: [FaTools, '#64748B'],
}

export default function TechIcon({ name, className = 'h-6 w-6' }) {
  const [Icon, color] = icons[name] ?? [FaCode, 'currentColor']
  return <Icon className={className} style={{ color }} aria-hidden="true" />
}
