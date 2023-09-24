const rootPath = require('../src/utils/helpers/path');
const path = require('path');
const dbPath = path.join(rootPath, 'database', 'todo.json')
const homeRoute='/'
const createTodo='/todo/create';
const deleteTodo='/todo/delete'
const completeTodo='/todo/complete'
module.exports={ dbPath,homeRoute,createTodo,deleteTodo,completeTodo }
