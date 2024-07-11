const todoModel = require('./TodoModel');

/**
 * Gets all todos in the database.
 */
async function list() {
    return await todoModel.find();
}
/**
 * Creates the passed todo in the database.
 */
async function create(todo) {
    if (!todo)
        throw new Error('Missing todo');

    await todoModel.create(todo);
}

module.exports = {
    list,
    create
};