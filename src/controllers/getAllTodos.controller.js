const Todo = require("../models/todo");
const path = require("path");
const rootDir = require("../utils/helpers/path");
const { getCompletedTodos } = require("../utils/helpers/completedTodosCount");
const getAllTodosController = async (req, res) => {
  const viewRoute = path.join(rootDir, "views", "pages", "home");
  const completedTodo = await Todo.findAndCountAll({
    where: { completed: true },
  }).then((res) => res.count);
  const completedTodos = await getCompletedTodos();
  Todo.findAll()
    .then((todosList) => {
      const uncompletedTodos = todosList.length - completedTodo;
      res.render(viewRoute, {
        todosList,
        title: "صفحه اصلی",
        completedTodos,
        uncompletedTodos,
      });
    })
    .catch((err) => console.log(err));
};
module.exports = { getAllTodos: getAllTodosController };
