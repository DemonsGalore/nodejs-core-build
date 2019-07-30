const EventEmitter = require('events'); //Modul für Eventtrigger

// Klasse erzeugen
class MyEmitter extends EventEmitter {};

// Objekt initialisieren
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired'));

// Trigger Event
myEmitter.emit('event');
