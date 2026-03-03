'use client';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ background: '#111111', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#2D4A38', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C8 2 5 5.5 5 9c0 4 2.5 6.5 4 8.5.8 1 1.5 2.5 2 3.5l1 2 1-2c.5-1 1.2-2.5 2-3.5 1.5-2 4-4.5 4-8.5C19 5.5 16 2 12 2z" fill="white" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>Nikhil Dental</span>
                        </div>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Providing all kinds of dental treatment in Rohtak, Haryana. Happy to help you smile! 🦷
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ color: '#F59E0B', fontSize: '0.9rem' }}>★★★★★</div>
                            <span style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>4.8 (130 reviews)</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((l) => (
                                <li key={l}>
                                    <a href={l === 'Home' ? '/' : `/#${l.toLowerCase()}`} style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                                        onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                                        onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                                    >{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4 style={{ fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Treatments</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Teeth Whitening', 'Root Canal', 'Dental Implants', 'Braces', 'Smile Makeover', 'Paediatric Care'].map((s) => (
                                <li key={s}><span style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>{s}</span></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>Arya Nagar Chowk, Tilak Nagar,<br />Jagdish Colony, Rohtak, Haryana 124001</p>
                            <a href="tel:09991072769" style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>📞 099910 72769</a>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>🕐 Mon–Sat: 9AM–2PM, 5PM–9PM</p>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>🌙 Sun: By Appointment Only</p>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>© {year} Nikhil Dental Clinic. All rights reserved.</p>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)' }}>Arya Nagar Chowk · Rohtak, Haryana 124001</p>
                </div>
            </div>
        </footer>
    );
}
