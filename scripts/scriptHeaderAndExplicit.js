console.log('I am a script which sets both Set-Cookie Header AND cookie explicitly using document.cookie');

let randomBinary = Math.random().toString(2).substr(2, 50);
document.cookie = `explicit_scriptHeaderAndExplicit=${randomBinary}; path=/; expires=Tue, 21 Jan 2038 03:14:07 GMT;`;
