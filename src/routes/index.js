const { homePage } = require('./home');
const { createTodo } = require('./createTodo');
const {deleteRoute} = require("./deleteTodo.routes");
const {completeTdo} = require("./completedTodo.route");
module.exports = {
    homePage,createTodo,deleteRoute,completeTdo
}