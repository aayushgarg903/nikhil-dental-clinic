const features = [
    {
        title: 'Personalised Treatment Plans',
        desc: 'Every patient gets a custom plan designed around their specific dental needs and goals.',
    },
    {
        title: 'Pain-Free Procedures',
        desc: 'We use the latest anaesthetic techniques to ensure a completely comfortable experience.',
    },
    {
        title: 'State-of-the-Art Equipment',
        desc: 'Our clinic uses modern dental technology for accurate diagnosis and superior results.',
    },
    {
        title: 'Flexible Appointment Hours',
        desc: 'Morning and evening slots available Mon–Sat to fit around your busy schedule.',
    },
    {
        title: 'Transparent Pricing',
        desc: 'Clear, upfront costs with no hidden charges. We discuss all options before proceeding.',
    },
    {
        title: 'Friendly, Caring Team',
        desc: 'Our warm and professional staff will put you at ease from the moment you arrive.',
    },
];

export default function FeatureSection() {
    return (
        <section style={{ background: '#F2F0D8', padding: '5rem 0' }}>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <p className="eyebrow mb-4">Why Choose Us</p>
                        <h2 className="heading-lg mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
                            We offer more than<br />
                            just dental services<br />
                            for our clients
                        </h2>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '380px', marginBottom: '2rem' }}>
                            At Nikhil Dental Clinic, we believe great dental care is about the full
                            experience — from the moment you walk in to the results you see in the mirror.
                        </p>
                        {/* Hygiene & Supervision checklist merged from old component */}
                        <div style={{ marginTop: '2.5rem' }}>
                            <p className="eyebrow mb-4">Clinical Hygiene & Supervision</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                                {[
                                    'ISO-standard sterilization for all instruments',
                                    'Single-use disposables throughout every treatment',
                                    'Regular clinic deep-cleaning & infection control',
                                    'Fully supervised by qualified dental professionals',
                                ].map((item) => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D4A38" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        <span style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: '#444', lineHeight: 1.6 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-forest"
                            >
                                Book a Checkup
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: feature list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                style={{
                                    padding: '1.5rem 0',
                                    borderBottom: i < features.length - 1 ? '1px solid #E2E0DA' : 'none',
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <div
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: '#E8EDE9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '2px',
                                    }}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2D4A38" strokeWidth="2.5">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '0.95rem', color: '#111', marginBottom: '4px' }}>{f.title}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.65 }}>{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
