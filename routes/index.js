var express = require('express');
var router = express.Router();
var App = require('../react/main/mainApp').default;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gkak2m7!',
  database : 'movie_hi'
});

connection.connect();

const query = (...args) => {
    return new Promise((resolve, reject) => {
        connection.query(...args, (err, row) => {
            if(err) reject(err);
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

module.exports = router;
