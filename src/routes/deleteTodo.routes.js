const express = require('express');
const {deleteTodo} = require("../controllers/deleteTodo.controller");
const router = express.Router()

router?.get('/todo/delete/:id',deleteTodo)
module.exports = {
    createTodo: router
}
module.exports={deleteRoute:router}