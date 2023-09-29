const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Todo=sequelize.define("Todo", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
module.exports=Todo