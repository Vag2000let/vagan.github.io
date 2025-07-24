import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollToTopButton.scss'

const ScrollToTopButton = () => {
  const [isNearBottom, setIsNearBottom] = useState(false)

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const distanceToBottom = pageHeight - (scrollPosition + viewportHeight)

      setIsNearBottom(distanceToBottom < 500)
    }

    window.addEventListener('scroll', checkScrollPosition)

    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isNearBottom && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
