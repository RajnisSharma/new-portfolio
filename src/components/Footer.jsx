import { SOCIAL_LINKS } from '../constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        {SOCIAL_LINKS.map(s => (
          <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
            <i className={`bx ${s.icon}`} />
          </a>
        ))}
      </div>
      <p className="copy">
        &copy; {new Date().getFullYear()} <span>Rajnish Kumar Sharma</span> — All Rights Reserved
      </p>
    </footer>
  )
}
