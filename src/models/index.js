const fs = require('fs');
const { dbPath } = require('../../config/constants');
   
class Todo {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
            this.completed = completed
    }
    createTodo = (callback) => {
        fs.readFile(dbPath,(err,data)=>{
            const todosList=JSON.parse(data)||[]
            todosList.push(this)
            const jsonFile = JSON.stringify(todosList)
            fs.writeFile(dbPath, jsonFile, callback)
        })

    }
    static deleteTodo=(callback)=>{
        fs.readFile(dbPath,callback)
    }
    static getAllTodo=(callback)=>{
        fs.readFile(dbPath,callback)
    }
    static completeTodo=(callback)=>{
        fs.readFile(dbPath,(err,data)=>{
            if(err) {
                console.log(err);
                return;
            }
            const parsedData=JSON.parse(data)
            callback(parsedData)
        })
    }
}
module.exports = { Todo }