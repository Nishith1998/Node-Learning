const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const addProductSubmitRoutes = require('./routes/addProductSubmit');
const shopeRoutes = require('./routes/shope');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', adminRoutes);
app.use('/', addProductSubmitRoutes);
app.use('/', shopeRoutes);

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(3000);