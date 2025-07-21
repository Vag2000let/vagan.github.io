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
          stiffness: 30, // Уменьшаем жесткость
          damping: 10, // Добавляем демпфирование
          mass: 0.5, // Уменьшаем массу для более легкого движения
          delay: index * 0.15 // Увеличиваем задержку между карточками
        }
      }}
      whileHover={{
        rotateZ: 0,
        scale: 1.05,
        zIndex: 10,
        transition: {
          type: 'spring',
          stiffness: 50,
          damping: 10
        }
      }}
      viewport={{ once: false, margin: '0px 0px -100px 0px' }}
      style={{
        originX: 0.5,
        originY: 1,
        transformStyle: 'preserve-3d' // Добавляем 3D-перспективу
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
                delay: i * 0.07 + 0.3,
                stiffness: 100
              }
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
