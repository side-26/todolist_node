const fs = require("fs");
const {dbPath} = require("../../../config/constants");
const Todo=require('../../models/todo');
const getCompletedTodos=async()=>{
    const completedTodos = await Todo.findAndCountAll({
        where: { completed: true },
      }).then((res) => res.count)
    return completedTodos
}
module.exports={getCompletedTodos:getCompletedTodos}