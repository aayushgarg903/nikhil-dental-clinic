import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Strip any HTML / script tags to prevent XSS stored in DB */
function sanitise(value: string): string {
    return value.replace(/<[^>]*>/g, '').trim();
}

const MAX_NAME = 100;
const MAX_PHONE = 20;
const MAX_SERVICE = 80;
const MAX_MSG = 1000;

// ── POST /api/contact ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
    try {
        // Create client inside the handler — ensures env vars are available at runtime
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const body = await req.json();
        const { name, phone, service, message } = body;

        // Validate required fields
        if (!name?.trim() || !phone?.trim()) {
            return NextResponse.json(
                { error: 'Name and phone number are required.' },
                { status: 400 }
            );
        }

        // Sanitise & enforce length limits
        const cleanName = sanitise(String(name)).slice(0, MAX_NAME);
        const cleanPhone = sanitise(String(phone)).slice(0, MAX_PHONE);
        const cleanService = service ? sanitise(String(service)).slice(0, MAX_SERVICE) : null;
        const cleanMsg = message ? sanitise(String(message)).slice(0, MAX_MSG) : null;

        // Phone: only digits, spaces, +, -, ()
        if (!/^[\d\s+\-()\\.]{5,20}$/.test(cleanPhone)) {
            return NextResponse.json(
                { error: 'Please enter a valid phone number.' },
                { status: 400 }
            );
        }

        const { error } = await supabase.from('contacts').insert([
            {
                name: cleanName,
                phone: cleanPhone,
                service: cleanService,
                message: cleanMsg,
            },
        ]);

        if (error) {
            console.error('[contact API] Supabase insert error:', error.message);
            return NextResponse.json(
                { error: 'Could not save your message. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        console.error('[contact API] Unexpected error:', msg);
        return NextResponse.json(
            { error: 'Server error. Please try again later.' },
            { status: 500 }
        );
    }
}
