// ============================================================
//  LAHAT NG CONTENT NG PORTFOLIO MO NANDITO.
// ============================================================

export const profile = {
  name: 'Melbourne Robel Biticon',
  role: 'IT Student Intern · System Development',
  tagline:
    'BS Information Technology student specializing in System Development. I build web-based systems with Python, Flask, and SQL, from backend logic and databases to the interfaces people use every day.',
  photo: '/images/profile.svg', // palitan ng /images/profile.jpg kapag may photo ka na
  resume: '/resume.pdf',
  email: 'melbournebiticon@gmail.com',
  location: 'Majayjay, Laguna, Philippines',
  socials: {
    github: 'https://github.com/melbournebiticon',
    githubUsername: 'melbournebiticon',
    linkedin: '', // hal. 'https://linkedin.com/in/your-username'
    facebook: '',
  },
}

export const about = [
  "Hi! I'm Melbourne, a 4th-year BS Information Technology student at Laguna University, specializing in System Development, and a consistent Dean's Lister.",
  "I enjoy building systems that solve real problems. My biggest project so far is the ERP & LMS system for Liceo de Majayjay, where I worked on the LMS backend logic, PostgreSQL database design, debugging existing ERP modules, and building frontend pages that connect to the backend.",
  "I'm a problem solver who adapts quickly and loves to learn. I'm currently looking for internship opportunities where I can contribute to real-world projects and grow as a developer.",
]

// icon: key galing sa src/components/ui/TechIcon.jsx (optional)
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Flask', icon: 'flask' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    category: 'Tools & IT',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Computer Networking', icon: 'network' },
    ],
  },
  {
    category: 'Soft Skills',
    wide: true,
    items: [
      { name: 'Problem Solving' },
      { name: 'Teamwork & Collaboration' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
      { name: 'Willingness to Learn' },
    ],
  },
]

export const projects = [
  {
    title: 'Liceo ERP & LMS System',
    subtitle: 'Liceo de Majayjay · Web-Based Enterprise & Learning Platform',
    description:
      'An integrated ERP and Learning Management System built for Liceo de Majayjay to streamline academic workflows, student records, and school operations.',
    highlights: [
      'Designed backend business logic and Flask routes for academic resources, student workflows, and module data.',
      'Structured and maintained relational database schemas and queries in PostgreSQL.',
      'Debugged and fixed edge-case issues across ERP modules including billing/cashier workflows and data reconciliation.',
      'Built responsive HTML, CSS, and JavaScript interfaces connected to backend endpoints.',
    ],
    image: '/images/project-placeholder.svg', // palitan ng screenshot
    tech: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS/JS'],
    github: '', // ilagay kung public ang repo
    live: '',
  },
]

// Trainings & seminars mula sa resume. Puwede ring magdagdag ng online certs dito (may "link").
export const certifications = [
  {
    name: 'Importance of Interpersonal Communication in IT Careers',
    issuer: 'CCS, Laguna University',
    date: 'Mar 18, 2026',
    link: '',
  },
  {
    name: 'Cybersecurity',
    issuer: 'CCS, Laguna University',
    date: 'Mar 17, 2026',
    link: '',
  },
  {
    name: 'Rethink Robotics: A Hands-on Bootcamp for the New Age Tech Leaders',
    issuer: 'Laguna Sports Complex',
    date: 'Oct 9, 2025',
    link: '',
  },
  {
    name: 'Transforming Industries Through Technology: Closing the Digital Divide',
    issuer: 'CCS, Laguna University',
    date: 'Apr 8, 2025',
    link: '',
  },
  {
    name: 'The Road to IT Consulting: Creating Opportunities from Nothing',
    issuer: 'CCS, Laguna University',
    date: 'Apr 7, 2025',
    link: '',
  },
  {
    name: 'Basics of Power BI: Pros and Cons',
    issuer: 'CCS, Laguna University',
    date: 'Mar 15, 2024',
    link: '',
  },
  {
    name: 'Chatbot Using Natural Language Processing with Regex',
    issuer: 'CCS, Laguna University',
    date: 'Mar 14, 2024',
    link: '',
  },
]

export const education = [
  {
    school: 'Laguna University · Santa Cruz, Laguna',
    degree: 'BS Information Technology, Specialization in System Development',
    period: '2023 – Present',
    details: ["Dean's Lister, 1st and 2nd Semester (2025–2026)", "Dean's Lister (3rd Year)"],
  },
  {
    school: 'Liceo de Majayjay · Majayjay, Laguna',
    degree: 'Senior High School, General Academic Strand',
    period: '2021 – 2023',
    details: ['Graduated With Honors'],
  },
]

// Contact form: gumawa ng libreng account sa https://formspree.io,
// gumawa ng form, at ilagay dito ang form ID (hal. 'xyzabcd').
// Kapag blank, magbubukas na lang ng email app ang form (mailto).
export const formspreeId = ''
