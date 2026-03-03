'use client';
import Link from 'next/link';


const serviceList = [
    { label: 'Comprehensive dental checkups & cleanings', slug: 'general-dentistry' },
    { label: 'Pain-free root canal therapy', slug: 'root-canal' },
    { label: 'Ceramic & composite fillings', slug: 'dental-filling' },
    { label: 'Teeth whitening & bleaching', slug: 'teeth-whitening' },
    { label: 'Dental implants & bridges', slug: 'dental-implants' },
    { label: 'Orthodontics — braces & clear aligners', slug: 'braces-orthodontics' },
    { label: 'Smile makeover & cosmetic treatments', slug: 'smile-makeover' },
    { label: 'Paediatric dentistry for children', slug: 'paediatric-dentistry' },
    { label: 'Crown & veneers restoration', slug: 'crown-veneers' },
    { label: 'Oral surgery & extractions', slug: 'tooth-extraction' },
];

export default function AboutServices() {
    return (
        <section id="about" style={{ background: '#2D4A38', padding: '5rem 0' }}>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>Our Expertise</p>
                        <h2
                            className="heading-lg mb-6"
                            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white' }}
                        >
                            We provide you with<br />
                            all the dental services<br />
                            for the best results
                        </h2>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '380px', marginBottom: '2.5rem' }}>
                            Our experienced team at Nikhil Dental Clinic delivers modern,
                            comprehensive dental care tailored to every patient&apos;s unique needs.
                        </p>
                        <a
                            href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-white"
                        >
                            Book Appointment
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>

                    {/* Right: service list — each item links to its service page */}
                    <div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {serviceList.map((item, i) => (
                                <li key={item.slug}>
                                    <Link
                                        href={`/services/${item.slug}`}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem 0',
                                            borderBottom: i < serviceList.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                            textDecoration: 'none',
                                            transition: 'opacity 0.15s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                    >
                                        <div
                                            style={{
                                                width: '22px',
                                                height: '22px',
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <span style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, flex: 1 }}>
                                            {item.label}
                                        </span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
