import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const validateForm = () => {
    if (!form.name.trim()) return 'Please enter your name'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Please enter a valid email'
    if (!form.message.trim()) return 'Please enter a message'
    return ''
  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    // Simulate sending
    setTimeout(() => {
      setSent(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setLoading(false)
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Get In <span className="accent">Touch</span></h2>

      <div className="contact-form">
        {sent && (
          <div className="alert alert-success text-center mb-4" style={{ fontSize: '1.5rem', borderRadius: '1rem', padding: '1.2rem' }}>
            ✅ Message sent! I'll get back to you soon.
          </div>
        )}
        {error && (
          <div className="alert alert-danger text-center mb-4" style={{ fontSize: '1.3rem', borderRadius: '1rem', padding: '1rem' }}>
            ❌ {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input 
              className="form-ctrl" 
              name="name" 
              placeholder="Full Name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              disabled={loading}
            />
            <input 
              className="form-ctrl" 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              value={form.email} 
              onChange={handleChange} 
              required 
              disabled={loading}
            />
          </div>
          <div className="input-row">
            <input 
              className="form-ctrl" 
              name="phone" 
              type="tel" 
              placeholder="Phone Number" 
              value={form.phone} 
              onChange={handleChange}
              disabled={loading}
            />
            <input 
              className="form-ctrl" 
              name="subject" 
              placeholder="Subject" 
              value={form.subject} 
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <textarea 
            className="form-ctrl" 
            name="message" 
            placeholder="Your Message" 
            value={form.message} 
            onChange={handleChange} 
            required 
            disabled={loading}
          />
          <div className="submit-row">
            <button type="submit" className="btn-glow" disabled={loading}>
              <i className={`bx ${loading ? 'bx-loader-alt bx-spin' : 'bx-send'}`} /> 
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
