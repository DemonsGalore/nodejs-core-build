const path = require('path'); // Modul für Pfade

// Name der Ausgeführten Datei
console.log(path.basename(__filename));

// Ordnername von der ausgeführten Datei
console.log(path.dirname(__filename));

// Dateiendung der ausgeführten Datei
console.log(path.extname(__filename));

// Zusammensetzung der Dateiendung und Namen der ausgeführten Datei
console.log(path.parse(__filename).base);

// Selbst zusammengesetzter Pfad
console.log(path.join(__dirname, 'test', 'hello.html'));
