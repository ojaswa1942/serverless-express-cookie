console.log(`This is jsonHeader.js: Fetch request to receive a JSON with Set-Cookie`);

fetch('https://cookietest-domain1.netlify.app/.netlify/functions/server/jsonHeader', {
    method: 'GET',
    credentials: 'include'
})
.then(res => res.json())
.then(console.log);