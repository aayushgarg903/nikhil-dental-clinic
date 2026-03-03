export default function MapSection() {
    const info = [
        {
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Address',
            content: 'Arya Nagar Chowk, Tilak Nagar,\nJagdish Colony, Rohtak, Haryana 124001',
            link: 'https://maps.google.com/?q=Arya+Nagar+Chowk,+Tilak+Nagar,+Jagdish+Colony,+Rohtak,+Haryana+124001',
        },
        {
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: 'Phone',
            content: '099910 72769',
            link: 'tel:09991072769',
        },
        {
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#253C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Working Hours',
            content: 'Mon – Sat: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM\nSunday: By Appointment Only',
            link: undefined,
        },
        {
            svg: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#253C2C">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
            ),
            title: 'WhatsApp Booking',
            content: 'Chat with us to book instantly',
            link: 'https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment',
        },
    ];

    return (
        <section id="map" style={{ background: '#F2F0D8', padding: '5rem 0' }}>
            <div className="container">

                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <span className="pill-tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Our Location</span>
                    <h2
                        style={{
                            fontFamily: 'DM Serif Display, serif',
                            fontWeight: 400,
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            color: '#1A1A1A',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Come visit us in{' '}
                        <span style={{ fontStyle: 'italic', color: '#253C2C' }}>Rohtak</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>

                    {/* Left: info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {info.map((item, i) => (
                            <div
                                key={item.title}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    padding: '1.25rem 0',
                                    borderBottom: i < info.length - 1 ? '1px solid #DDD9C0' : 'none',
                                }}
                            >
                                {/* Icon circle */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: '#E8EDE9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.svg}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontWeight: 600,
                                            fontSize: '0.8rem',
                                            color: '#111',
                                            marginBottom: '4px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target={item.link.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#444',
                                                lineHeight: 1.65,
                                                whiteSpace: 'pre-line',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {item.content}
                                        </a>
                                    ) : (
                                        <p
                                            style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#444',
                                                lineHeight: 1.65,
                                                whiteSpace: 'pre-line',
                                            }}
                                        >
                                            {item.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* CTA */}
                        <a
                            href="https://maps.google.com/?q=Arya+Nagar+Chowk,+Tilak+Nagar,+Jagdish+Colony,+Rohtak,+Haryana+124001"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-forest"
                            style={{ marginTop: '1.75rem', width: 'fit-content' }}
                        >
                            Get Directions
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: map */}
                    <div
                        style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid #DDD9C0',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
                            height: '440px',
                        }}
                    >
                        <iframe
                            title="Nikhil Dental Clinic Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.0!2d76.5897!3d28.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85bfae3a6f45%3A0x8d7d1fbf8c265f4!2sNikhil%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
