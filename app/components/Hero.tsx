export default function Hero() {
    return (
        <section
            id="home"
            style={{
                background: '#F2F0D8',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '5rem',
            }}
        >
            <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Main hero grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        alignItems: 'center',
                        flex: 1,
                        paddingBottom: '0',
                        paddingTop: '2rem',
                    }}
                    className="flex-col md:grid-cols-2 grid"
                >
                    {/* ── Left ── */}
                    <div>
                        <h1
                            style={{
                                fontFamily: 'DM Serif Display, serif',
                                fontWeight: 400,
                                fontSize: 'clamp(3.2rem, 6.5vw, 6rem)',
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                                color: '#1A1A1A',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Because<br />
                            every{' '}
                            <span
                                style={{
                                    fontFamily: 'DM Serif Display, serif',
                                    fontStyle: 'italic',
                                    color: '#253C2C',
                                }}
                            >
                                smile
                            </span>
                            <br />
                            <span
                                style={{
                                    fontFamily: 'DM Serif Display, serif',
                                    fontStyle: 'italic',
                                    color: '#253C2C',
                                }}
                            >
                                matters
                            </span>
                        </h1>

                        <p
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '1rem',
                                color: '#6B6B6B',
                                lineHeight: 1.7,
                                maxWidth: '340px',
                                marginBottom: '2rem',
                            }}
                        >
                            Your smile is more than just an expression, it&apos;s a reflection of your
                            confidence, health and happiness.
                        </p>

                        <a
                            href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-forest"
                            style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem', marginBottom: '3rem' }}
                        >
                            Book your appointment
                            <span
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: '4px',
                                }}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                        </a>
                    </div>

                    {/* ── Right: Hero image ── */}
                    <div style={{ position: 'relative', height: 'clamp(380px, 55vh, 520px)' }}>
                        <div
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <img
                                src="/dental-hero.png"
                                alt="Happy dental patient"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>

                        {/* Floating excellence card */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '-10px',
                                background: 'white',
                                borderRadius: '16px',
                                padding: '1.1rem 1.4rem',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                                maxWidth: '210px',
                            }}
                        >
                            <div
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    background: '#F2F0D8',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '0.6rem',
                                }}
                            >
                                🦷
                            </div>
                            <div
                                style={{
                                    fontFamily: 'DM Serif Display, serif',
                                    fontSize: '0.9rem',
                                    color: '#111',
                                    lineHeight: 1.35,
                                    marginBottom: '0.4rem',
                                }}
                            >
                                Excellence is a process and not a destination
                            </div>
                            <div
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.7rem',
                                    color: '#6B6B6B',
                                }}
                            >
                                Award Winning Specialist Orthodontist
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Stats bar ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr 1fr 1fr',
                        borderTop: '1px solid #DDD9C0',
                        marginTop: '2.5rem',
                    }}
                    className="grid-cols-2 md:grid-cols-4"
                >
                    {/* Healthy Smile */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            padding: '1.5rem 2rem 1.5rem 0',
                            borderRight: '1px solid #DDD9C0',
                        }}
                    >
                        {/* Award wreath SVG */}
                        <div style={{ color: '#253C2C', fontSize: '1.8rem', lineHeight: 1 }}>⚇</div>
                        <div>
                            <div style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.1rem', color: '#111', lineHeight: 1.1 }}>Healthy Smile</div>
                            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#6B6B6B' }}>Trusted of Thousands</div>
                        </div>
                    </div>

                    {/* 100% */}
                    <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid #DDD9C0' }}>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.6rem', color: '#111', lineHeight: 1.1 }}>100%</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#6B6B6B' }}>Satisfaction</div>
                    </div>

                    {/* 4.98 */}
                    <div style={{ padding: '1.5rem 2rem', borderRight: '1px solid #DDD9C0' }}>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.6rem', color: '#111', lineHeight: 1.1 }}>4.98</div>
                        <div style={{ display: 'flex', gap: '1px' }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#253C2C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            ))}
                        </div>
                    </div>

                    {/* 150 Reviews */}
                    <div style={{ padding: '1.5rem 0 1.5rem 2rem' }}>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.6rem', color: '#111', lineHeight: 1.1 }}>150</div>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#6B6B6B' }}>Reviews</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
