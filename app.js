var createError = require('http-errors');
// var ejs = require("ejs").__express;

var app = require('./config/express')();
var passport = require('./config/passport')(app);

var loginRouter = require('./routes/login')(passport);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var adminRouter = require('./routes/admin');

app.use('/api', apiRouter);
app.use('/auth', loginRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

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
