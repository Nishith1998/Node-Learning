const express = require('express');
const path = require('path');

const routes = express.Router();

routes.get('/shop', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    const title = "ShopHeader"
    res.render('shop', {docHeader: title})
})

module.exports = routes;