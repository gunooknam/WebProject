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

//var connection = require("../config/database")();
/* GET home page. */
router.get('/', function(req, res, next) {
      const id = req.query.id;
	  //Use the connection


	  connection.query(`SELECT * FROM movie WHERE id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));

		  res.render('moviedetail', {title: 'moviedetail', rows: rows});
		  //connection.release();
		  //Don't use the connection here, it has been returned to the pool.
		});

});

module.exports = router;
