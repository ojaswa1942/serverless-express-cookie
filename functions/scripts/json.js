console.log(`This is json.js: Fetch request to receive a JSON`);

fetch('https://cookietest-domain1.netlify.app/.netlify/functions/server/')
.then(res => res.json())
.then(console.log)
.catch((error) => console.log(`There is an error: ${error}`));