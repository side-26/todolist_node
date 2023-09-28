const {completedTodos} = require("./completedTodosCount");
const fs = require("fs");
const {dbPath} = require("../../../config/constants");
const getUncompletedTodos=(todo)=>{
    const uncompletedTodos=todo.filter(({completed})=>completed===false).length
    return uncompletedTodos
}
module.exports={getUncompletedTodos:getUncompletedTodos}