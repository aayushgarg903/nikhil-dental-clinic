'use client';
const services = [
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Preventive Care',
        desc: 'Regular cleanings, exams & X-rays to maintain oral health and prevent issues before they start.',
        tag: 'Most Popular',
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
        ),
        title: 'Teeth Whitening',
        desc: 'Safe, professional whitening treatments that brighten your smile and boost confidence fast.',
        tag: null,
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" /><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" /><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" /><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" /><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" /><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" /><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
            </svg>
        ),
        title: 'Restorative Treatments',
        desc: 'Fillings, crowns & bridges to repair damaged teeth and restore their natural function.',
        tag: null,
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 5 5.5 5 9c0 4 2.5 6.5 4 8.5.8 1 1.5 2.5 2 3.5l1 2 1-2c.5-1 1.2-2.5 2-3.5 1.5-2 4-4.5 4-8.5C19 5.5 16 2 12 2z" />
            </svg>
        ),
        title: 'Root Canal Therapy',
        desc: 'Painless root canal procedures to save infected teeth and relieve pain effectively.',
        tag: null,
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" />
            </svg>
        ),
        title: 'Dental Implants',
        desc: 'Permanent, natural-looking tooth replacements that restore your smile and bite function.',
        tag: 'Advanced',
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
        ),
        title: 'Orthodontics & Braces',
        desc: 'Braces and clear aligners to straighten teeth and achieve a beautifully aligned smile.',
        tag: null,
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Paediatric Dentistry',
        desc: 'Gentle, kid-friendly dental care to build healthy habits and protect growing smiles.',
        tag: null,
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        title: 'Smile Makeover',
        desc: 'Complete aesthetic transformation combining multiple treatments for your dream smile.',
        tag: 'Premium',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24" style={{ background: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
                    <div>
                        <span className="section-eyebrow mb-4 block">Our Services</span>
                        <h2
                            className="section-heading"
                            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontFamily: 'Syne, sans-serif' }}
                        >
                            We Offer the Full<br />
                            Range of Dental<br />
                            <span style={{ color: '#3DD68C' }}>Care for You</span>
                        </h2>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-500 text-base leading-relaxed mb-5">
                            From routine checkups to complex restorative work — our experienced team ensures
                            you receive the highest quality care in a comfortable, modern setting.
                        </p>
                        <a
                            href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nikhil%20Dental%20Clinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-teal"
                        >
                            Book Now
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="group relative rounded-2xl p-6 cursor-pointer transition-all duration-250 hover:-translate-y-1"
                            style={{
                                background: '#F5F3EF',
                                border: '1.5px solid #E5E7EB',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#3DD68C';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(61,214,140,0.15)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}
                        >
                            {s.tag && (
                                <span
                                    className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                                    style={{ background: '#e6faf1', color: '#28b875' }}
                                >
                                    {s.tag}
                                </span>
                            )}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-200"
                                style={{ background: '#e6faf1', color: '#3DD68C' }}
                            >
                                {s.icon}
                            </div>
                            <h3
                                className="font-bold text-base mb-2 leading-snug"
                                style={{ fontFamily: 'Syne, sans-serif', color: '#0E1C36' }}
                            >
                                {s.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                            <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold" style={{ color: '#3DD68C' }}>
                                Learn more
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
