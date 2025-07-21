import { motion } from 'framer-motion'
import RoadmapItem from './RoadmapItem'
import './roadmap.scss'

const roadmapItems = [
  {
    title: 'Освоение Kubernetes',
    description: 'Глубокое изучение оркестрации контейнеров и облачных технологий',
    status: 'progress',
    timeline: '2025'
  },
  {
    title: 'AI-агенты в разработке',
    description: 'Исследование возможностей применения искусственного интеллекта в веб-разработке',
    status: 'progress',
    timeline: '2025'
  },
  {
    title: 'Cloud Native подходы',
    description: 'Расширение экспертизы в области облачных технологий и serverless архитектур',
    status: 'planned',
    timeline: '2025'
  },
  {
    title: 'Продвинутая анимация',
    description: 'Изучение Three.js и продвинутых техник анимации интерфейсов',
    status: 'future',
    timeline: '2025+'
  }
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Мои планы развития</h2>

        <div className="roadmap-container">
          {roadmapItems.map((item, index) => (
            <RoadmapItem key={index} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
