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

    return await todoModel.create(todo);
}

/**
 * Updates the passed todo in the database by id.
 */
async function update(id, todo) {
    if (!todo)
        throw new Error('Missing todo');

    return await todoModel.findByIdAndUpdate(id, todo, {new: true});
}

/**
 * Deletes the todo in the database by id.
 */
async function deleteById(id) {
    await todoModel.findByIdAndDelete(id);
}

module.exports = {
    list,
    create,
    update,
    deleteById
};