const {Todo} = require("../models");
const {dbPath, homeRoute} = require("../../config/constants");
const fs = require("fs");
const completeTodo=(req,res)=>{
    Todo.completeTodo((data)=>{
        const completedId=+req.params.id
        const newData = data.map(d =>
            d.id === completedId
                ? { ...d, completed: true }
                : d
        );
        const strData=JSON.stringify(newData)
        fs.writeFile(dbPath,strData,(err)=>{
            if(err){
                console.log(err)
                return
            }
            res.redirect(homeRoute)
        })
        console.log(newData)
    })


}
module.exports={completeTodo}