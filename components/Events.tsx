'use client'

export default function Events() {
  const upcoming = [
    {
      date: { day: '15', month: 'Aug', year: '2025' },
      title: 'Independence Day Classical Concert',
      venue: 'Nehru Centre Auditorium',
      city: 'Mumbai, India',
      type: 'Solo Concert',
      ticketUrl: '#',
    },
    {
      date: { day: '02', month: 'Sep', year: '2025' },
      title: 'Saptak Annual Music Festival',
      venue: 'Saptak Festival Grounds',
      city: 'Ahmedabad, India',
      type: 'Festival Performance',
      ticketUrl: '#',
    },
    {
      date: { day: '18', month: 'Oct', year: '2025' },
      title: 'Indian Cultural Evening',
      venue: 'Royal Festival Hall',
      city: 'London, UK',
      type: 'International Tour',
      ticketUrl: '#',
    },
    {
      date: { day: '05', month: 'Nov', year: '2025' },
      title: 'Dover Lane Music Conference',
      venue: 'Nazrul Mancha',
      city: 'Kolkata, India',
      type: 'Invited Artist',
      ticketUrl: '#',
    },
  ]

  const typeColors: Record<string, string> = {
    'Solo Concert': 'var(--crimson)',
    'Festival Performance': 'var(--gold-muted)',
    'International Tour': '#2A5C8B',
    'Invited Artist': '#3D6B2A',
  }

  return (
    <section id="events" style={{
      padding: 'var(--section-pad) 0',
      background: 'var(--ink)',
      position: 'relative',
    }}>
      {/* Vertical gold line */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '10%',
        bottom: '10%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)',
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Performances</div>
          <h2 className="section-heading">
            Upcoming <em>Concerts</em>
          </h2>
          <div className="ornament" style={{ maxWidth: '300px', margin: '1.5rem auto' }}>
            <div className="ornament-diamond" />
          </div>
        </div>

        {/* Events list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {upcoming.map((event, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2rem 0',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
                transition: 'background 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Date block */}
              <div style={{
                textAlign: 'center',
                borderRight: '1px solid rgba(201,168,76,0.15)',
                paddingRight: '2.5rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>{event.date.day}</div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                }}>{event.date.month} {event.date.year}</div>
              </div>

              {/* Event info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--cream)',
                    background: typeColors[event.type] || 'var(--crimson)',
                    padding: '2px 10px',
                    opacity: 0.9,
                  }}>{event.type}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  marginBottom: '0.3rem',
                }}>{event.title}</h3>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                }}>
                  {event.venue} &nbsp;·&nbsp; {event.city}
                </div>
              </div>

              {/* CTA */}
              <div>
                <a href={event.ticketUrl} className="btn-ghost" style={{
                  fontSize: '0.55rem',
                  padding: '0.6rem 1.2rem',
                  whiteSpace: 'nowrap',
                }}>
                  Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Past performances note */}
        <div style={{
          marginTop: '4rem',
          padding: '2.5rem',
          border: '1px solid rgba(201,168,76,0.1)',
          background: 'rgba(201,168,76,0.03)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Past Stages</div>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              color: 'var(--text-light)',
            }}>
              Sawai Gandharva Bhimsen Mahotsav · ITC Sangeet Sammelan · Tansen Samaroh · Dover Lane Conference · Haridas Sangeet Sammelan · Edinburgh Festival
            </p>
          </div>
          <a href="#contact" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
            Book for Your Event
          </a>
        </div>
      </div>
    </section>
  )
}
