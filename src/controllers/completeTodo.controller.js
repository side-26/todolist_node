const Todo = require("../models/todo");
const { homeRoute } = require("../../config/constants");
const completeTodo = (req, res) => {
  const updatedId = req.params.id;
  Todo.update({ completed: 1 }, { where: { id: updatedId } })
    .then(() => res.redirect(homeRoute))
    .catch((err) => console.log(err));
};
module.exports = { completeTodo };