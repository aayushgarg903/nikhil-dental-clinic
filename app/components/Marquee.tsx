export default function Marquee() {
    const items = [
        'Dental Support',
        '✦',
        'Comprehensive Care',
        '✦',
        'Pain-Free Treatment',
        '✦',
        'Trusted by 130+ Patients',
        '✦',
        'Rohtak\'s Finest Clinic',
        '✦',
        'Dental Support',
        '✦',
        'Comprehensive Care',
        '✦',
        'Pain-Free Treatment',
        '✦',
        'Trusted by 130+ Patients',
        '✦',
    ];

    return (
        <div style={{ background: '#2D4A38', padding: '1.25rem 0', overflow: 'hidden' }}>
            <div className="marquee-track" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        style={{
                            fontFamily: item === '✦' ? 'serif' : 'Syne, sans-serif',
                            fontWeight: item === '✦' ? 400 : 600,
                            fontSize: item === '✦' ? '0.8rem' : '1rem',
                            color: item === '✦' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.85)',
                            whiteSpace: 'nowrap',
                            letterSpacing: item === '✦' ? 0 : '-0.01em',
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
