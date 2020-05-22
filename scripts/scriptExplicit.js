console.log('I am a script which sets cookie explicitly using document.cookie');

// let randomBinary = Math.random().toString(2).substr(2, 50);
document.cookie = `scriptExplicit=${Math.random().toString(2).substr(2, 50)}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT;`;