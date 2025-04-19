// Zusätzlich zu express wird body-parser benötigt, um Formulardaten zu verarbeiten.
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Servieren der statischen Dateien.
app.use(express.static('calculator'))

// Handler für die Abgabe des Formular
app.post('/calculate', (req, res) => {
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

  res.send(`The result of the operation is: ${result}`);
});

// Server starten
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
