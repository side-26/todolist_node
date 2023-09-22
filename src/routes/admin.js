const express = require('express');
// 
const path = require('path');

const router = express.Router()
const adminPage = path.join(__dirname, '..', '..', 'views', 'partials', 'admin.html')
router.get('/admin', (req, res) => {
    res.sendFile(adminPage)
})
module.exports = {
    adminPage: router
}