import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaProjectDiagram,
  FaStar,
  FaLightbulb,
  FaMapMarkedAlt,
  FaEnvelope
} from 'react-icons/fa'
import profilePhoto from '../../assets/images/profile-photo.jpg'
import './header.scss'

const navItems = [
  { id: 'skills', icon: <FaCode />, label: 'Навыки' },
  { id: 'projects', icon: <FaProjectDiagram />, label: 'Проекты' },
  { id: 'strengths', icon: <FaStar />, label: 'Сильные стороны' },
  { id: 'values', icon: <FaLightbulb />, label: 'Ценности' },
  { id: 'roadmap', icon: <FaMapMarkedAlt />, label: 'Развитие' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Контакты' }
]

export default function Header({ activeSection, setActiveSection }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div
          className="photo-container"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover && (
            <motion.div
              className="wave-hand"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: [0, 14, -8, 14, -4, 0]
              }}
              transition={{
                opacity: { duration: 0.3 },
                rotate: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            >
              👋
            </motion.div>
          )}

          <img src={profilePhoto} alt="Фото профиля" className="photo-profile" />
        </div>

        <motion.div
          className="header-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gradient-text">Привет! Меня зовут Ваган, я фронтенд-разработчик</h2>
          <p className="header-subtitle">
            Разрабатываю приложения используя современные технологии с естественной и предсказуемой
            логикой взаимодействия
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <motion.li key={item.id} whileHover={{ scaleY: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
