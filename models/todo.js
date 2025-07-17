const mongoose = require('mongoose'); // bring in mongoose

// below code defines the schema for a Todo item
const todoSchema = new mongoose.Schema({
    text: String,
    isCompleted: Boolean,
})

// run the schema to create a model and allows us to interact with the database
const Todo = mongoose.model('Todo', todoSchema);

// export the model so it can be used in other files
module.exports = Todo;
