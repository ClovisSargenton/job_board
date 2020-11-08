var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var selectRouter = require('./routes/select');
var deleteRouter = require('./routes/delete');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var createPostRouter = require('./routes/createPost');
var updateRouter = require('./routes/update');
var applyRouter = require('./routes/apply');
var selectAdRecruteurRouteur = require('./routes/selectAdRecruteur');
var adminSelectRouter = require('./routes/adminSelect');
var adminDeleteRouter = require('./routes/adminDelete');
var adminUpdateRouter = require('./routes/adminUpdate');

var app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CONNECT TO ROUTERS
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/createPost', createPostRouter);
app.use('/update', updateRouter);
app.use('/apply', applyRouter);
app.use('/selectAdRecruteur', selectAdRecruteurRouteur);
app.use('/adminSelect', adminSelectRouter);
app.use('/adminDelete', adminDeleteRouter);
app.use('/adminUpdate', adminUpdateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
