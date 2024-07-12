// Hier ist nur der code um die DB zu starten.
// Drumherum muss noch der Rest des Servers implementiert werden.
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const todoService = require('./Todos/TodoService');
const { create } = require('./Todos/TodoModel');

// Mongo DB connection
// Connection URL and Database Name
const url = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(url)
    .then(async () => { console.log('Connected to MongoDB'); })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Express
const app = express();
const port = 80;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Statische Dateien im Ordner "ressources" servieren, nur für das css
app.use(express.static('ressources'));

// Zusätzlich für Dynamic Content wird eine View Engine benötigt.
app.set('view engine', 'ejs'); // EJS ist eine einfache View Engine für Express.

// Handler um den dynamischen content zu servieren.
app.get('/', async (req, res) => {
    let todos = await todoService.list();
    let dto = { todos: todos };
    res.render('./todolist.ejs', dto);
});

function renderError(res, error) {
    res.render('./error.ejs', { errortitle: error.message, error: error.stack })
}

// Handler für die Abgabe des Formular
app.post('/', (req, res) => {
    try {
        const { action, id, description, done } = req.body;

        switch (action) {
            case "create":
                todoService.create({ description, done: false })
                    .then(() => res.redirect('/'))
                    .catch(err => renderError(res, err));
                break;
            case "check":
                todoService.update(id, { description, done: done == 'true' ? false : true })
                    .then(() => res.redirect('/'))
                    .catch(err => renderError(res, err));
                break;
            case "delete":
                todoService.deleteById(id)
                    .then(() => res.redirect('/'))
                    .catch(err => renderError(res, err));
                break;
            default:
                res.redirect('/');
        }
    } catch (error) {
        console.error(error);
        renderError(res, error);
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
