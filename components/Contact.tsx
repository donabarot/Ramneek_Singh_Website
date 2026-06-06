'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    eventDate: '',
    city: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Connect to your email service (EmailJS, Resend, etc.) here
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: 0,
    color: 'var(--cream)',
    fontFamily: 'var(--font-serif)',
    fontSize: '1rem',
    padding: '0.85rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const eventTypes = [
    'Classical Concert', 'Music Festival', 'Corporate Event',
    'Wedding / Private Function', 'Cultural Programme', 'Workshop / Masterclass', 'Other',
  ]

  return (
    <section id="contact" style={{
      padding: 'var(--section-pad) 0',
      background: 'var(--ink-soft)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Red gradient bg */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse at bottom right, rgba(139,26,26,0.12) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: '6rem',
        alignItems: 'start',
      }}>
        {/* Left: info */}
        <div style={{ position: 'sticky', top: '8rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Bookings & Enquiries</div>
          <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
            Invite Her to <em>Your Stage</em>
          </h2>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            Whether you are organizing a classical music festival, a cultural evening, or a private mehfil — we would love to hear from you. Please share your event details and we will get back to you within 48 hours.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { label: 'Email', value: 'bookings@[artistname].com', icon: '✉' },
              { label: 'Management', value: '+91 98XXX XXXXX', icon: '☎' },
              { label: 'Based in', value: 'Mumbai / Delhi, India', icon: '◎' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                <span style={{ color: 'var(--gold)', fontSize: '1rem', marginTop: '2px', minWidth: '20px' }}>
                  {item.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '2px',
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    color: 'var(--cream)',
                  }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Follow</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['YouTube', 'Instagram', 'Facebook', 'Spotify'].map(platform => (
                <a key={platform} href="#" style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  padding: '0.5rem 0.75rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--gold)'
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                }}>
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div style={{
              padding: '4rem',
              border: '1px solid rgba(201,168,76,0.2)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '1rem' }}>✓</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontStyle: 'italic',
                color: 'var(--cream)',
                marginBottom: '1rem',
              }}>Thank You</h3>
              <p style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--text-light)',
              }}>
                Your enquiry has been received. We will be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    style={inputStyle}
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}>Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}>Organization / Festival Name</label>
                <input
                  type="text"
                  placeholder="e.g. Saptak Music Festival"
                  style={inputStyle}
                  value={formData.organization}
                  onChange={e => setFormData({...formData, organization: e.target.value})}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                />
              </div>

              {/* Event type */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}>Event Type *</label>
                <select
                  required
                  style={{...inputStyle, cursor: 'pointer'}}
                  value={formData.eventType}
                  onChange={e => setFormData({...formData, eventType: e.target.value})}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                >
                  <option value="" disabled>Select event type</option>
                  {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}>Event Date</label>
                  <input
                    type="date"
                    style={inputStyle}
                    value={formData.eventDate}
                    onChange={e => setFormData({...formData, eventDate: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}>City / Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, India"
                    style={inputStyle}
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}>Tell us about your event *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Brief description of the event, audience size, stage requirements, etc."
                  style={{...inputStyle, resize: 'vertical', minHeight: '130px'}}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.6)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.2)')}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Send Booking Enquiry
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(158,139,114,0.5);
        }
        select option {
          background: #1A1208;
          color: var(--cream);
        }
        @media (max-width: 900px) {
          #contact > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #contact > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
