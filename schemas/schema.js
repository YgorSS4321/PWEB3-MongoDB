const mongoose = require('mongoose');

const toDoListSchema = mongoose.Schema({
    columnTitle: String,
    task: String,
    description: String,
});

module.exports = mongoose.model('todoList', toDoListSchema);
