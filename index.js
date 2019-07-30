const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');

// Server Objekt intitialisieren
const server = http.createServer((req, res) => {

  console.log("Request URL", req.url);
  
  // var initialisieren
  let filePath = '';

  // URL Anfrage -> Routing
  switch (req.url) {
    case '/':
      filePath = path.join(__dirname, 'public', 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'public', 'about.html');
      break;
    default:
      filePath = path.join(__dirname, 'public', req.url);
      break;
  }

  console.log(filePath);
  
  // var Dateiendung
  let extname = path.extname(filePath);

  console.log(extname);
  
  // var default Contentyp intitalisieren
  let contentType = 'text/html';

  // Prüfen der Dateiendung und setzen des Contenttyps für den Header
  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Lesen der Datei
  fs.readFile(filePath, (err, content) => {
    if (err) { // wenn Fehler auftritt
      console.log(err);
      
      // Datei nicht gefunden
      if (err.code === 'ENOENT') { 
        if (contentType !== 'text/html') { //wenn angefragte Datei kein Html
          res.writeHead(404, { 'Content-Type': contentType }); // Antwort Header schreiben
          res.end(content, 'utf8'); // Antwort senden
        } else {  // wenn angefragte Datei Html

          // lese 404 HTML datei
          fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            res.writeHead(404, { 'Content-Type': contentType }); // Antwort Header schreiben
            res.end(content, 'utf8'); // Antwort senden (content enthält 404.html)
          });
        }
      } else {
        // Server Fehler
        res.writeHead(500); // Antwort Header schreiben
        res.end(`Server Error: ${err.code}`); // Antwort senden
      }
    } else {
      // Erfolgreiche Anfrage
      res.writeHead(200, { 'Content-Type': contentType }); // Anwort Header schreiben
      res.end(content, 'utf8'); // Anwort senden (enthält angefragten Dateiinhalt)
    }
  });
});

// Verbindungiinformation für Clouddatenbank
const mysqlConnection = mysql.createConnection({
  host: "db4free.net",
  user: "demonsgalore",
  password: "pass1234",
  database: "demonsgalore",
  multipleStatements: true
});

// verbinnden zur CDB -> prüfen ob Verbindung erfolgreich
mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected!");
  } else {
    console.log("Connection failed!");
  }
});

const PORT = 5000; // Entwicklerport

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Server starten
