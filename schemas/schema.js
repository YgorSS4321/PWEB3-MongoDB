const mongoose = require('mongoose');

const toDoListSchema = mongoose.Schema({
    columnTitle: String,
    task: String,
    description: String,
});

module.exports = mongoose.model('ToDoList', toDoListSchema);

/*
async function setToDoListTask(task){
    const taskInformation = {
        columnTitle: task,
        task: task,
        description: task,
    };
    await new userSchema(taskInformation).salve();
}

export {setToDoListTask};
*/


