module.exports = function(){
  // view engine setup
  var session = require('express-session');
  var MySQLStore = require('express-mysql-session')(session);
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  var mysql = require('mysql');
  var express = require('express');
  var app = express();
  var path = require('path');
  var flash = require('connect-flash');
  var logger = require('morgan');
  var engine = require('ejs-locals');
  app.engine('ejs',engine);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(session({
      secret: '1234567',
      resave: false,
      saveUninitialized: true,
      store:new MySQLStore({
      host:'localhost',
      port:3306,
      user:'root',
      password:'123456',
      database:'movie_hi'
      })
  }));
  app.use(flash());

  return app;
}
