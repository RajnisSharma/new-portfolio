import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import { useWelcomeMessage } from './hooks/useAnimations'

const THEME_STORAGE_KEY = 'portfolio-theme-mode'

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialThemeMode() {
  if (typeof window === 'undefined') return 'system'

  const savedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY)
  return ['light', 'dark', 'system'].includes(savedThemeMode) ? savedThemeMode : 'system'
}

export default function App() {
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [themeMode, setThemeMode] = useState(getInitialThemeMode)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)

  useWelcomeMessage("Welcome to Rajnish Sharma's portfolio.", voiceEnabled)

  const activeTheme = themeMode === 'system' ? systemTheme : themeMode

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = event => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncSystemTheme)
      return () => mediaQuery.removeEventListener('change', syncSystemTheme)
    }

    mediaQuery.addListener(syncSystemTheme)
    return () => mediaQuery.removeListener(syncSystemTheme)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme
    document.documentElement.style.colorScheme = activeTheme
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', activeTheme === 'dark' ? '#05050f' : '#f5f7fb')
    }
  }, [activeTheme, themeMode])

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Header
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        activeTheme={activeTheme}
      />
      <main>
        <Home />
        <About />
        <Services />
        <Statistics />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
