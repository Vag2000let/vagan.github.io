import { motion } from 'framer-motion'
import SkillCategory from './SkillCategory'
import './skills.scss'

const skillsData = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Redux/RTK', 'Angular', 'D3.js']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'WebSocket', 'Sequelize']
  },
  {
    title: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Pact']
  },
  {
    title: 'UI/UX',
    items: ['Material-UI', 'Styled Components', 'Figma', 'Storybook']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Технические навыки</h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} title={category.title} items={category.items} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
