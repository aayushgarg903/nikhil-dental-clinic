const reviews = [
    {
        name: 'Priya G',
        initials: 'PG',
        date: 'Jan 2025',
        rating: 5,
        text: 'Excellent staff, service, and ease of scheduling. Highly recommended!! The team was very professional and made me feel comfortable throughout.',
        color: '#C8D4C9',
    },
    {
        name: 'Manu Rawat',
        initials: 'MR',
        date: 'Dec 2024',
        rating: 5,
        text: 'I highly recommend Nikhil Dental Clinic for anyone looking for quality dental care. Very knowledgeable and caring doctors.',
        color: '#D4C8C4',
    },
    {
        name: 'Rashi Singal',
        initials: 'RS',
        date: 'Nov 2024',
        rating: 5,
        text: 'The environment is very friendly making you feel comfortable. Great experience from the moment I walked in.',
        color: '#C4C8D4',
    },
    {
        name: 'Amit Sharma',
        initials: 'AS',
        date: 'Oct 2024',
        rating: 5,
        text: 'Best dental clinic in Rohtak! Very clean, modern equipment, and the doctors are incredibly skilled and gentle.',
        color: '#C8D4C9',
    },
    {
        name: 'Sunita Verma',
        initials: 'SV',
        date: 'Sep 2024',
        rating: 5,
        text: 'Got my root canal done here and it was completely pain-free. Amazing experience. Will definitely come back.',
        color: '#D4D4C4',
    },
    {
        name: 'Rajesh Kumar',
        initials: 'RK',
        date: 'Aug 2024',
        rating: 5,
        text: 'Very professional and kind staff. The clinic is neat and hygienic. Highly satisfied with the treatment quality.',
        color: '#C4C8D4',
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" style={{ background: '#F2F0D8', padding: '5rem 0' }}>
            <div className="container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <p className="eyebrow mb-4">Patient Stories</p>
                        <h2 className="heading-lg" style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}>
                            Celebrating smiles,<br />
                            our patients &amp;<br />
                            their praise
                        </h2>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', marginBottom: '4px' }}>
                            <div style={{ color: '#F59E0B', fontSize: '1.1rem' }}>★★★★★</div>
                            <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.5rem', color: '#111' }}>4.8</span>
                        </div>
                        <div style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#6B6B6B' }}>130+ verified Google reviews</div>
                    </div>
                </div>

                {/* Review cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((r) => (
                        <div
                            key={r.name}
                            style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '1.75rem',
                                border: '1px solid #E2E0DA',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#444', lineHeight: 1.7, flex: 1 }}>
                                &ldquo;{r.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '0.8rem', borderTop: '1px solid #F0EEEA' }}>
                                <div
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '50%',
                                        background: r.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Syne',
                                        fontWeight: 700,
                                        fontSize: '0.8rem',
                                        color: '#444',
                                        flexShrink: 0,
                                    }}
                                >
                                    {r.initials}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '0.875rem', color: '#111' }}>{r.name}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', color: '#6B6B6B' }}>{r.date} · Google</div>
                                </div>
                                {/* Google icon */}
                                <svg width="18" height="18" viewBox="0 0 48 48">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 17.01 0 20.39 0 24c0 3.61.92 7 2.56 9.78l7.97-6.19z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
