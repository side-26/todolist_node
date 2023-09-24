const express = require('express');
const {createTodo}=require('../controllers/createTodo.controller')
const router = express.Router()

router?.post('/todo/create',createTodo)
module.exports = {
    createTodo: router
}