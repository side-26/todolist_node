const path = require("path");
const {
  homePage,
  createTodo,
  deleteRoute,
  completeTdo,
} = require("./src/routes");
// ------------------------
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(homePage);
app.use(createTodo);
app.use(deleteRoute);
app.use(completeTdo);
sequelize
  .sync()
  .then((result) =>
    app.listen(3300, () => console.log("server is running on port 3300"))
  )
  .catch((err) => console.error(err));
