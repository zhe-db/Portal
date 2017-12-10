var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bearerToken = require('express-bearer-token');
var cors = require('cors');

var routes = require('./routes/route');
var databaseRouter = require('./routes/database');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', routes);
app.use('/database', databaseRouter);



module.exports = app;
