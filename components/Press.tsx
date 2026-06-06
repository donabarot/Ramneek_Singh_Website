'use client'

export default function Press() {
  const testimonials = [
    {
      quote: "Her rendition of Raag Darbari was nothing short of transcendent — a rare depth of emotion that left the audience spellbound.",
      author: "Pt. [Respected Name]",
      role: "Padma Bhushan Awardee, Hindustani Vocalist",
    },
    {
      quote: "An extraordinary talent with complete command over laya and swar. One of the finest young vocalists in the tradition today.",
      author: "[Organizer Name]",
      role: "Festival Director, Saptak Music Festival",
    },
    {
      quote: "Her music carries the soul of the gharana while breathing fresh life into every performance. A truly world-class artist.",
      author: "[Reviewer Name]",
      role: "Music Critic, The Hindu",
    },
  ]

  const pressLogos = [
    'The Hindu', 'Times of India', 'Hindustan Times', 'BBC Asian Network', 'Doordarshan', 'Outlook',
  ]

  const awards = [
    { title: 'Sur Mani Award', org: 'Sur Singar Samsad', year: '2023' },
    { title: 'Young Musician of the Year', org: 'Saptak Foundation', year: '2021' },
    { title: '[Award Name]', org: '[Issuing Organization]', year: '2019' },
    { title: '[Award Name]', org: '[Issuing Organization]', year: '2017' },
  ]

  return (
    <section id="press" style={{
      padding: 'var(--section-pad) 0',
      background: 'linear-gradient(180deg, #140A06 0%, var(--ink) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large decorative quote mark */}
      <div style={{
        position: 'absolute',
        top: '4rem',
        left: '5%',
        fontFamily: 'var(--font-display)',
        fontSize: '25rem',
        color: 'rgba(139,26,26,0.05)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
      }}>"</div>

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Recognition</div>
          <h2 className="section-heading">
            What the World <em>Says</em>
          </h2>
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '2.5rem',
              border: '1px solid rgba(201,168,76,0.12)',
              background: 'rgba(201,168,76,0.02)',
              position: 'relative',
            }}>
              {/* Gold top accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '2.5rem',
                right: '2.5rem',
                height: '2px',
                background: 'linear-gradient(to right, var(--crimson), var(--gold-muted))',
              }} />

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--cream-dark)',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}>"{t.quote}"</p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: '32px',
                  height: '1px',
                  background: 'var(--gold)',
                }} />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--cream)',
                  }}>{t.author}</div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards + Press logos grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          borderTop: '1px solid rgba(201,168,76,0.1)',
          paddingTop: '4rem',
        }}>
          {/* Awards */}
          <div>
            <div className="section-label" style={{ marginBottom: '2rem' }}>Awards & Felicitations</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {awards.map((award, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid rgba(201,168,76,0.06)',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--gold)',
                    fontSize: '0.9rem',
                  }}>★</div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      color: 'var(--cream)',
                    }}>{award.title}</div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                    }}>{award.org} · {award.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press logos */}
          <div>
            <div className="section-label" style={{ marginBottom: '2rem' }}>Featured In</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {pressLogos.map(logo => (
                <div key={logo} style={{
                  padding: '1rem',
                  border: '1px solid rgba(201,168,76,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}>
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
