const mongoose = require('mongoose');

/**
 * Todo model schema.
 */
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true },
}, { collection: 'todos' });

const TodoModel = mongoose.model('todo', todoSchema);
module.exports = TodoModel

