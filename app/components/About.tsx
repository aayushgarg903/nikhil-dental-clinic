export default function About() {
    const stats = [
        { value: '10K+', label: 'Smiles Transformed' },
        { value: '4.8★', label: 'Google Rating' },
        { value: '130+', label: 'Patient Reviews' },
    ];

    const features = [
        { icon: '🦷', text: 'Full Range of Dental Treatments' },
        { icon: '🏥', text: 'Modern, Hygienic Clinic Environment' },
        { icon: '👨‍⚕️', text: 'Expert & Experienced Doctors' },
        { icon: '😌', text: 'Pain-Free, Gentle Procedures' },
        { icon: '📅', text: 'Flexible Appointment Hours' },
        { icon: '📍', text: 'Conveniently Located in Rohtak' },
    ];

    return (
        <section id="about" className="py-24 overflow-hidden" style={{ background: '#F5F3EF' }}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Top eyebrow */}
                <div className="mb-4">
                    <span className="section-eyebrow">About the Clinic</span>
                </div>

                {/* Main grid */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: headline + text */}
                    <div>
                        <h2
                            className="section-heading mb-6"
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'Syne, sans-serif' }}
                        >
                            Passionate About<br />
                            Your Perfect<br />
                            <span style={{ color: '#3DD68C' }}>Healthy Smile</span>
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-4">
                            At Nikhil Dental Clinic, we are deeply committed to your overall health and well-being.
                            We believe that a healthy smile is a vital part of your quality of life. Our passionate
                            team works tirelessly to provide personalised care tailored to your unique needs.
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            Every patient is important to us — from routine check-ups to advanced procedures,
                            we provide gentle, modern dentistry in a warm, supportive environment.
                        </p>

                        {/* Feature list */}
                        <div className="grid grid-cols-1 gap-3 mb-10">
                            {features.map((f) => (
                                <div key={f.text} className="flex items-center gap-3">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                                        style={{ background: '#e6faf1' }}
                                    >
                                        {f.icon}
                                    </div>
                                    <span className="text-gray-700 text-sm font-medium">{f.text}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/919991072769?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Nikhil%20Dental%20Clinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-teal"
                        >
                            Book Appointment
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>

                    {/* Right: stats + photo mosaic */}
                    <div className="flex flex-col gap-8">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl p-5 text-center"
                                    style={{ background: '#ffffff', border: '1px solid #E5E7EB' }}
                                >
                                    <div
                                        className="font-black text-3xl mb-1"
                                        style={{ fontFamily: 'Syne, sans-serif', color: '#0E1C36' }}
                                    >
                                        {s.value}
                                    </div>
                                    <div className="text-gray-500 text-xs leading-tight">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Image mosaic */}
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ height: '220px', background: 'linear-gradient(135deg, #0E1C36 0%, #1a2f52 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div className="text-center px-4">
                                    <div className="text-5xl mb-2">🏥</div>
                                    <p className="text-white/80 text-sm font-medium">Modern Clinic</p>
                                </div>
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{ height: '220px', background: 'linear-gradient(135deg, #3DD68C 0%, #28b875 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div className="text-center px-4">
                                    <div className="text-5xl mb-2">👨‍⚕️</div>
                                    <p className="text-white text-sm font-medium">Expert Care</p>
                                </div>
                            </div>
                        </div>

                        {/* Google review badge */}
                        <div
                            className="flex items-center gap-4 rounded-2xl p-5"
                            style={{ background: '#ffffff', border: '1px solid #E5E7EB' }}
                        >
                            <svg width="28" height="28" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 17.01 0 20.39 0 24c0 3.61.92 7 2.56 9.78l7.97-6.19z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>
                            <div>
                                <div className="flex gap-0.5 text-amber-400 text-base mb-0.5">★★★★★</div>
                                <div className="font-bold text-gray-900 text-sm">4.8 / 5.0 — 130 Google Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
