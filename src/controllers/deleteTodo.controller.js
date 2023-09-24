const fs = require("fs");
const {dbPath, homeRoute} = require("../../config/constants");
const {Todo} = require("../models");
const deleteTodo=(req,res)=>{
    Todo.deleteTodo((err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const todoList=JSON.parse(data)||[]
        const deletedId=+req.params.id
        const filteredList=todoList.filter(({id})=>id!==deletedId)
        const strList=JSON.stringify(filteredList)
        fs.writeFile(dbPath,strList,(err)=>{
            if(err){
                console.log(err)
                return
            }
            return res.redirect(homeRoute)

        })
        // console.log(req.params.id)
        return res.redirect(homeRoute)
    })
}
module.exports={deleteTodo}