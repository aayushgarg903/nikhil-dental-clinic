'use client';
import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid #E0DDCC',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.875rem',
    color: '#111',
    background: '#F2F0D8',
    outline: 'none',
    transition: 'border-color 0.15s',
};

const labelStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    color: '#6B6B6B',
    display: 'block',
    marginBottom: '6px',
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
    const [status, setStatus] = useState<FormState>('idle');
    const [error, setError] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic client-side validation
        if (!form.name.trim() || !form.phone.trim()) {
            setError('Please fill in your name and phone number.');
            return;
        }

        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Something went wrong. Please try again.');
                setStatus('error');
                return;
            }

            setStatus('success');
            setForm({ name: '', phone: '', service: '', message: '' });
        } catch {
            setError('Network error. Please check your connection and try again.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" style={{ background: '#F2F0D8', padding: '5rem 0' }}>
            <div className="container">
                <div
                    className="grid md:grid-cols-2 overflow-hidden"
                    style={{ borderRadius: '24px', border: '1px solid #DDD9C0', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}
                >
                    {/* ── Left: forest green info panel ── */}
                    <div
                        style={{
                            background: '#253C2C',
                            padding: '3rem 3.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>
                                Get In Touch
                            </p>
                            <h2
                                style={{
                                    fontFamily: 'DM Serif Display, serif',
                                    fontWeight: 400,
                                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                                    color: 'white',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '1.25rem',
                                }}
                            >
                                Caring hands,<br />
                                professional<br />
                                <span style={{ fontStyle: 'italic' }}>dental expertise</span>
                            </h2>
                            <p style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                                Our compassionate team combines caring hands with professional expertise
                                to provide gentle, effective treatments for your healthiest smile.
                            </p>

                            {/* Contact details */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
                                {[
                                    { icon: '📍', text: 'Arya Nagar Chowk, Tilak Nagar, Jagdish Colony, Rohtak, Haryana 124001' },
                                    { icon: '📞', text: '099910 72769' },
                                    { icon: '🕐', text: 'Mon–Sat: 9AM–2PM & 5PM–9PM · Sun: By Appointment' },
                                ].map((item) => (
                                    <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <span style={{ fontSize: '0.95rem', marginTop: '2px' }}>{item.icon}</span>
                                        <span style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            <a
                                href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-white"
                                style={{ fontSize: '0.825rem', padding: '0.65rem 1.4rem' }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#253C2C">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                            <a
                                href="tel:09991072769"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans', fontSize: '0.825rem', fontWeight: 500, textDecoration: 'none' }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.18 2 2 0 013 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* ── Right: form ── */}
                    <div style={{ background: 'white', padding: '3rem 3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        {/* Success state */}
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem', color: '#111', marginBottom: '0.75rem' }}>Message Saved!</h3>
                                <p style={{ fontFamily: 'DM Sans', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                    Thank you for reaching out. Your message has been received by our team — we&apos;ll call or WhatsApp you back shortly to confirm your appointment.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    style={{ marginTop: '1rem', fontFamily: 'DM Sans', fontSize: '0.825rem', color: '#6B6B6B', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                >
                                    Submit another enquiry
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1.7rem', color: '#111', marginBottom: '0.4rem' }}>
                                    Send a Message
                                </h3>
                                <p style={{ fontFamily: 'DM Sans', fontSize: '0.875rem', color: '#6B6B6B', marginBottom: '2rem' }}>
                                    We&apos;ll get back to you within a few hours.
                                </p>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={labelStyle}>Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                                style={inputStyle}
                                                onFocus={e => (e.target.style.borderColor = '#253C2C')}
                                                onBlur={e => (e.target.style.borderColor = '#E0DDCC')}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="Mobile number"
                                                required
                                                style={inputStyle}
                                                onFocus={e => (e.target.style.borderColor = '#253C2C')}
                                                onBlur={e => (e.target.style.borderColor = '#E0DDCC')}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Service Needed</label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            style={{ ...inputStyle, color: form.service ? '#111' : '#9CA3AF' }}
                                            onFocus={e => (e.target.style.borderColor = '#253C2C')}
                                            onBlur={e => (e.target.style.borderColor = '#E0DDCC')}
                                        >
                                            <option value="">Select a service...</option>
                                            <option>General Checkup</option>
                                            <option>Teeth Whitening</option>
                                            <option>Root Canal Therapy</option>
                                            <option>Dental Implants</option>
                                            <option>Braces / Clear Aligners</option>
                                            <option>Smile Makeover</option>
                                            <option>Paediatric Dentistry</option>
                                            <option>Tooth Extraction</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Describe your concern or ask a question..."
                                            style={{ ...inputStyle, resize: 'none' }}
                                            onFocus={e => (e.target.style.borderColor = '#253C2C')}
                                            onBlur={e => (e.target.style.borderColor = '#E0DDCC')}
                                        />
                                    </div>

                                    {/* Error message */}
                                    {error && (
                                        <div
                                            style={{
                                                background: '#FEF2F2',
                                                border: '1px solid #FECACA',
                                                borderRadius: '8px',
                                                padding: '0.75rem 1rem',
                                                fontFamily: 'DM Sans',
                                                fontSize: '0.85rem',
                                                color: '#B91C1C',
                                            }}
                                        >
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="btn-forest"
                                        style={{
                                            justifyContent: 'center',
                                            marginTop: '0.5rem',
                                            opacity: status === 'submitting' ? 0.7 : 1,
                                            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <svg
                                                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" strokeWidth="2"
                                                    style={{ animation: 'spin 1s linear infinite' }}
                                                >
                                                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </section>
    );
}
