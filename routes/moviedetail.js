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

/*GET home page.*/


router.get('/', function(req, res, next) {
	  const id = req.query.id;
	  const purchased = false;

	  connection.query(`SELECT * FROM movie JOIN director ON movie.director_id = director.id WHERE movie.id=${id}`, function(err, rows) {
		  if (err) console.error("err:" + err);
		  //console.log("rows: " +JSON.stringify(rows));
			connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
				rows[0].id=id;
				console.log(rows);
				 res.render('moviedetail', {title: 'moviedetail', rows: rows, user:req.user, review : review, purchased});
			 });
		});
});

router.post('/review', function(req,res){
	 const id = req.body.movieId;
	 console.log(id);
	 console.log(req.user.authId);
	 const purchased = false;
	  connection.query(`select * from movie join director on movie.director_id = director.id where movie.id=${id}`, function(err, results) {
		const score= req.body.rating;
		console.log(results);
		results[0].id=id;
		connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
			if(err)console.log("에러");
			var sql = "insert into review (movieId, authId, nickname , review , star, passwd) values(?,?,?,?,?,?)";
			connection.query(sql, [ req.body.movieId, req.user.authId, req.user.nickname , req.body.comment , req.body.rating, req.body.reviewpasswd],function(err, rows){
					if (err){
						console.log(err);
						console.log(review);
						return res.render('moviedetail', {title: 'moviedetail', rows: results, user:req.user, message:'이미 리뷰를 등록하셨습니다.', review : review , purchased});
					}
						connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
						return res.render('moviedetail', {title: 'moviedetail', rows: results, user:req.user, message:'리뷰를 등록하였습니다.', review : review , purchased});
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
			connection.query(`select * from movie join director on movie.director_id = director.id where movie.id=${id}`, function(err, rows) {
				if (err) console.error(err);
			connection.query(`SELECT * FROM director WHERE id=${rows[0].director_id}`, function(err, direct) {
				connection.query(`SELECT * FROM review WHERE movieId=${id}`, function(err, review) {
					res.render('moviedetail', {title: 'moviedetail', rows: rows, user:req.user, review : review });
					});
				});
			});
		});
 });

 router.get('/watch', function(req, res, next) {
 	const id = req.query.id;

 	res.render('watch');
 });

module.exports = router;
