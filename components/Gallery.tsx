'use client'

export default function Gallery() {
  // Replace these with actual image paths like '/images/gallery-1.jpg'
  const photos = [
    { src: '', alt: 'Performance at [Festival]', label: 'Concert', size: 'tall' },
    { src: '', alt: 'Studio session', label: 'Studio', size: 'normal' },
    { src: '', alt: 'Portrait', label: 'Portrait', size: 'normal' },
    { src: '', alt: 'On stage at [Venue]', label: 'Stage', size: 'wide' },
    { src: '', alt: 'With Guru', label: 'Guru Shishya', size: 'normal' },
    { src: '', alt: 'International tour', label: 'International', size: 'normal' },
  ]

  return (
    <section id="gallery" style={{
      padding: 'var(--section-pad) 0',
      background: 'var(--ink-soft)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle dot pattern */}
      <div className="pattern-bg" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.5,
      }} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'end',
          marginBottom: '3.5rem',
          gap: '2rem',
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Visual Archive</div>
            <h2 className="section-heading">
              Moments of <em>Presence</em>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            lineHeight: 1.7,
          }}>
           SUBJECT TO CHANGE - Photographs from performances, recording sessions, and cultural journeys each frame a note in an ongoing raga.
          </p>
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #2A1010 0%, #180A0A 100%)',
                border: '1px solid rgba(201,168,76,0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: photo.size === 'tall' ? '3/4' : photo.size === 'wide' ? '16/7' : '4/3',
                gridColumn: photo.size === 'wide' ? 'span 2' : 'span 1',
                gridRow: photo.size === 'tall' ? 'span 2' : 'span 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={e => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={e => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              {/* Replace with: <img src={photo.src} alt={photo.alt} style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}} /> */}
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                zIndex: 1,
              }}>{photo.label}</span>

              {/* Hover overlay */}
              <div className="gallery-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(139,26,26,0.5)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.25rem',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 2,
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--cream)',
                  }}>{photo.alt}</div>
                  <div style={{
                    width: '30px',
                    height: '1px',
                    background: 'var(--gold)',
                    marginTop: '6px',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn-ghost">View Full Gallery</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #gallery .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
