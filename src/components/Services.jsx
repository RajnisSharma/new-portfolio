import { SERVICES } from '../constants'

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span className="accent">Services</span></h2>
      <div className="services-grid">
        {SERVICES.map((s, idx) => (
          <div className="service-card" key={s.title} style={{ animationDelay: `${idx * 0.1}s` }}>
            <i className={`bx ${s.icon} icon`} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
