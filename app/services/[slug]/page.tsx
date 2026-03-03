import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, getRelatedServices, services } from '../../lib/services-data';
import { RelatedServiceCardList } from '../../components/ServiceCards';
// Generate static params for all services
export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

// Generate metadata per page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
        title: `${service.label} | Nikhil Dental Clinic – Rohtak`,
        description: service.heroDesc,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const related = getRelatedServices(service.relatedSlugs);

    return (
        <main style={{ background: '#F2F0D8', minHeight: '100vh', paddingTop: '5rem' }}>

            {/* ── Hero ── */}
            <section style={{ background: '#F2F0D8', padding: '4rem 0 3rem' }}>
                <div className="container">
                    {/* Breadcrumb */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                        <Link href="/" style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#6B6B6B', textDecoration: 'none' }}>Home</Link>
                        <span style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>/</span>
                        <Link href="/#services" style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#6B6B6B', textDecoration: 'none' }}>Services</Link>
                        <span style={{ color: '#6B6B6B', fontSize: '0.8rem' }}>/</span>
                        <span style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#253C2C', fontWeight: 500 }}>{service.label}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        {/* Left */}
                        <div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontFamily: 'DM Sans',
                                    fontSize: '0.72rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    color: '#253C2C',
                                    background: '#E8EDE9',
                                    padding: '0.35rem 1rem',
                                    borderRadius: '999px',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {service.label}
                            </span>
                            <h1
                                style={{
                                    fontFamily: 'DM Serif Display, serif',
                                    fontWeight: 400,
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                                    color: '#1A1A1A',
                                    lineHeight: 1.08,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '1.25rem',
                                }}
                            >
                                {service.tagline}
                            </h1>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#555', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2rem' }}>
                                {service.heroDesc}
                            </p>

                            {/* Stats row */}
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                                {[
                                    { label: 'Duration', value: service.duration },
                                    { label: 'Sessions', value: service.sessions },
                                    { label: 'Recovery', value: service.recovery },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#111', lineHeight: 1.1 }}>{stat.value}</div>
                                        <div style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', color: '#6B6B6B', marginTop: '2px' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <a
                                    href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-forest"
                                >
                                    Book Now
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                                <Link href="/#contact" className="btn-outline-forest">
                                    Ask a Question
                                </Link>
                            </div>
                        </div>

                        {/* Right: hero image */}
                        <div style={{ borderRadius: '20px', overflow: 'hidden', height: '400px' }}>
                            <img
                                src={service.img}
                                alt={service.label}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Benefits ── */}
            <section style={{ background: '#253C2C', padding: '4rem 0' }}>
                <div className="container">
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem' }}>
                        Why Choose This Treatment
                    </p>
                    <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
                        Benefits of{' '}
                        <span style={{ fontStyle: 'italic' }}>{service.label}</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                        {service.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    borderRadius: '14px',
                                    padding: '1.25rem 1.5rem',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.85rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <span style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Procedure Steps ── */}
            <section style={{ background: '#F2F0D8', padding: '5rem 0' }}>
                <div className="container">
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '1rem' }}>
                        What to Expect
                    </p>
                    <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A1A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
                        Step-by-step procedure
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {service.steps.map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    padding: '1.75rem 0',
                                    borderBottom: i < service.steps.length - 1 ? '1px solid #DDD9C0' : 'none',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.8rem', color: '#DDD9C0', lineHeight: 1, minWidth: '48px', flexShrink: 0 }}>
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#111', marginBottom: '0.4rem' }}>{step.title}</div>
                                    <div style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section style={{ background: '#F0EEB0', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '1rem' }}>
                        Common Questions
                    </p>
                    <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#1A1A1A', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
                        Frequently asked questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {service.faqs.map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '1.5rem 0',
                                    borderBottom: i < service.faqs.length - 1 ? '1px solid #D8D5A0' : 'none',
                                }}
                            >
                                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.05rem', color: '#111', marginBottom: '0.6rem' }}>{faq.q}</div>
                                <div style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#555', lineHeight: 1.75 }}>{faq.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section style={{ background: '#1A1A1A', padding: '4rem 0' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                            Ready to get started?
                        </h2>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>Book your appointment at Nikhil Dental Clinic today.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <a
                            href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-forest"
                        >
                            WhatsApp Us
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a href="tel:09991072769" className="btn-white" style={{ color: '#111' }}>
                            Call 099910 72769
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Related Services ── */}
            {related.length > 0 && (
                <section style={{ background: '#F2F0D8', padding: '5rem 0' }}>
                    <div className="container">
                        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                            Related treatments
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            <RelatedServiceCardList related={related} />
                        </div>
                    </div>
                </section>
            )}

        </main>
    );
}
