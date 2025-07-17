import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@components/Header/Header.jsx'
import Skills from '@components/Skills/Skills.jsx'
import Projects from '@components/Projects/Projects.jsx'
import Strengths from '@components/Strengths/Strengths'
import Values from '@components/Values/Values'
import Roadmap from '@components/Roadmap/Roadmap'
import Contact from '@components/Contact/Contact'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle.jsx'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="container"
        >
          {activeSection === 'home' && (
            <>
              <Header activeSection={activeSection} setActiveSection={setActiveSection} />
              <Skills id="skills" />
              <Projects id="projects" />
              <Strengths id="strengths" />
              <Values id="values" />
              <Roadmap id="roadmap" />
              <Contact id="contact" />
              <ThemeToggle />
            </>
          )}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
