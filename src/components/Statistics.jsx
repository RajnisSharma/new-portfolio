import React from 'react'
import { useCounter } from '../hooks/useAnimations'

const stats = [
  { icon: 'bx-briefcase', number: 20, label: 'Projects Completed', suffix: '+' },
  { icon: 'bx-happy', number: 15, label: 'Happy Clients', suffix: '+' },
  { icon: 'bx-code-curly', number: 5, label: 'Years Experience', suffix: '+' },
  { icon: 'bx-award', number: 10, label: 'Awards & Recognition', suffix: '+' },
]

export default function Statistics() {
  const counters = stats.map(stat => ({
    ...stat,
    count: useCounter(stat.number, 2500),
  }))

  return (
    <section className="statistics" id="statistics">
      <div className="stats-container">
        <div className="stats-intro">
          <h2 className="heading">Proven Track <span className="accent">Record</span></h2>
          <p>Delivering excellence through years of dedicated development and innovation</p>
        </div>

        <div className="stats-grid">
          {counters.map((stat, idx) => (
            <div className="stat-card" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="stat-icon">
                <i className={`bx ${stat.icon}`} />
              </div>
              <div className="stat-number">
                {stat.count}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
