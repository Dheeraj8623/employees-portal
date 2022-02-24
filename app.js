var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
<<<<<<< HEAD
const db = require('./model/pg')
=======

>>>>>>> 896d7a3e86d38216a4a770a35e3e94ee1e2c0d3c
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
db.sequelize.sync();
// db.sequelize.sync({force:true});
=======
>>>>>>> 896d7a3e86d38216a4a770a35e3e94ee1e2c0d3c

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
