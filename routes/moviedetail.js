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
    const user = req.user;
	  //Use the connection


	  connection.query(`SELECT *,movie.id as movie_id FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));

		  res.render('moviedetail', {title: 'moviedetail', rows: rows, user: user});
		  //connection.release();
		  //Don't use the connection here, it has been returned to the pool.
		});
        console.log("@test");
        //console.log("@1:"+ user);
        console.log("@2:"+ req.user);
        //console.log("@3:"+ req.user.id);
        //console.log("@4:"+ user.id);

});

module.exports = router;
