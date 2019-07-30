const os = require('os'); //modul zum anzeigen von Systeminformationen

// Platform
console.log(os.platform());

// CPU Architektur
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Freier Arbeitsspeicher
console.log(os.freemem());

// Gesamter Arbeitspeicher
console.log(os.totalmem());

// Home Verzeichnis
console.log(os.homedir());

// PC Laufzeit
console.log(os.uptime());
