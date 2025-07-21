import { motion } from 'framer-motion'
import ProfessionalValueCard from './ProfessionalValueCard'
import './professionalValues.scss'

const values = [
  {
    title: 'Качество',
    description: 'Стремление к созданию продуктов высочайшего качества.'
  },
  {
    title: 'Ответственность',
    description: 'Полная ответственность за свои решения и реализованные решения.'
  },
  {
    title: 'Прозрачность',
    description: 'Честность и открытость в коммуникации.'
  },
  {
    title: 'Развитие',
    description: 'Постоянное обучение и совершенствование навыков.'
  }
]

export default function ProfessionalValues() {
  return (
    <section id="values" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Профессиональные ценности</h2>

        <div className="values-grid">
          {values.map((value, index) => (
            <ProfessionalValueCard
              key={index}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
