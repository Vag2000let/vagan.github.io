import { useState, useEffect, useMemo } from 'react'
import { lightTheme, darkTheme } from './theme'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode
      ? JSON.parse(savedMode)
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    const root = document.documentElement
    root.style.setProperty('--bg-body', theme.body)
    root.style.setProperty('--text-color', theme.text)
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--secondary', theme.secondary)
    root.style.setProperty('--primary-rgb', theme.primaryRgb)
    root.style.setProperty('--card-bg', theme.cardBg)
  }, [isDarkMode, theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
