import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://kqwmrnelzcprmjhbkaun.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxd21ybmVsemNwcm1qaGJrYXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNzU5MjAsImV4cCI6MjA4Nzk1MTkyMH0.7Kb4uaO3FZVSFB_yjqA-50M422y8KgtDi_CI7-d48HU'
);

async function test() {
    const { error } = await supabase.from('contacts').insert([
        {
            name: "Test",
            phone: "123456",
        },
    ]);
    console.log("Error object:", error);
    console.log("Error message:", error?.message);
    console.log("JSON stringify:", JSON.stringify({ error: error?.message }));
}

test();
