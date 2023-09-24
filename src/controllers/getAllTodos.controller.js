const {Todo}=require('../models/index')
const {homeRoute} = require("../../config/constants");
const path = require("path");
const rootDir = require("../utils/helpers/path");
const getAllTodosController=(req, res)=>{
    const viewRoute = path.join(rootDir, 'views', 'pages', 'home')
    Todo.getAllTodo((err,data)=>{
        if(err){
            console.log(data)
            return
        }
        const parsedData=JSON.parse(data)
        console.log(parsedData)
        res.render(viewRoute,{todosList:parsedData,title:'صفحه اصلی'})
    })
}
module.exports={getAllTodos:getAllTodosController}