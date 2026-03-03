'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Location', href: '/#map' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(242,240,216,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.1rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <a href="/#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: '#253C2C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.5 2 6 5.5 6 8.5c0 3.5 2 5.5 3.5 7.5.7.9 1.3 2 1.5 3l1 2 1-2c.2-1 .8-2.1 1.5-3C16 14 18 12 18 8.5 18 5.5 15.5 2 12 2z" fill="white" />
              <circle cx="12" cy="8" r="2" fill="#253C2C" />
            </svg>
          </div>
          <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: '#111', letterSpacing: '-0.01em' }}>
            Nikhil Dental
          </span>
        </a>

        {/* Desktop nav links */}
        <nav
          className="hidden md:flex"
          style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#444',
                textDecoration: 'none',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = 'rgba(37,60,44,0.08)';
                (e.target as HTMLElement).style.color = '#253C2C';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = 'transparent';
                (e.target as HTMLElement).style.color = '#444';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA + mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a
            href="/#contact"
            className="btn-forest"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.825rem' }}
          >
            Book Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Mobile hamburger only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{
              background: 'rgba(0,0,0,0.06)',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'none', // hidden on md+, shown on mobile via inline override below
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Menu"
          >
            {menuOpen
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            background: '#F2F0D8',
            borderTop: '1px solid #E0DDCC',
            padding: '1.25rem 2.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1rem',
                color: '#111',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '0.4rem 0',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
