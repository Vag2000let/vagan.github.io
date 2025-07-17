import { motion } from 'framer-motion'
import { FaDocker, FaRobot, FaCloud, FaCode } from 'react-icons/fa'
import './roadmap.scss'

const getIcon = (title) => {
  if (title.includes('Kubernetes')) return <FaDocker />
  if (title.includes('AI')) return <FaRobot />
  if (title.includes('Cloud')) return <FaCloud />
  return <FaCode />
}

export default function RoadmapItem({ item }) {
  return (
    <motion.div
      className={`roadmap-item ${item.status}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="roadmap-icon">{getIcon(item.title)}</div>
      <div className="roadmap-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="roadmap-meta">
          <span className={`status ${item.status}`}>
            {item.status === 'in-progress' && 'В процессе'}
            {item.status === 'planned' && 'Запланировано'}
            {item.status === 'future' && 'Будущее'}
          </span>
          <span className="timeline">{item.timeline}</span>
        </div>
      </div>
    </motion.div>
  )
}
