const express = require('express');
const {completeTodo}=require('../controllers/completeTodo.controller')
const router = express.Router()

router?.get('/todo/complete/:id',completeTodo)
module.exports = {
    completeTdo: router
}