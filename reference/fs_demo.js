const fs = require('fs'); // Modul für Dateiverwaltung
const path = require('path'); // Modul für Pfade

// Erstellen von Ordner
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if(err) throw err;
  console.log('Folder created...');
});

// Datei erstellt
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
  if(err) throw err;
  console.log('File written to...');

  // Dateiinhalt erweitern 
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I <3 node.js', (err) => {
    if(err) throw err;
    console.log('File written to...');
  });
});

// Datei lesen
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

// Datei umbenennen
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
    if(err) throw err;
    console.log('File renamed...');
  }
);
