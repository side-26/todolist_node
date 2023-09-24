const express = require('express');

const {getAllTodos} = require("../controllers/getAllTodos.controller");
const {homeRoute} = require("../../config/constants");
const router = express.Router()

router.get(homeRoute,getAllTodos)
module.exports = {
    homePage: router
}