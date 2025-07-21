import { motion } from 'framer-motion'
import './skills.scss'

export default function SkillCategory({ title, items }) {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
