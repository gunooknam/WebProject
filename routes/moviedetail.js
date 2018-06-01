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
<<<<<<< HEAD
      const id = req.query.id;
    const user = req.user;

	  connection.query(`SELECT *,movie.id as movie_id FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));

		  res.render('moviedetail', {title: 'moviedetail', rows: rows, user: user});
		  //connection.release();
		  //Don't use the connection here, it has been returned to the pool.
		});
        console.log("@test");   
        console.log("@req.user:"+ req.user);
=======
	  const id = req.query.id;
	  const purchased = false;

	  connection.query(`SELECT * FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));

		  res.render('moviedetail', {title: 'moviedetail', rows, purchased, user: req.user });
		});
});

router.get('/watch', function(req, res, next) {
	const id = req.query.id;
>>>>>>> da4b9f926953ac959722b5ed66274858f4b3bfb4

	res.render('watch');
});

module.exports = router;
