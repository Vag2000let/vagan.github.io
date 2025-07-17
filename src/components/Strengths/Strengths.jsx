import { motion } from 'framer-motion'
import StrengthCard from './StrengthCard'
import './strengths.scss'

const strengths = [
  {
    icon: '💻',
    title: 'Техническая экспертиза',
    description: 'Глубокие знания современных веб-технологий и архитектурных подходов.'
  },
  {
    icon: '🧩',
    title: 'Качество кода',
    description: 'Чистый, поддерживаемый код с полным покрытием тестами.'
  },
  {
    icon: '👥',
    title: 'Командная работа',
    description: 'Готовность помогать коллегам и совместно решать проблемы.'
  },
  {
    icon: '⏱️',
    title: 'Самоорганизация',
    description: 'Высокий уровень ответственности и эффективное управление временем.'
  },
  {
    icon: '📊',
    title: 'Бизнес-ориентированность',
    description: 'Понимание потребностей бизнеса и конечных пользователей.'
  },
  {
    icon: '📚',
    title: 'Непрерывное развитие',
    description: 'Активное изучение новых технологий и совершенствование навыков.'
  }
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Мои сильные стороны</h2>

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
