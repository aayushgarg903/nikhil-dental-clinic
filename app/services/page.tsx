'use client';
import Link from 'next/link';
import { services } from '../lib/services-data';
import { ServiceCardList } from '../components/ServiceCards';


export default function ServicesPage() {
    return (
        <main style={{ background: '#F2F0D8', minHeight: '100vh', paddingTop: '5rem' }}>

            {/* Hero */}
            <section style={{ padding: '4rem 0 3rem' }}>
                <div className="container">
                    <Link href="/" style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', color: '#6B6B6B', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                        ← Back to Home
                    </Link>
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
                        All Services
                    </span>
                    <h1
                        style={{
                            fontFamily: 'DM Serif Display, serif',
                            fontWeight: 400,
                            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                            color: '#1A1A1A',
                            lineHeight: 1.08,
                            letterSpacing: '-0.02em',
                            marginBottom: '1rem',
                            maxWidth: '600px',
                        }}
                    >
                        Every treatment,{' '}
                        <span style={{ fontStyle: 'italic', color: '#253C2C' }}>one trusted clinic</span>
                    </h1>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '1rem', color: '#555', lineHeight: 1.75, maxWidth: '500px' }}>
                        From routine check-ups to full smile transformations, Nikhil Dental Clinic offers comprehensive dental care across 10+ specialities.
                    </p>
                </div>
            </section>

            {/* Services grid */}
            <section style={{ padding: '1rem 0 6rem' }}>
                <div className="container">
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.25rem',
                        }}
                    >
                        <ServiceCardList services={services} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#253C2C', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', marginBottom: '0.75rem' }}>
                        Not sure which treatment you need?
                    </h2>
                    <p style={{ fontFamily: 'DM Sans', color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
                        Book a consultation and we&apos;ll guide you to the right solution.
                    </p>
                    <a
                        href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-white"
                    >
                        Book Free Consultation
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </section>
        </main>
    );
}
