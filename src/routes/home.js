const express = require('express');
const path = require('path');
const rootDir = require('../utils/helpers/path');
const router = express.Router()
router.get('/', (req, res) => {
    const viewRoute = path.join(rootDir, 'views', 'pages', 'home')
    const pageTitle = 'home page'
    const names = [{
        id: 1,
        name: 'mammad'
    },
    {
        id: 2,
        name: 'ali'
    },
    {
        id: 3,
        name: 'mahdi'
    }]
    res.render(viewRoute, { title: pageTitle, names })
})
module.exports = {
    homePage: router
}