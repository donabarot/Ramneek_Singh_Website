'use client'

export default function About() {
  const credentials = [
    { label: 'Tradition', value: 'Indore Gharana' },
    { label: 'Guru', value: 'Pt. [Guru Name]' },
    { label: 'Training', value: '25+ years' },
    { label: 'Based in', value: 'Toronto, Canada' },
  ]

  return (
    <section id="about" style={{
      padding: 'var(--section-pad) 0',
      background: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Red accent block */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '35%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(139,26,26,0.07) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
      }}>
        {/* Left: image */}
        <div style={{ position: 'relative' }}>
          {/* Gold frame decoration */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid rgba(201,168,76,0.2)',
            zIndex: 0,
          }} />
          <div style={{
            position: 'relative',
            zIndex: 1,
            aspectRatio: '3/4',
            background: 'linear-gradient(160deg, #2A1010 0%, #1A0A0A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(201,168,76,0.1)',
          }}>
            {/* Replace with <img src="/images/about.jpg" alt="..." style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>Artist Photo</span>
          </div>

          {/* Floating credentials card */}
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            background: 'var(--crimson-dark)',
            border: '1px solid rgba(201,168,76,0.2)',
            padding: '1.5rem',
            zIndex: 2,
            minWidth: '200px',
          }}>
            {credentials.map(c => (
              <div key={c.label} style={{ marginBottom: '0.75rem' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-muted)',
                  marginBottom: '2px',
                }}>{c.label}</div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  color: 'var(--cream)',
                }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: content */}
        <div>
          <div className="section-label" style={{ marginBottom: '1rem' }}>The Artist</div>

          <h2 className="section-heading" style={{ marginBottom: '0.5rem' }}>
            A Voice Rooted in
          </h2>
          <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
            <em>Ancient Tradition</em>
          </h2>

          <div className="ornament">
            <div className="ornament-diamond" />
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            color: 'var(--cream-dark)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
            opacity: 0.85,
          }}>
           SUBJECT TO CHANGE - Ramneek Singh is a distinguished exponent of Hindustani classical vocal music, carrying forward the legacy of the Indore tradition. Trained under the tutelage of the legendary Pt. [Guru Name], she has spent over two decades mastering the intricate architecture of raag, taal, and bhav.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            color: 'var(--cream-dark)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            opacity: 0.85,
          }}>
        // SUBJECT TO CHANGE - Her performances, whether an intimate mehfil or a grand concert stage carry audiences into a world where each raag is a living emotion, each taan a flight of the soul. She has performed at [Festival Name], [Festival Name], and prestigious cultural institutions across the globe.
          </p>

          {/* Highlight tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['Khayal', 'Thumri', 'Dadra', 'Bhajan', 'Tappa', 'Ghazal'].map(genre => (
              <span key={genre} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '0.4rem 1rem',
              }}>{genre}</span>
            ))}
          </div>

          <a href="#contact" className="btn-ghost">Invite to Perform →</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  )
}
