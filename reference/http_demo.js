const http = require('http'); // Modul für http Server

// Erstellen eines Server Objektes
http.createServer((req, res) => {
  // Response
  res.write('Hello World');
  res.end();

    //starten(Server Port => Log in ComandLine) 
}).listen(5000, () => console.log('Server running...'));
