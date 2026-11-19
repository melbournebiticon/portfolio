import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import GithubActivity from './components/GithubActivity'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="lg:pl-60">
        <main className="mx-auto max-w-3xl px-6 sm:px-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <GithubActivity />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}
