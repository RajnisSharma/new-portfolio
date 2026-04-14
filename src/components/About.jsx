import { SKILLS } from '../constants'
import aboutProfileImage from '../Assets/images/ProfilePic.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-img">
          <div className="hexagon-wrap">
            <img
              src={aboutProfileImage}
              alt="About Rajnish"
              onError={e => {
                e.target.style.display = 'none'
                e.target.parentElement.style.background = 'var(--bg3)'
              }}
            />
          </div>
        </div>

        <div className="about-content">
          <h2 className="heading">About <span className="accent">Me</span></h2>
          <span className="role-tag">✦ Full Stack AI Developer</span>
          <p>
            I build intelligent, scalable web applications using Python, Django, and cutting-edge GenAI
            tools. From RESTful APIs to LLM-powered workflows, I focus on clean architecture and
            real-world impact.
          </p>
          <p>
            On the frontend I craft responsive interfaces with React.js and Bootstrap. My stack spans
            SQL databases, vector stores, Git workflows, and cloud deployment — always with security
            and performance in mind.
          </p>

          <div className="skills-grid">
            {SKILLS.map(s => <span className="skill-tag" key={s}>{s}</span>)}
          </div>

          <a href="#contact" className="btn-glow">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}
