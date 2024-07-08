// Verwende die Node Library um einen einfachen HTTP Server zu erstellen
const { createServer } = require('node:http');

// Server Konfiguration
const hostname = '127.0.0.1';
const port = 3000;

// Server erstellen mit einer Funktion die bei jedem Request ausgeführt wird
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
  console.log(`Request von ${req.url} verarbeitet.`);
});

// Server starten
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
