var express = require('express');
var router = express.Router();
var App = require('../react/main/mainApp').default;
var React = require('react');
var ReactDOMServer = require('react-dom/server');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset='utf-8'>
      <link rel='stylesheet' href='/stylesheets/style.css' />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
  </head>
  
  <body>
      <div id='root'>${ReactDOMServer.renderToString(<App />)}</div>
      <script src="./bundle.js"></script>
  </body>
  
  `);
});

module.exports = router;
