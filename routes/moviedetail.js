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
/*
router.get('/', function(req, res, next) {
    const id = req.query.id;
	  //Use the connection
	  connection.query(`SELECT * FROM movie WHERE id=${id}`, function(err, rows) {
			console.log(rows[0].director_id);
			connection.query(`SELECT * FROM director WHERE id=${rows[0].director_id}`, function(err, direct) {
				console.log(direct);
				connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
		  		res.render('moviedetail', {title: 'moviedetail', rows: rows, user:req.user, review : review, director: direct[0].name});
				});
		});
	});
});
*/

router.get('/', function(req, res, next) {
	  const id = req.query.id;
	  const purchased = false;

	  connection.query(`SELECT * FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));
			connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
				 res.render('moviedetail', {title: 'moviedetail', rows: rows, user:req.user, review : review});
			 });
		});
});

router.post('/review', function(req,res){
	 const id = req.body.movieId;
	 console.log(req.user.authId);
	 connection.query(`select * from movie join director on movie.director_id = director.id where movie.id=${id}`, function(err, results) {
		const score= req.body.rating;
		connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
			if(err)console.log(sel+"에러");
			var sql = "insert into review (movieId, authId, nickname , review , star, passwd) values(?,?,?,?,?,?)";
			connection.query(sql, [ req.body.movieId, req.user.authId, req.user.nickname , req.body.comment , req.body.rating, req.body.reviewpasswd],function(err, rows){
					if (err){
						console.log(review);
						return res.render('moviedetail', {title: 'moviedetail', rows: results, user:req.user, message:'이미 리뷰를 등록하셨습니다.',review : review , director:results[0].name});
					}
						connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
						return res.render('moviedetail', {title: 'moviedetail', rows: results, user:req.user, message:'리뷰를 등록하였습니다.',review : review , director:results[0].name});
						});
					});
			});
		});
	});

router.post('/review/delete', function(req,res){
	 const id = req.body.replymovieId;
	 const authid=req.body.replyauthId;
	 	connection.query('delete from review where movieId=? AND authId=?',[id, authid], function(err, del){
			console.log("3");
			if (err) console.error(err);
			connection.query('SELECT * FROM movie WHERE id=?',id, function(err, rows) {
				if (err) console.error(err);
			connection.query(`SELECT * FROM director WHERE id=${rows[0].director_id}`, function(err, direct) {
				connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
					res.render('moviedetail', {title: 'moviedetail', rows: rows, user:req.user, review : review, director: direct[0].name});
					});
				});
			});
		});
 });



module.exports = router;
