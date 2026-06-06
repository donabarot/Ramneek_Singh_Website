'use client'

export default function Footer() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Music', href: '#music' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Press', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer style={{
      background: 'var(--ink)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '4rem 0 2rem',
    }}>
      {/* Top border ornament */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(to right, transparent, var(--crimson), var(--gold), var(--crimson), transparent)',
        marginBottom: '4rem',
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '4rem',
        }}>
          {/* Left: bio snippet */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--cream)',
              marginBottom: '1rem',
            }}>Vidushi Ramneek Singh</h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '300px',
            }}>
              Hindustani Classical Vocalist · Indore Gharana · Toronto, Canada       </p>
          </div>

          {/* Center: ornament */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '1px',
              height: '60px',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              margin: '0 auto 1rem',
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              background: 'var(--gold)',
              transform: 'rotate(45deg)',
              margin: '0 auto',
            }} />
          </div>

          {/* Right: nav links */}
          <div style={{ textAlign: 'right' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Navigation</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)',
          }}>
            © {new Date().getFullYear()} Vidushi Ramneek Singh. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.58rem',
            letterSpacing: '0.12em',
            color: 'rgba(158,139,114,0.4)',
          }}>
            सा रे ग म प ध नि सा
          </p>
        </div>
      </div>
    </footer>
  )
}
