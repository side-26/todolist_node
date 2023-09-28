const fs = require("fs");
const {dbPath} = require("../../../config/constants");
const getCompletedTodos=(todo)=>{
    const completedTodos=todo.filter(({completed})=>completed===true).length;
    return completedTodos
}
module.exports={getCompletedTodos:getCompletedTodos}