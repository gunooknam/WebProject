var express = require('express');
var router = express.Router();
var App = require('../react/main/mainApp').default;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var conn = require('../config/database')();

const query = (...args) => {
  return new Promise((resolve, reject) => {
    conn.query(...args, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

/* GET home page. */

router.get('/', function (req, res, next) {
    let data = {};
    query(`SELECT * FROM movie ORDER BY id LIMIT 3;`)
        .then(r => {
            data.mainData = r;
            return query(`SELECT * FROM movie ORDER BY id DESC LIMIT 15;`);
        })
        .then(r => {
            data.sliderData = r;
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset='utf-8'>
                    <link rel='stylesheet' href='/stylesheets/main.css' />
                </head>
                <body>
                    <div id='root'>${ReactDOMServer.renderToString(<App data={data}/>)}</div>
                    <script src="/bundle.js"></script>
                </body>
            `);
        });
});

router.get('/welcome', function (req, res) {
  res.render('welcome', {
    user: req.user // get the user out of session and pass to template
  });
});

/*
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
}
*/

module.exports = router;
