import { motion } from 'framer-motion'
import './professionalValues.scss'

export default function ProfessionalValueCard({ title, description }) {
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
