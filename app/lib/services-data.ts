export interface Service {
    slug: string;
    label: string;
    tagline: string;
    heroDesc: string;
    img: string;
    duration: string;
    sessions: string;
    recovery: string;
    benefits: string[];
    steps: { title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    relatedSlugs: string[];
}

export const services: Service[] = [
    {
        slug: 'general-dentistry',
        label: 'General Dentistry',
        tagline: 'Your foundation for lifelong oral health',
        heroDesc:
            'Regular dental check-ups and cleanings are the cornerstone of a healthy, confident smile. Our general dentistry services are designed to catch problems early and keep your teeth in peak condition.',
        img: '/dental-hygiene.png',
        duration: '30–60 min',
        sessions: '1–2 per year',
        recovery: 'None',
        benefits: [
            'Early detection of cavities, gum disease, and oral cancer',
            'Professional cleaning removes plaque and tartar buildup',
            'Fresh breath and a brighter, cleaner smile',
            'Personalised advice on brushing, flossing, and diet',
            'Digital X-rays with minimal radiation for precise diagnosis',
            'Helps prevent costly treatments by catching issues early',
        ],
        steps: [
            { title: 'Consultation & History', desc: 'We review your medical and dental history and discuss any concerns you have.' },
            { title: 'Oral Examination', desc: 'A thorough check of teeth, gums, tongue, and jaw for any signs of problems.' },
            { title: 'Digital X-Rays', desc: 'Low-radiation X-rays help us detect cavities and bone issues invisible to the naked eye.' },
            { title: 'Professional Cleaning', desc: 'Our hygienist removes plaque, tartar, and surface stains using ultrasonic tools.' },
            { title: 'Polishing & Fluoride', desc: 'Teeth are polished and a fluoride treatment is applied to strengthen enamel.' },
            { title: 'Personalised Care Plan', desc: 'We discuss findings and recommend a home-care routine or further treatments if needed.' },
        ],
        faqs: [
            { q: 'How often should I visit the dentist?', a: 'We recommend every 6 months for most patients. Those with gum disease or high cavity risk may need more frequent visits.' },
            { q: 'Does a dental cleaning hurt?', a: 'Most patients find it comfortable. If you have sensitive gums we can use gentler techniques and topical numbing.' },
            { q: 'What if I haven\'t been in years?', a: 'No judgment — we see patients at all stages. We\'ll start with a thorough assessment and create a catch-up plan.' },
        ],
        relatedSlugs: ['dental-filling', 'teeth-whitening', 'paediatric-dentistry'],
    },
    {
        slug: 'dental-filling',
        label: 'Dental Filling',
        tagline: 'Natural-looking repairs for damaged teeth',
        heroDesc:
            'Modern tooth-coloured composite fillings restore decayed or damaged teeth so seamlessly that even you won\'t notice them. Say goodbye to unsightly metal fillings.',
        img: '/dental-whitening.png',
        duration: '30–60 min',
        sessions: '1',
        recovery: 'None (minor sensitivity for 1–2 days)',
        benefits: [
            'Tooth-coloured resin blends perfectly with natural teeth',
            'Minimal drilling — we preserve as much healthy tooth as possible',
            'Bonds chemically to tooth structure for added strength',
            'No mercury or metal — safe for all patients',
            'Completed in a single appointment',
            'Durable — lasts 7–10 years with proper care',
        ],
        steps: [
            { title: 'Numbing', desc: 'We apply a topical anaesthetic followed by a local injection so you feel nothing.' },
            { title: 'Decay Removal', desc: 'Infected or damaged tooth material is carefully removed using a dental drill or laser.' },
            { title: 'Tooth Preparation', desc: 'The cavity is cleaned, shaped, and conditioned to accept the filling material.' },
            { title: 'Composite Layering', desc: 'The resin is applied in thin layers and sculpted to match your tooth\'s natural shape.' },
            { title: 'Curing', desc: 'Each layer is hardened with a special blue light in seconds.' },
            { title: 'Bite Check & Polish', desc: 'We check your bite alignment and polish the filling for a smooth, natural finish.' },
        ],
        faqs: [
            { q: 'Will the filling be visible?', a: 'No. We colour-match the composite resin precisely to your tooth shade, making it virtually invisible.' },
            { q: 'How long does a filling last?', a: 'Composite fillings typically last 7–10 years. Proper brushing, flossing, and regular check-ups extend their lifespan.' },
            { q: 'Can I eat after getting a filling?', a: 'Yes! Composite fillings harden immediately under the curing light, so you can eat and drink normally right away.' },
        ],
        relatedSlugs: ['root-canal', 'crown-veneers', 'general-dentistry'],
    },
    {
        slug: 'tooth-extraction',
        label: 'Tooth Extraction',
        tagline: 'Gentle, pain-free removal when it\'s time to let go',
        heroDesc:
            'When a tooth is too damaged to save, extraction is the safest option. Our team uses the latest techniques to make the process as comfortable and quick as possible.',
        img: '/hero-bg.jpg',
        duration: '20–45 min',
        sessions: '1',
        recovery: '2–3 days rest, 1–2 weeks full healing',
        benefits: [
            'Relieves severe toothache and infection immediately',
            'Prevents spread of infection to surrounding teeth and jaw',
            'Wisdom tooth removal prevents crowding and impaction',
            'Prepares jaw for dentures or implants',
            'Modern anaesthesia ensures a pain-free experience',
            'Post-extraction guidance to ensure smooth healing',
        ],
        steps: [
            { title: 'Assessment & X-Ray', desc: 'We take an X-ray to understand the position of the tooth and surrounding bone.' },
            { title: 'Anaesthesia', desc: 'Local anaesthetic is administered so the area is completely numb before we begin.' },
            { title: 'Loosening the Tooth', desc: 'We use a dental elevator to gently loosen the tooth from its socket.' },
            { title: 'Extraction', desc: 'The tooth is carefully removed with forceps. For complex cases a small incision may be made.' },
            { title: 'Gauze & Pressure', desc: 'A gauze pad is placed over the socket and you\'ll bite down to control bleeding.' },
            { title: 'Aftercare Instructions', desc: 'We provide detailed instructions on diet, pain management, and signs to watch for.' },
        ],
        faqs: [
            { q: 'Will the extraction hurt?', a: 'No. You\'ll receive effective local anaesthesia so you\'ll feel pressure but no pain during the procedure.' },
            { q: 'What can I eat after extraction?', a: 'Stick to soft foods like yogurt, dal, khichdi, and ice cream for 2–3 days. Avoid hard, crunchy, or very hot foods.' },
            { q: 'Do I need to replace the extracted tooth?', a: 'Yes, in most cases. Options include dental implants, bridges, or partial dentures. We\'ll discuss the best option for you.' },
        ],
        relatedSlugs: ['dental-implants', 'root-canal', 'general-dentistry'],
    },
    {
        slug: 'braces-orthodontics',
        label: 'Braces & Orthodontics',
        tagline: 'Straighten your smile, transform your confidence',
        heroDesc:
            'Whether you prefer traditional metal braces, sleek ceramic brackets, or near-invisible clear aligners, we have the right orthodontic solution to give you the smile you\'ve always wanted.',
        img: '/dental-doctor.png',
        duration: 'Ongoing treatment',
        sessions: 'Monthly adjustments',
        recovery: 'None (mild soreness after adjustments)',
        benefits: [
            'Corrects crowding, spacing, overbite, underbite, and crossbite',
            'Multiple options: metal, ceramic, lingual, and clear aligners',
            'Improves oral hygiene — straight teeth are easier to clean',
            'Can correct jaw misalignment and reduce TMJ pain',
            'Boosts self-confidence with a straighter, more attractive smile',
            'Long-lasting results with proper retainer use',
        ],
        steps: [
            { title: 'Orthodontic Consultation', desc: 'We assess your bite, teeth alignment, and jaw structure with photos and X-rays.' },
            { title: 'Custom Treatment Plan', desc: 'A personalised plan is created specifying the type of braces, timeline, and expected results.' },
            { title: 'Fitting', desc: 'Brackets are bonded to your teeth and the archwire is threaded through. Clear aligner trays are custom-fitted.' },
            { title: 'Monthly Adjustments', desc: 'Regular appointments every 4–6 weeks to tighten wires or provide new aligner trays.' },
            { title: 'Progress Monitoring', desc: 'We track tooth movement and make adjustments to keep you on schedule.' },
            { title: 'Retainer Phase', desc: 'After braces are removed, a custom retainer holds your teeth in their new position.' },
        ],
        faqs: [
            { q: 'How long does orthodontic treatment take?', a: 'Most cases take 12–24 months. Minor corrections may be done in 6–12 months. We\'ll give you a personalised estimate.' },
            { q: 'Are clear aligners as effective as braces?', a: 'For mild to moderate corrections, yes. Severe cases may still need traditional braces for the best results.' },
            { q: 'Can adults get braces?', a: 'Absolutely! Orthodontic treatment is effective at any age. Clear aligners are especially popular with adults as they\'re nearly invisible.' },
        ],
        relatedSlugs: ['smile-makeover', 'general-dentistry', 'teeth-whitening'],
    },
    {
        slug: 'teeth-whitening',
        label: 'Teeth Whitening',
        tagline: 'Brighten your smile by several shades in one visit',
        heroDesc:
            'Professional teeth whitening delivers dramatically brighter results than over-the-counter products — safely, quickly, and under expert supervision.',
        img: '/dental-whitening.png',
        duration: '60–90 min',
        sessions: '1 (top-ups as needed)',
        recovery: 'Avoid staining foods for 48 hrs',
        benefits: [
            'Brightens teeth by 4–8 shades in a single session',
            'Safe, dentist-supervised procedure with professional-grade gel',
            'Fast results — noticeable difference immediately after',
            'Custom-fitted trays for at-home top-up treatments',
            'Addresses stains from coffee, tea, wine, and tobacco',
            'Boosts confidence for special occasions, weddings, and interviews',
        ],
        steps: [
            { title: 'Pre-Whitening Assessment', desc: 'We check for cavities, gum disease, or sensitivity that must be treated first.' },
            { title: 'Shade Measurement', desc: 'Your current tooth shade is recorded so we can measure improvement after treatment.' },
            { title: 'Gum Protection', desc: 'A protective gel or rubber shield is applied to your gums before treatment begins.' },
            { title: 'Whitening Gel Application', desc: 'A professional-strength hydrogen peroxide gel is applied to the teeth.' },
            { title: 'Light Activation', desc: 'A special LED or laser light activates the gel to accelerate the whitening process.' },
            { title: 'Results & Home Kit', desc: 'We reveal your new shade and provide a custom home maintenance kit.' },
        ],
        faqs: [
            { q: 'Does whitening damage enamel?', a: 'No. Professional-grade whitening gels are clinically tested and safe. We carefully manage concentration and exposure time.' },
            { q: 'How long do results last?', a: 'Results typically last 6–12 months depending on diet habits. Avoiding coffee, tea, and tobacco extends results significantly.' },
            { q: 'Will my dental restorations (crowns, veneers) whiten?', a: 'No. Whitening only works on natural tooth enamel. We\'ll advise you on the best approach if you have visible restorations.' },
        ],
        relatedSlugs: ['smile-makeover', 'crown-veneers', 'general-dentistry'],
    },
    {
        slug: 'root-canal',
        label: 'Root Canal Therapy',
        tagline: 'Save your tooth — end the pain for good',
        heroDesc:
            'A root canal is not something to fear — it\'s a tooth-saving procedure that relieves severe pain and eliminates infection. With modern anaesthesia, most patients are surprised by how comfortable it is.',
        img: '/dental-hygiene.png',
        duration: '60–90 min',
        sessions: '1–2',
        recovery: '2–3 days mild soreness',
        benefits: [
            'Saves a natural tooth that would otherwise need extraction',
            'Eliminates severe toothache caused by infected pulp',
            'Stops the spread of infection to neighbouring teeth and bone',
            'Restores normal biting and chewing function',
            'Virtually pain-free with modern anaesthesia techniques',
            'Long-term solution — a treated tooth can last a lifetime with proper care',
        ],
        steps: [
            { title: 'Diagnosis & X-Ray', desc: 'We confirm infection of the pulp using X-rays and symptom assessment.' },
            { title: 'Anaesthesia', desc: 'Local anaesthetic is administered. The area is completely numb — you will not feel pain.' },
            { title: 'Pulp Removal', desc: 'A tiny opening is made in the crown to access and remove the infected pulp tissue.' },
            { title: 'Canal Cleaning', desc: 'The root canals are shaped and cleaned thoroughly using fine instruments.' },
            { title: 'Filling the Canal', desc: 'The cleaned canals are filled with a biocompatible rubber material called gutta-percha.' },
            { title: 'Crown Placement', desc: 'A dental crown is placed over the tooth to restore its strength and protect it from fracture.' },
        ],
        faqs: [
            { q: 'Is a root canal painful?', a: 'No. The procedure is performed under local anaesthesia. You may feel mild pressure but no pain. Post-procedure soreness is manageable with OTC pain relievers.' },
            { q: 'How do I know if I need a root canal?', a: 'Signs include severe toothache, sensitivity to hot/cold lasting 30+ seconds, darkening of the tooth, swelling, or a pimple on the gum.' },
            { q: 'Is extraction a better option?', a: 'Keeping your natural tooth is always preferable. Root canals have a very high success rate and a treated tooth can last decades.' },
        ],
        relatedSlugs: ['dental-filling', 'crown-veneers', 'tooth-extraction'],
    },
    {
        slug: 'dental-implants',
        label: 'Dental Implants',
        tagline: 'The gold standard for replacing missing teeth',
        heroDesc:
            'Dental implants look, feel, and function exactly like natural teeth. A titanium post fused to your jawbone provides a permanent, stable foundation — no slipping, no adhesives.',
        img: '/dental-doctor.png',
        duration: '1–2 hrs (surgical phase)',
        sessions: 'Multiple over 3–6 months',
        recovery: '3–7 days post-surgery',
        benefits: [
            'Looks, feels, and functions exactly like a natural tooth',
            'Titanium post fuses with jawbone — no slipping or movement',
            'Prevents bone loss that occurs after tooth loss',
            'Does not affect neighbouring teeth (unlike bridges)',
            'Extremely durable — can last 20+ years with good care',
            'Restores full chewing and speaking ability',
        ],
        steps: [
            { title: 'Consultation & Bone Assessment', desc: 'We take a 3D CBCT scan to evaluate jawbone density and plan implant placement precisely.' },
            { title: 'Implant Placement', desc: 'Under local anaesthesia, a titanium post is surgically placed into the jawbone.' },
            { title: 'Osseointegration', desc: 'Over 3–6 months, the implant fuses naturally with the jawbone — called osseointegration.' },
            { title: 'Abutment Fitting', desc: 'A connector piece (abutment) is attached to the implant to support the crown.' },
            { title: 'Crown Fabrication', desc: 'A custom crown is crafted to match your surrounding teeth in size, shape, and colour.' },
            { title: 'Crown Placement & Final Checks', desc: 'The permanent crown is attached. Bite alignment is checked and final adjustments made.' },
        ],
        faqs: [
            { q: 'Is implant surgery painful?', a: 'The procedure is done under local anaesthesia. Post-surgical discomfort is typically managed well with prescribed pain medication.' },
            { q: 'Am I a candidate for implants?', a: 'Most adults with good general health qualify. Sufficient jawbone density is required. Smokers, diabetics, or those on certain medications require evaluation.' },
            { q: 'How do I care for implants?', a: 'Exactly like natural teeth — brush twice daily, floss, and attend regular dental check-ups. No special products needed.' },
        ],
        relatedSlugs: ['tooth-extraction', 'crown-veneers', 'general-dentistry'],
    },
    {
        slug: 'smile-makeover',
        label: 'Smile Makeover',
        tagline: 'Your dream smile, designed just for you',
        heroDesc:
            'A smile makeover combines multiple cosmetic treatments into one comprehensive plan to give you the smile you\'ve always envisioned — tailored to your face, personality, and lifestyle.',
        img: '/dental-whitening.png',
        duration: 'Varies (weeks to months)',
        sessions: 'Multiple appointments',
        recovery: 'Varies by treatments involved',
        benefits: [
            'Custom combination of treatments for your unique smile goals',
            'Addresses colour, shape, size, alignment, and spacing all at once',
            'Digital smile preview — see your result before treatment begins',
            'Massively boosts self-confidence and quality of life',
            'Uses porcelain veneers, whitening, bonding, implants, or aligners',
            'Long-lasting results that can transform your appearance',
        ],
        steps: [
            { title: 'Smile Analysis', desc: 'We analyse your facial features, gum line, tooth proportions, and discuss your smile goals.' },
            { title: 'Digital Smile Preview', desc: 'Using smile design software, we show you a preview of your expected result before treatment.' },
            { title: 'Custom Treatment Plan', desc: 'We design a step-by-step plan combining the right procedures in the right sequence.' },
            { title: 'Preparatory Treatments', desc: 'Any necessary work such as gum contouring, extractions, or orthodontics is completed first.' },
            { title: 'Core Cosmetic Procedures', desc: 'Veneers, whitening, bonding, crowns, or implants are applied according to the plan.' },
            { title: 'Final Review & Refinement', desc: 'We review results together and make any fine adjustments for the perfect smile.' },
        ],
        faqs: [
            { q: 'How much does a smile makeover cost?', a: 'It depends on which treatments are included. We provide a detailed, transparent quote after your consultation with no hidden charges.' },
            { q: 'How long does a smile makeover take?', a: 'Simple makeovers can be done in 2–4 weeks. Complex cases involving orthodontics or implants may take 6–12 months.' },
            { q: 'Are the results permanent?', a: 'Most results are long-lasting. Veneers last 10–15 years, whitening 6–12 months. We\'ll guide you on maintaining your results.' },
        ],
        relatedSlugs: ['teeth-whitening', 'crown-veneers', 'braces-orthodontics'],
    },
    {
        slug: 'paediatric-dentistry',
        label: 'Paediatric Dentistry',
        tagline: 'Building healthy habits from the very first tooth',
        heroDesc:
            'Children\'s dental care is about more than just teeth — it\'s about creating a positive dental experience that builds lifelong habits and a foundation of oral health.',
        img: '/dental-hygiene.png',
        duration: '30–45 min',
        sessions: 'Every 6 months',
        recovery: 'None',
        benefits: [
            'Child-friendly environment designed to reduce anxiety',
            'Early detection of developmental and bite problems',
            'Preventive treatments like sealants and fluoride to stop cavities',
            'Patient, gentle approach that builds dental confidence',
            'Parent education on diet, brushing technique, and thumb habits',
            'First visits from age 1 — we start them early for best results',
        ],
        steps: [
            { title: 'Welcome & Orientation', desc: 'We introduce your child to the dental chair, tools, and team in a fun, friendly way.' },
            { title: 'Gentle Examination', desc: 'We check tooth eruption, gum health, and bite development at an age-appropriate pace.' },
            { title: 'Cleaning & Polish', desc: 'A gentle professional cleaning tailored to the child\'s age and comfort level.' },
            { title: 'Fluoride Treatment', desc: 'A fluoride varnish is applied to strengthen enamel and prevent cavities.' },
            { title: 'Dental Sealants (if needed)', desc: 'Thin protective coatings applied to back teeth to seal out food and bacteria.' },
            { title: 'Parent Guidance', desc: 'We share personalised advice on brushing, diet, and the next developmental stage.' },
        ],
        faqs: [
            { q: 'When should my child first visit the dentist?', a: 'By their first birthday, or within 6 months of their first tooth appearing — whichever comes first.' },
            { q: 'My child is scared of dentists. Can you help?', a: 'Absolutely. We are trained in child behaviour management and use gentle techniques, distraction tools, and a calming environment.' },
            { q: 'When do milk teeth fall out naturally?', a: 'Front teeth typically start loosening at age 6–7. All milk teeth are usually replaced by age 12–13. We monitor this at every visit.' },
        ],
        relatedSlugs: ['general-dentistry', 'dental-filling', 'braces-orthodontics'],
    },
    {
        slug: 'crown-veneers',
        label: 'Crowns & Veneers',
        tagline: 'Restore strength and perfect your smile\'s appearance',
        heroDesc:
            'Crowns restore damaged teeth to full function, while porcelain veneers are ultra-thin shells that transform the colour, shape, and size of your teeth for a flawless smile.',
        img: '/dental-doctor.png',
        duration: '60–90 min per session',
        sessions: '2',
        recovery: 'Minimal (temporary sensitivity)',
        benefits: [
            'Porcelain crowns and veneers are indistinguishable from natural teeth',
            'Crowns restore cracked, broken, or severely decayed teeth',
            'Veneers cover stains, chips, gaps, and misshapen teeth',
            'Custom-fabricated to match your tooth shade, shape, and size',
            'Highly durable — crowns last 10–15 years, veneers 10–20 years',
            'Minimal removal of natural tooth structure for veneers',
        ],
        steps: [
            { title: 'Consultation & Planning', desc: 'We assess which teeth need crowns or veneers and discuss the desired outcome.' },
            { title: 'Tooth Preparation', desc: 'A thin layer of enamel is removed to make space for the crown or veneer.' },
            { title: 'Impressions', desc: 'Digital or traditional impressions are taken and sent to the dental laboratory.' },
            { title: 'Temporary Restoration', desc: 'A temporary crown or veneer protects your tooth while the permanent one is fabricated.' },
            { title: 'Try-In & Adjustment', desc: 'The finished restoration is tried in, adjusted for fit, bite, and shade before bonding.' },
            { title: 'Final Bonding', desc: 'The permanent crown or veneer is bonded using dental cement for a strong, lasting hold.' },
        ],
        faqs: [
            { q: 'What\'s the difference between a crown and a veneer?', a: 'A crown covers the entire tooth and is used when the tooth is broken or weakened. A veneer covers only the front surface and is primarily cosmetic.' },
            { q: 'Do veneers look natural?', a: 'Yes. Porcelain veneers mimic the light-reflecting properties of natural enamel and are custom-tinted to match surrounding teeth perfectly.' },
            { q: 'Can I get veneers on all my front teeth?', a: 'Yes, many patients opt for 6–8 veneers across the upper front teeth for a complete smile transformation.' },
        ],
        relatedSlugs: ['smile-makeover', 'teeth-whitening', 'dental-filling'],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
    return services.filter((s) => slugs.includes(s.slug));
}
