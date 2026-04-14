import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Patel',
    role: 'Product Manager',
    company: 'TechVentures Inc',
    image: 'https://i.pravatar.cc/150?img=1',
    text: 'Rajnish delivered our AI chatbot project ahead of schedule. His deep understanding of LLMs and clean code practices made the integration seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'CTO',
    company: 'DataFlow Solutions',
    text: 'Outstanding full-stack developer. The scalability and performance optimizations he implemented increased our system throughput by 40%.',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Kumar',
    role: 'Founder',
    company: 'InnovateLabs',
    text: 'Working with Rajnish on our Django backend was a game-changer. His attention to details and problem-solving skills are exceptional.',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Sharma',
    role: 'Design Lead',
    company: 'CreativeStudio',
    text: 'Perfect collaboration! Rajnish turned our UI designs into responsive, accessible React components with pixel-perfect accuracy.',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="heading">Client <span className="accent">Testimonials</span></h2>

      <div className="testimonial-carousel">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="rating">
              {Array(testimonial.rating).fill().map((_, i) => (
                <i key={i} className="bx bxs-star" />
              ))}
            </div>
            
            <p className="testimonial-text">"{testimonial.text}"</p>
            
            <div className="testimonial-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                onError={e => e.target.src = 'https://i.pravatar.cc/150?u=default'}
              />
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role} at <span>{testimonial.company}</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn prev" onClick={prev} aria-label="Previous testimonial">
            <i className="bx bx-chevron-left" />
          </button>
          
          <div className="carousel-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={next} aria-label="Next testimonial">
            <i className="bx bx-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
