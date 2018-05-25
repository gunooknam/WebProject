var createError = require('http-errors');
// var ejs = require("ejs").__express;
var app = require('./config/express')();
var passport = require('./config/passport')(app);
// view engine setup
var login = require('./routes/login')(passport);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var moviedetail = require('./routes/moviedetail');
var temp = require('./routes/temp');

app.use('/api', apiRouter);
app.use('/auth', login);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/moviedetail', moviedetail);
app.use('/temp', temp);

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
