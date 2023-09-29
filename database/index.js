const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("todo_db", "root", "78123456Ma#", {
  host: "localhost",
  dialect: "mysql",
});
module.exports=sequelize
