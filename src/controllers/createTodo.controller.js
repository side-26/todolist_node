const { homeRoute } = require("../../config/constants");
const Todo = require("../models/todo");

const createTodo = (req, res) => {
  const title = req.body.todo;
  Todo.create({ title }).then((result) => res.redirect(homeRoute));
};
module.exports = { createTodo };
