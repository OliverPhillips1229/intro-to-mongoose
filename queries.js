const Todo = require('./models/todo'); // Import the Todo model
/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries()

    // Disconnect our app from MongoDB after our queries run.
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line.
    process.exit();
};

const runQueries = async () => {
    console.log('Queries running.')
    // The functions calls to run queries in our db will go here as we write them.
    // await createTodo();
    // You can call other query functions here as well.
    await findTodos();
    // You can call findTodos() to retrieve all todos.
};



connect();
/*------------------------------ Query Functions -----------------------------*/
// Add your query functions here. Each function should be an async function that
// performs a specific query on the database. You can call these functions in the
// runQueries function above to execute them sequentially or in parallel as needed.

const createTodo = async () => {
    const todoData = {
        text: 'Learn CSS',
        isCompleted: false,

    }
    const todo = await Todo.create(todoData);
    console.log('Todo created:', todo);
};

const findTodos = async () => {
    const todos = await Todo.find({});
    console.log('All Todos:', todos);
};






// this wont work until we have a view engine set up
// and a view to render
// this is just an example of how you might render a view
// with the todos data
app.get('/', async (req, res) => {
    const todos = await Todo.find({});
    res.render('todos/index', { todos });
});
