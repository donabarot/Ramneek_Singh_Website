'use client'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink)',
    }}>
      {/* Background image placeholder */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(to right, rgba(13,8,5,0.97) 40%, rgba(13,8,5,0.5) 100%),
          url('/images/hero.jpg') center/cover no-repeat
        `,
        zIndex: 1,
      }} />

      {/* Decorative mandala / geometric overlay */}
      <div style={{
        position: 'absolute',
        right: '-5vw',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'clamp(400px, 55vw, 750px)',
        height: 'clamp(400px, 55vw, 750px)',
        zIndex: 2,
        opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='50' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='30' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Cpolygon points='100,10 190,100 100,190 10,100' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Cpolygon points='100,30 170,100 100,170 30,100' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3Cline x1='100' y1='10' x2='100' y2='190' stroke='%23C9A84C' stroke-width='0.3'/%3E%3Cline x1='10' y1='100' x2='190' y2='100' stroke='%23C9A84C' stroke-width='0.3'/%3E%3Cline x1='29' y1='29' x2='171' y2='171' stroke='%23C9A84C' stroke-width='0.3'/%3E%3Cline x1='171' y1='29' x2='29' y2='171' stroke='%23C9A84C' stroke-width='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }} />

      {/* Red vertical accent stripe */}
      <div style={{
        position: 'absolute',
        left: '7vw',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--crimson), transparent)',
        zIndex: 2,
      }} />

      {/* Artist image — right side */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '55%',
        zIndex: 2,
        background: `
          linear-gradient(to right, var(--ink) 0%, transparent 30%),
          linear-gradient(to top, var(--ink) 0%, transparent 20%)
        `,
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #2A1010 0%, #1A0A0A 50%, #0D0805 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          //fontSize: '0.65rem',
        }}>
          {/* Replace this div with an <img> tag when photo is ready */}
          <div style={{
            width: '70%',
            maxWidth: '480px',
            aspectRatio: '3/4',
            border: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
          }}>
            Artist Photo
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 2rem 0 calc(7vw + 3rem)',
        paddingTop: '8rem',
        paddingBottom: '6rem',
        width: '100%',
      }}>
        {/* Pre-title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span className="section-label">Hindustani Classical Vocalist</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          color: 'var(--cream)',
          marginBottom: '0.2rem',
        }}>
          Vidushi
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 700,
          fontStyle: 'italic',
          lineHeight: 1.05,
          color: 'var(--gold-light)',
          marginBottom: '2rem',
        }}>
          Ramneek Singh
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontWeight: 300,
          color: 'var(--cream-dark)',
          maxWidth: '520px',
          lineHeight: 1.6,
          marginBottom: '3rem',
          opacity: 0.85,
        }}>
          Weaving centuries of classical tradition into transcendent musical experiences — for audiences across India and the world.
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '20+', label: 'Years of Riyaz' },
            { num: '200+', label: 'Concerts' },
            { num: '15+', label: 'Countries' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                fontWeight: 700,
                color: 'var(--gold)',
                lineHeight: 1,
              }}>{stat.num}</div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#contact" className="btn-gold">Book a Performance</a>
          <a href="#music" className="btn-ghost">Listen & Watch</a>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '180px',
        background: 'linear-gradient(to bottom, transparent, var(--ink))',
        zIndex: 3,
      }} />

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'bounce 2s infinite',
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.55rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--gold-muted), transparent)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes scrollLine {
          0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 768px) {
          .hero-artist-img { display: none; }
        }
      `}</style>
    </section>
  )
}
