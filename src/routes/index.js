const { homePage } = require('./home');
const { createTodo } = require('./createTodo');
const {deleteRoute} = require("./deleteTodo.routes");
module.exports = {
    homePage,createTodo,deleteRoute
}