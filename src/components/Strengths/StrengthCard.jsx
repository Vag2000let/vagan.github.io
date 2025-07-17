import { motion } from 'framer-motion'
import './strengths.scss'

export default function StrengthCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="strength-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="strength-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}
