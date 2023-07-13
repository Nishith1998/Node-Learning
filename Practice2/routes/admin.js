const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/addProduct',(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
})

module.exports = routes;