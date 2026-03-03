const data = {
    name: "Test User",
    phone: "1234567890",
    service: "General Checkup",
    message: "Test message"
};

fetch('http://localhost:59074/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(async res => {
        const text = await res.text();
        console.log(`Status: ${res.status}`);
        console.log(`Body: ${text}`);
    })
    .catch(err => {
        console.error('Fetch error:', err);
    });
