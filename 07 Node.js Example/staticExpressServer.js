// Verwendung von Express.js, um eine einfache Webserver-Anwendung zu erstellen
const express = require('express');

const app = express();
const port = 80;

// Füge eine Static Content Funktionalität hinzu. Auf dem Ordner static
app.use(express.static('static'))

// Siehe Hinweis im README.md
// var options = {
//   index: "startseite.html"
// };
// app.use('/', express.static('static', options));

// Server starten
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
