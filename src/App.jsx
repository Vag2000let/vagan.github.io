import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Header,
  Skills,
  Projects,
  Strengths,
  ProfessionalValues,
  Roadmap,
  Contact,
  ThemeToggle
} from '@/components'

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
              <ProfessionalValues id="values" />
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
