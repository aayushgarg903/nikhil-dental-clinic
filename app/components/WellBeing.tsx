export default function WellBeing() {
    return (
        <section style={{ background: '#F2F0D8', padding: '5rem 0' }}>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: image */}
                    <div style={{ borderRadius: '20px', overflow: 'hidden', height: '440px', position: 'relative' }}>
                        <img
                            src="/hero-bg.jpg"
                            alt="Your dental well-being"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* Overlapping card */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '-20px',
                                background: 'white',
                                borderRadius: '16px',
                                padding: '1.25rem 1.5rem',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                                maxWidth: '220px',
                                border: '1px solid #E2E0DA',
                            }}
                        >
                            <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.5rem', color: '#111', lineHeight: 1 }}>95%</div>
                            <div style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: '#6B6B6B', marginTop: '4px' }}>Patient satisfaction rate</div>
                            <div style={{ display: 'flex', gap: '2px', marginTop: '8px' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: text */}
                    <div>
                        <p className="eyebrow mb-4">Our Commitment</p>
                        <h2 className="heading-lg mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
                            Your well-being<br />
                            every step of<br />
                            the way
                        </h2>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                            From your first consultation to the final result, we support you throughout
                            your dental journey. We believe in building long-term relationships,
                            not just one-time visits.
                        </p>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, marginBottom: '2rem' }}>
                            Every patient deserves to feel heard, respected, and delighted with their
                            smile. That&apos;s the Nikhil Dental promise.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { icon: '🦷', text: 'Free initial consultation for new patients' },
                                { icon: '💬', text: 'WhatsApp booking for quick appointments' },
                                { icon: '📍', text: 'Conveniently located in Rohtak, Haryana' },
                            ].map((item) => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#444' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
