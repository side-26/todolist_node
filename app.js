const path = require('path');
// ------------------------
const express = require('express');
const bodyParser = require('body-parser');
const { homePage,createTodo,deleteRoute } = require('./src/routes');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.use(homePage)
app.use(createTodo)
app.use(deleteRoute)
app.listen(3300)