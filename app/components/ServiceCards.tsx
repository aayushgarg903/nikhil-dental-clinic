'use client';

import Link from 'next/link';
import { Service } from '../lib/services-data';

export function ServiceCardList({ services }: { services: Service[] }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {services.map((service) => (
                <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    style={{
                        background: 'white',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #DDD9C0',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'none';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                >
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                        <img
                            src={service.img}
                            alt={service.label}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.3s' }}
                        />
                    </div>
                    <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#111', marginBottom: '0.4rem' }}>
                            {service.label}
                        </div>
                        <p style={{ fontFamily: 'DM Sans', fontSize: '0.82rem', color: '#6B6B6B', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
                            {service.tagline}
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                            {[
                                { label: service.duration },
                                { label: service.sessions + ' session' + (service.sessions === '1' ? '' : 's') },
                            ].map((pill) => (
                                <span
                                    key={pill.label}
                                    style={{
                                        fontFamily: 'DM Sans',
                                        fontSize: '0.7rem',
                                        color: '#253C2C',
                                        background: '#E8EDE9',
                                        padding: '0.2rem 0.65rem',
                                        borderRadius: '999px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                        <div style={{ fontFamily: 'DM Sans', fontSize: '0.82rem', fontWeight: 600, color: '#253C2C', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            Learn more
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export function RelatedServiceCardList({ related }: { related: Service[] }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {related.map((rel) => (
                <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    style={{
                        background: 'white',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #DDD9C0',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'none';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                >
                    <div style={{ height: '140px', overflow: 'hidden' }}>
                        <img src={rel.img} alt={rel.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '0.95rem', color: '#111', marginBottom: '0.3rem' }}>{rel.label}</div>
                        <div style={{ fontFamily: 'DM Sans', fontSize: '0.78rem', color: '#6B6B6B', lineHeight: 1.5 }}>{rel.tagline}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
