const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));

routes.post('/addProductSubmit', (req, res) => {
    const productToAdd = {title: req.body.title}
    console.log("product to add: ", productToAdd);
    res.redirect('/addProduct');
});

module.exports = routes;