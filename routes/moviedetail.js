var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	connectionLimit: 5,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'movie_hi',
	password: 'wldud'
});

/* GET home page. */
router.get('/', function(req, res, next) {
      const id = req.query.id;
	  //Use the connection
	  connection.query(`select * from movie where id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));
		  
		  res.render('moviedetail', {title: 'moviedetail', rows: rows});
		  //connection.release();
		  
		  //Don't use the connection here, it has been returned to the pool.
		});

});

module.exports = router;