import { motion } from 'framer-motion'
import './themeToggle.scss'
import { useTheme } from '../../context/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme.isDarkMode ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.1 }}
    >
      <motion.span
        key={theme.toggleIcon}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme.toggleIcon}
      </motion.span>
    </motion.button>
  )
}
