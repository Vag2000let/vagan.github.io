import { motion } from 'framer-motion'
import {
  FaCode,
  FaProjectDiagram,
  FaStar,
  FaLightbulb,
  FaMapMarkedAlt,
  FaEnvelope
} from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
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
  return (
    <header className="header">
      <div className="header-container">
        <motion.div
          className="photo-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img src={profilePhoto} alt="Фото профиля" className="profile-photo" />
        </motion.div>
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
