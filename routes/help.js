var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const pw = require('./../config/pw');
var pool = mysql.createConnection({
	connectionLimit: 10,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'movie_hi',
	password: pw
});

/* GET page. */
router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM notice order by id desc', function(err, rows, fields) {
       if (err) throw err;
       res.render('help', { rows: rows , user:req.user});
   });

});

module.exports = router;
