import { motion } from 'framer-motion'
import './values.scss'

export default function ValueCard({ title, description }) {
  return (
    <motion.div
      className="value-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

// className={`roadmap-item ${item.status}`}
// initial={{ opacity: 0, y: 20 }}
// whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true, margin: '-50px' }}
// transition={{ delay: index * 0.1 }}
// whileHover={{ scale: 1.02 }}

// className="value-card"
// initial={{ opacity: 0, y: 20 }}
// whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true }}
// transition={{ delay: index * 0.05, duration: 0.3 }}
