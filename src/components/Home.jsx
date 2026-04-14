import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { SOCIAL_LINKS } from '../constants'
import homeProfileImage from '../Assets/images/19March2026.png'
import resumePdf from '../Assets/Rajnish_BTech_CSE_2023_GenAI.pdf'

export default function Home() {
  const typedRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['GenAI Developer', 'Python Full Stack AI Developer', 'Python Developer', 'AI Developer'],
      typeSpeed: 75, backSpeed: 60, backDelay: 1400, loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section className="home" id="home">
      <div className="home-img">
        <div className="img-ring">
          <img
            ref={imgRef}
            src={homeProfileImage}
            alt="Rajnish"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="img-placeholder" style={{ display: 'none' }}>
            <i className="bx bxs-user" />
          </div>
        </div>
      </div>

      <div className="home-content">
        <p className="greeting">// Hello, World</p>
        <h1>Rajnish Kumar<br />Sharma</h1>
        <div className="typed-wrap">
          &gt;&nbsp;<span ref={typedRef} />
        </div>
        <p>
          Passionate AI &amp; Full Stack Developer specialising in Python, Django, GenAI, and modern
          web technologies. Building intelligent, scalable applications from concept to deployment.
        </p>

        <div className="social-icons">
          {SOCIAL_LINKS.map(s => (
            <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              <i className={`bx ${s.icon}`} />
            </a>
          ))}
        </div>

        <a href={resumePdf} className="btn-glow" download>
          <i className="bx bx-download" /> Download CV
        </a>
      </div>
    </section>
  )
}
