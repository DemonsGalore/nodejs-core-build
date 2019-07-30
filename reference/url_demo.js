const url = require('url');

const myUrl = new URL('http://kekse.blubb.com:8000/hello.html?id=100&status=active');

// URL anzeigen
console.log(myUrl.href);
console.log(myUrl.toString());

// Host 
console.log(myUrl.host);

// Hostname 
console.log(myUrl.hostname);

// Pfad
console.log(myUrl.pathname);

// Parameter als String
console.log(myUrl.search);

// Parameter als Objekt
console.log(myUrl.searchParams);

// Paramelter hinzufügen und wieder ausgeben
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Parameter einzeln anzeigen
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
