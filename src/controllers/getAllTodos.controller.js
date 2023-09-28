const {Todo}=require('../models/index')
const {homeRoute} = require("../../config/constants");
const path = require("path");
const rootDir = require("../utils/helpers/path");
const {completedTodos, getCompletedTodos}=require('../utils/helpers/completedTodosCount')
const {uncompletedTodos, getUncompletedTodos}=require('../utils/helpers/uncompletedTodosCount')
const getAllTodosController=(req, res)=>{
    const viewRoute = path.join(rootDir, 'views', 'pages', 'home')
    Todo.getAllTodo((err,data)=>{
        if(err){
            console.log(data)
            return
        }
        const parsedTodos=JSON.parse(data)
        const completedTodos=getCompletedTodos(parsedTodos);
        const uncompletedTodos=getUncompletedTodos(parsedTodos)
        res.render(viewRoute,{todosList:parsedTodos,title:'صفحه اصلی',completedTodos,uncompletedTodos})
    })
}
module.exports={getAllTodos:getAllTodosController}