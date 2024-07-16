// Hier ist nur der code um die DB zu starten.
// Drumherum muss noch der Rest des Servers implementiert werden.
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

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

// Use the cors middleware
app.use(cors());

app.use(express.json());

// Handler um den dynamischen content zu servieren.
app.get('/api/todo', async (req, res, next) => {
    try {
        let todos = await todoService.list();
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
});


// Handler zum erstellen eines To-Dos
app.post('/api/todo', async (req, res, next) => {
    try {
        let todo = await todoService.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
});

// Handler zum updaten eines To-Dos
app.put('/api/todo', async (req, res, next) => {
    try {
        let todo = await todoService.update(req.body.id, req.body)
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
});

// Handler zum löschen eines To-Dos
app.delete('/api/todo', async (req, res, next) => {
    try {
        await todoService.deleteById(req.body._id)
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

function errorHandler(err, req, res, next) {
    console.error(err);
    if (!err) {
        let errorJson = {
            errortitle: "Internal Server Error",
            error: ""
        };

        res.status(500).json(errorJson);
    }
    else {
        let statusCode = err.statusCode || 500;

        let errorJson = {
            errortitle: err.message,
            error: err.stack
        };

        res.status(statusCode).json(errorJson);
    }
}

function notFoundHandler(req, res, next) {
    let error = new Error("Not Found - " + req.url);
    error.statusCode = 404;
    next(error);
}

app.use(notFoundHandler);
app.use(errorHandler);

// Server starten
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});