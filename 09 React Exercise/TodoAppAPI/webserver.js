// Hier ist nur der code um die DB zu starten.
// Drumherum muss noch der Rest des Servers implementiert werden.
const mongoose = require('mongoose');
const todoService = require('./Todos/TodoService');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(url)
    .then(async () => 
    {
        console.log('Connected to MongoDB');
        await todoService.create({ description: 'Learn MongoDB', done: false });
        let todos = await todoService.list();
        console.log('Todos:', todos);
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

