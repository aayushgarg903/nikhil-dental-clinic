import { createClient } from '@supabase/supabase-js';

type Contact = {
    id: number;
    name: string;
    phone: string;
    service: string | null;
    message: string | null;
    created_at: string;
};

export default async function AdminPage({
    searchParams,
}: {
    searchParams: Promise<{ pwd?: string }>;
}) {
    const params = await searchParams;
    const providedPwd = params.pwd ?? '';
    const correctPwd = process.env.ADMIN_PASSWORD ?? 'doctor123';

    // ── Auth check ─────────────────────────────────────────────────────────
    if (providedPwd !== correctPwd) {
        return <LoginPage wrongPassword={!!providedPwd} />;
    }

    // Create Supabase client inside the function (required for Next.js server components)
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // ── Fetch contacts ──────────────────────────────────────────────────────
    const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
                <p style={{ color: '#B91C1C' }}>Error loading messages: {error.message}</p>
            </div>
        );
    }

    const contacts: Contact[] = data ?? [];

    return (
        <div style={{ minHeight: '100vh', background: '#F2F0D8', fontFamily: 'DM Sans, sans-serif' }}>
            {/* Header */}
            <div style={{ background: '#253C2C', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ fontFamily: 'DM Serif Display, serif', color: 'white', fontSize: '1.5rem', margin: 0, fontWeight: 400 }}>
                        Nikhil Dental Clinic
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', margin: '0.2rem 0 0' }}>
                        Admin Dashboard — Patient Messages
                    </p>
                </div>
                <div style={{
                    background: 'rgba(255,255,255,0.12)',
                    borderRadius: '999px',
                    padding: '0.4rem 1rem',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.8rem',
                }}>
                    {contacts.length} message{contacts.length !== 1 ? 's' : ''}
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
                {contacts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '5rem 0', color: '#6B6B6B' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
                        <p style={{ fontSize: '1.1rem' }}>No messages yet.</p>
                        <p style={{ fontSize: '0.875rem' }}>When patients fill in the contact form, their messages will appear here.</p>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: 0,
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                            background: 'white',
                        }}>
                            <thead>
                                <tr style={{ background: '#253C2C' }}>
                                    {['#', 'Name', 'Phone', 'Service', 'Message', 'Received'].map((h, i) => (
                                        <th key={h} style={{
                                            padding: '1rem 1.25rem',
                                            textAlign: 'left',
                                            color: 'rgba(255,255,255,0.85)',
                                            fontSize: '0.72rem',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            borderRight: i < 5 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                        }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c, idx) => (
                                    <tr
                                        key={c.id}
                                        style={{ borderBottom: '1px solid #EAE8D4', background: idx % 2 === 0 ? 'white' : '#FAFAF5' }}
                                    >
                                        <td style={{ padding: '1rem 1.25rem', color: '#9CA3AF', fontSize: '0.8rem', width: '40px' }}>
                                            {contacts.length - idx}
                                        </td>
                                        <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: '#111', fontSize: '0.88rem' }}>
                                            {c.name}
                                        </td>
                                        <td style={{ padding: '1rem 1.25rem', color: '#253C2C', fontSize: '0.88rem' }}>
                                            <a href={`tel:${c.phone}`} style={{ color: '#253C2C', textDecoration: 'none', fontWeight: 500 }}>
                                                {c.phone}
                                            </a>
                                        </td>
                                        <td style={{ padding: '1rem 1.25rem', fontSize: '0.85rem', color: '#6B6B6B' }}>
                                            {c.service ? (
                                                <span style={{
                                                    background: '#E8F0E9',
                                                    color: '#253C2C',
                                                    padding: '0.25rem 0.65rem',
                                                    borderRadius: '999px',
                                                    fontSize: '0.78rem',
                                                    fontWeight: 500,
                                                }}>
                                                    {c.service}
                                                </span>
                                            ) : (
                                                <span style={{ color: '#C4C4C4', fontSize: '0.8rem' }}>—</span>
                                            )}
                                        </td>
                                        <td style={{ padding: '1rem 1.25rem', fontSize: '0.85rem', color: '#444', maxWidth: '300px' }}>
                                            {c.message ? (
                                                <span title={c.message}>
                                                    {c.message.length > 80 ? c.message.slice(0, 80) + '…' : c.message}
                                                </span>
                                            ) : (
                                                <span style={{ color: '#C4C4C4', fontSize: '0.8rem' }}>—</span>
                                            )}
                                        </td>
                                        <td style={{ padding: '1rem 1.25rem', fontSize: '0.8rem', color: '#9CA3AF', whiteSpace: 'nowrap' }}>
                                            {new Date(c.created_at).toLocaleString('en-IN', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true,
                                            })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Login page component ─────────────────────────────────────────────────────

function LoginPage({ wrongPassword }: { wrongPassword: boolean }) {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#F2F0D8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'DM Sans, sans-serif',
        }}>
            <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '3rem 2.5rem',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                border: '1px solid #E0DDCC',
            }}>
                {/* Icon */}
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '56px', height: '56px',
                        background: '#253C2C',
                        borderRadius: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                    }}>🦷</div>
                </div>

                <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem', color: '#111', textAlign: 'center', margin: '0 0 0.3rem', fontWeight: 400 }}>
                    Admin Access
                </h1>
                <p style={{ fontSize: '0.85rem', color: '#6B6B6B', textAlign: 'center', marginBottom: '2rem' }}>
                    Nikhil Dental Clinic — Doctor Dashboard
                </p>

                {wrongPassword && (
                    <div style={{
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        fontSize: '0.85rem',
                        color: '#B91C1C',
                        marginBottom: '1.25rem',
                        textAlign: 'center',
                    }}>
                        Incorrect password. Please try again.
                    </div>
                )}

                <form method="GET" action="/admin">
                    <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6B6B6B', display: 'block', marginBottom: '6px' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="pwd"
                        autoFocus
                        required
                        placeholder="Enter admin password"
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid #E0DDCC',
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.9rem',
                            background: '#F2F0D8',
                            outline: 'none',
                            boxSizing: 'border-box',
                            marginBottom: '1.25rem',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.85rem',
                            background: '#253C2C',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            letterSpacing: '0.02em',
                        }}
                    >
                        View Messages
                    </button>
                </form>
            </div>
        </div>
    );
}
