'use client'

export default function Music() {
  const videos = [
    {
      title: 'Raag Yaman Khayal',
      subtitle: 'Sawai Gandharva Bhimsen Mahotsav, Pune',
      year: '2023',
      duration: '28 min',
      youtubeId: 'REPLACE_WITH_YOUTUBE_ID',
    },
    {
      title: 'Raag Bhairavi Thumri',
      subtitle: 'Dover Lane Music Conference, Kolkata',
      year: '2022',
      duration: '18 min',
      youtubeId: 'REPLACE_WITH_YOUTUBE_ID',
    },
    {
      title: 'Raag Darbari Vilambit Khayal',
      subtitle: 'ITC Sangeet Sammelan, Delhi',
      year: '2022',
      duration: '45 min',
      youtubeId: 'REPLACE_WITH_YOUTUBE_ID',
    },
  ]

  const raags = [
    'Yaman', 'Bhairav', 'Bhairavi', 'Darbari', 'Bageshri',
    'Marwa', 'Puriya Dhanashri', 'Kedar', 'Hameer', 'Shree',
    'Kafi', 'Jaunpuri',
  ]

  return (
    <section id="music" style={{
      padding: 'var(--section-pad) 0',
      background: 'linear-gradient(180deg, var(--ink) 0%, #140A06 100%)',
      position: 'relative',
    }}>
      {/* Top border ornament */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(to right, transparent, var(--gold-muted), transparent)',
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Listen & Watch</div>
          <h2 className="section-heading">
            Music That <em>Moves</em>
          </h2>
          <div className="ornament" style={{ maxWidth: '300px', margin: '1.5rem auto' }}>
            <div className="ornament-diamond" />
          </div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            color: 'var(--text-light)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
        SUBJECT TO CHANGE - current source from existing website.
            Selected recordings from concerts and studios a glimpse into the world of living raag.
          </p>
        </div>

        {/* Video grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem',
        }}>
          {videos.map((video, i) => (
            <div key={i} style={{
              position: 'relative',
              background: '#14090500',
              border: '1px solid rgba(201,168,76,0.15)',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}>
              {/* Thumbnail placeholder */}
              <div style={{
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #2A1010 0%, #1A0808 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Replace with actual YouTube embed or thumbnail */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  fontSize: '1.2rem',
                }}>▶</div>
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-muted)',
                  background: 'rgba(13,8,5,0.7)',
                  padding: '2px 8px',
                }}>{video.duration}</div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--crimson-light)',
                  marginBottom: '0.4rem',
                }}>{video.year}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--cream)',
                  marginBottom: '0.3rem',
                  fontStyle: 'italic',
                }}>{video.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                }}>{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Raag repertoire */}
        <div style={{
          borderTop: '1px solid rgba(201,168,76,0.1)',
          paddingTop: '4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Repertoire</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 400,
              color: 'var(--cream)',
              fontStyle: 'italic',
              lineHeight: 1.2,
            }}>Raags in Mastery</h3>
            <p style={{
              marginTop: '1rem',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-serif)',
            }}>
              A selection of raags regularly performed in concert.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', paddingTop: '0.5rem' }}>
            {raags.map(raag => (
              <span key={raag} style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--cream-dark)',
                background: 'rgba(139,26,26,0.15)',
                border: '1px solid rgba(139,26,26,0.3)',
                padding: '0.35rem 1rem',
                transition: 'all 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(139,26,26,0.3)'
                e.currentTarget.style.color = 'var(--gold-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(139,26,26,0.15)'
                e.currentTarget.style.color = 'var(--cream-dark)'
              }}>
                {raag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #music .repertoire-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
