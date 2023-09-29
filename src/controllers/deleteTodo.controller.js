const fs = require("fs");
const { dbPath, homeRoute } = require("../../config/constants");
const Todo = require("../models/todo");
const deleteTodo = (req, res) => {
  const deletedId = req.params.id;
  Todo.destroy({ where: { id: deletedId } })
    .then((ressult) => res.redirect(homeRoute))
    .catch((err) => console.log(err));
};
module.exports = { deleteTodo };
