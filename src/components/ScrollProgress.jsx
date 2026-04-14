import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      const progressBar = document.querySelector('.scroll-progress')
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="scroll-progress" />
}
