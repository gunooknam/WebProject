var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const pw = require('./../config/pw');
var connection = mysql.createConnection({
	connectionLimit: 10,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'movie_hi',
	password: pw
});

/* GET home page. */
router.get('/', function(req, res, next) {
	  const id = req.query.id;
	  const purchased = false;
    
	  connection.query(`SELECT * , movie.id as movie_id FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));

		  res.render('moviedetail', {title: 'moviedetail', rows, purchased, user: req.user });
		});
        console.log("req.user:"+ req.user);
});

router.get('/watch', function(req, res, next) {
	const id = req.query.id;
	res.render('watch');
});

module.exports = router;
