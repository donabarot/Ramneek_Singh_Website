'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.2rem 0',
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(13,8,5,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      }}>
        <div style={{
          maxWidth: 'var(--container)',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--cream)',
              letterSpacing: '0.02em',
            }}>
              Vidushi
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}>
              ♩ Hindustani Classical
            </span>
          </a>

          {/* Desktop Nav */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            alignItems: 'center',
          }} className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-light)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-gold" style={{ fontSize: '0.6rem', padding: '0.65rem 1.5rem' }}>
                Book Now
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: 'var(--gold)',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'opacity: 0'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99,
        background: 'rgba(13,8,5,0.98)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease',
      }}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--cream)',
              fontStyle: 'italic',
            }}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-gold" onClick={() => setMenuOpen(false)}>
          Book Now
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
