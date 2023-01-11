// Frameworks
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// Routes
const product = require('./api/routes/products');
const order = require('./api/routes/orders');
const user = require('./api/routes/users');
// Run Express
const app = express();
// Mongoose Connect
mongoose.connect('mongodb+srv://restful-API:upEAGBaifcJIUnew@restful-api.iksgz.mongodb.net/Restful-API?retryWrites=true&w=majority');
// Middleware
// Morgan
app.use(morgan('dev'));
// 1.1 body-parser
app.use(bodyParser.urlencoded({extended: false}));
// 1.2 body-parser
app.use(bodyParser.json());
app.use('/product', product);
app.use('/order', order);
app.use('/user', user);
// Export Module
module.exports = app;