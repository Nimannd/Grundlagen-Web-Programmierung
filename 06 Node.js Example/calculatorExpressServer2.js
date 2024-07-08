// Zusätzlich zu express wird body-parser benötigt, um Formulardaten zu verarbeiten.
const express = require('express');
const bodyParser = require('body-parser');

// Konfiguration 
const app = express();
const port = 80;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Servieren der statischen Dateien.
// Nur noch für CSS nötig.
app.use(express.static('calculator2static'))

// Zusätzlich für Dynamic Content wird eine View Engine benötigt.
app.set('view engine', 'ejs'); // EJS ist eine einfache View Engine für Express.

// Handler um den dynamischen content zu servieren.
app.get('/', (req, res) => {
  let model = { numbera: 1, numberb: 1, operation: 'add', result: false };
  res.render('./calculator.ejs', model);
});

// Handler für die Abgabe des Formular
app.post('/calculate', (req, res) => {
  try {

    const { numbera, numberb, operation } = req.body;
    let result;

    switch (operation) {
      case 'add':
        result = parseFloat(numbera) + parseFloat(numberb);
        break;
      case 'subtract':
        result = parseFloat(numbera) - parseFloat(numberb);
        break;
      case 'multiply':
        result = parseFloat(numbera) * parseFloat(numberb);
        break;
      case 'divide':
        result = parseFloat(numbera) / parseFloat(numberb);
        break;
      default:
        result = 'Invalid operation';
    }

    let model = { numbera, numberb, operation, result };
    res.render('./calculator.ejs', { numbera: numbera, numberb: numberb, operation: operation, result: result });
  } catch (error) {
    console.error(error);
    res.render('./calculator.ejs', { numbera: numbera, numberb: numberb, operation: operation, result: error.message });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
