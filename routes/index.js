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
  console.log(req.user); //deserializeUser 함수가 페이지 넘어갈 때 마다 실행되면서 req.user에 내용을 채운다.
  res.render('welcome', { // req.user에 내용이 있으면 현재 세션정보가 있으므로 로그인중이고, 없으면 로그인 중이지 않음
    user: req.user
  });
});

module.exports = router;
