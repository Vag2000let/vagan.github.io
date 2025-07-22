import { motion } from 'framer-motion'
import './skills.scss'

export default function SkillCategory({ title, items, index, total }) {
  const fanAngle = 15
  const angleStep = (fanAngle * 2) / (total - 1)
  const rotation = -fanAngle + index * angleStep

  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 20, rotateZ: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateZ: rotation,
        transition: {
          type: 'spring',
          stiffness: 30,
          damping: 10,
          mass: 0.5,
          delay: index * 0.1,
          restDelta: 0.001
        }
      }}
      whileHover={{
        rotateZ: 0,
        scale: 1.05,
        zIndex: 10,
        transition: {
          type: 'spring',
          stiffness: 50,
          damping: 10,
          delay: 0
        }
      }}
      viewport={{ once: false, margin: '0px 0px -50px 0px' }}
      style={{
        originX: 0.5,
        originY: 1,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((skill, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring',
                delay: i * 0.05 + 0.2,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
