const doctors = [
    {
        name: 'Dr. Nikhil',
        title: 'Chief Dental Surgeon',
        speciality: 'Root Canal & Implants',
        img: '/dental-doctor.png',
        experience: '10+ yrs',
    },
    {
        name: 'Dr. Priya Sharma',
        title: 'Cosmetic Dentist',
        speciality: 'Smile Makeover & Whitening',
        img: '/dental-hero.png',
        experience: '7+ yrs',
    },
];

export default function Doctors() {
    return (
        <section style={{ background: '#FAFAF7', padding: '5rem 0' }}>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: heading */}
                    <div>
                        <p className="eyebrow mb-4">Our Team</p>
                        <h2 className="heading-lg mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
                            Expert care from<br />
                            high-qualified<br />
                            professionals
                        </h2>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '360px' }}>
                            Our dentists bring years of clinical expertise, ongoing education, and a
                            genuine passion for transforming your smile and overall oral health.
                        </p>
                    </div>

                    {/* Right: doctor cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {doctors.map((d) => (
                            <div
                                key={d.name}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '1.25rem',
                                    border: '1px solid #E2E0DA',
                                }}
                            >
                                <div style={{ width: '80px', height: '80px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                    <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: '#111', marginBottom: '2px' }}>{d.name}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#2D4A38', fontWeight: 500, marginBottom: '4px' }}>{d.title}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: '#6B6B6B' }}>{d.speciality}</div>
                                </div>
                                <div
                                    style={{
                                        flexShrink: 0,
                                        background: '#E8EDE9',
                                        borderRadius: '12px',
                                        padding: '0.5rem 0.9rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: '#2D4A38' }}>{d.experience}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.68rem', color: '#6B6B6B' }}>Experience</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
