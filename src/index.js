const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// Routes
app.use(require('./routes/index'));

app.listen(port);
console.log('Server on port', port);