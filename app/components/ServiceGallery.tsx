'use client';
import Link from 'next/link';

const services = [
    {
        slug: 'general-dentistry',
        label: 'General Dentistry',
        desc: 'Routine check-ups, oral examinations, cavity treatment, and preventive health.',
        img: '/dental-hygiene.png',
    },
    {
        slug: 'dental-filling',
        label: 'Dental Filling',
        desc: 'Tooth-colored fillings to restore decayed or damaged teeth naturally.',
        img: '/dental-whitening.png',
        featured: true,
    },
    {
        slug: 'tooth-extraction',
        label: 'Tooth Extraction',
        desc: 'Safe, painless extraction for severely damaged or impacted teeth.',
        img: '/hero-bg.jpg',
    },
    {
        slug: 'braces-orthodontics',
        label: 'Braces & Orthodontics',
        desc: 'Metal, ceramic, and invisible aligners to straighten bite alignment.',
        img: '/dental-doctor.png',
    },
];

export default function ServiceGallery() {
    return (
        <section id="services" style={{ background: '#F0EEB0', padding: '4rem 0 5rem' }}>
            <div className="container">
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1.5rem',
                        marginBottom: '2.5rem',
                    }}
                >
                    <div>
                        <span className="pill-tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Services</span>
                        <h2
                            style={{
                                fontFamily: 'DM Serif Display, serif',
                                fontWeight: 400,
                                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                                color: '#1A1A1A',
                                lineHeight: 1.08,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Explore the full<br />
                            range of{' '}
                            <span style={{ fontStyle: 'italic', color: '#253C2C' }}>dental</span>
                            <br />
                            <span style={{ fontStyle: 'italic', color: '#253C2C' }}>treatment</span>
                        </h2>
                    </div>

                    <div style={{ paddingTop: '3.5rem' }}>
                        <Link
                            href="/services"
                            className="btn-outline-forest"
                        >
                            View All Services
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Service cards grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem',
                    }}
                    className="grid-cols-2 md:grid-cols-4 grid"
                >
                    {services.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                textDecoration: 'none',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'none';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}
                        >
                            {/* Photo */}
                            <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                <img
                                    src={s.img}
                                    alt={s.label}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                                />
                                {/* Featured "Learn More" circle — bottom-right corner */}
                                {s.featured && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '12px',
                                            right: '12px',
                                            background: '#253C2C',
                                            borderRadius: '50%',
                                            width: '68px',
                                            height: '68px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            color: 'white',
                                            fontFamily: 'DM Sans',
                                            fontSize: '0.7rem',
                                            fontWeight: 500,
                                            textAlign: 'center',
                                            lineHeight: 1.25,
                                        }}
                                    >
                                        Learn<br />More
                                    </div>
                                )}
                            </div>
                            {/* Text below */}
                            <div style={{ padding: '1.1rem 1.25rem 1.25rem' }}>
                                <div
                                    style={{
                                        fontFamily: 'DM Serif Display, serif',
                                        fontSize: '1.05rem',
                                        fontWeight: 400,
                                        color: '#111',
                                        marginBottom: '0.4rem',
                                    }}
                                >
                                    {s.label}
                                </div>
                                <p style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                                    {s.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Divider line */}
                <div style={{ height: '2px', background: '#253C2C', width: '240px', borderRadius: '1px', marginTop: '3rem', opacity: 0.4 }} />
            </div>
        </section>
    );
}
