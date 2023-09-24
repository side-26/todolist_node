const { Todo } = require('../models/index');

const createTodo = (req, res) => {
    const todoId = new Date().getTime()
    const todo =new Todo(todoId, req.body.todo,false)
    todo.createTodo((err)=>{
        if (!err)
            res.redirect('/')
        else console.log(err)
    })
}
module.exports={createTodo}