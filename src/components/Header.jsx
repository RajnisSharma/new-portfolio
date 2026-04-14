import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../constants'
import logoImage from '../Assets/raj_circle.png'

const THEME_OPTIONS = [
  { mode: 'light', icon: 'bx-sun', label: 'Light mode' },
  { mode: 'system', icon: 'bx-laptop', label: 'Use system theme' },
  { mode: 'dark', icon: 'bx-moon', label: 'Dark mode' },
]

export default function Header({ voiceEnabled, setVoiceEnabled, themeMode, setThemeMode, activeTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 50); setOpen(false) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)
  const toggleVoice = () => setVoiceEnabled(!voiceEnabled)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logoImage} alt="logo" onError={e => e.target.style.display = 'none'} />
          Rajnish<span className="logo-dot">.</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l}><a href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a></li>
          ))}
        </ul>

        <div className="header-actions">
          <div className="theme-switcher" role="group" aria-label="Theme mode">
            {THEME_OPTIONS.map(({ mode, icon, label }) => (
              <button
                key={mode}
                type="button"
                className={`theme-option ${themeMode === mode ? 'active' : ''}`}
                onClick={() => setThemeMode(mode)}
                title={mode === 'system' ? `${label} (${activeTheme} active)` : label}
                aria-label={mode === 'system' ? `${label}. ${activeTheme} active.` : label}
                aria-pressed={themeMode === mode}
              >
                <i className={`bx ${icon}`} />
              </button>
            ))}
          </div>

          <button 
            type="button"
            className="voice-toggle" 
            onClick={toggleVoice}
            title={voiceEnabled ? "Mute voice" : "Unmute voice"}
            aria-label="Voice toggle"
          >
            <i className={`bx ${voiceEnabled ? 'bx-volume-full' : 'bx-volume-mute'}`} />
          </button>

          <button type="button" className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu" title="Menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l}`} onClick={closeMenu}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
      </nav>
    </>
  )
}
