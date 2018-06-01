var express = require('express');
var router = express.Router();

var mysql = require('mysql');
const pw = require('./../config/pw');
var conn = mysql.createConnection({
	connectionLimit: 10,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'movie_hi',
	password: pw
});

router.get('/',function (req,res,next) {//사용자 아이디
    console.log("wish add page");
    const user_id = req.user.id;
    const movie_id = req.query.movie_id;
    var sql = 'insert into wish(user_id,movie_id) values(?,?)';
    
    conn.query(sql,[user_id,movie_id], function(err, rows, fields) {
    if(err) {
          //이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.
          console.log(err);
        console.log(req.user.id +"=유저id "+req.query.movie_id +"=영화id wish table에 추가 에러");
        alert('이미 찜목록에 있습니다.');  
        conn.rollback(function () {
            console.error('rollback error1');
          });
        }
        else
        {
          conn.commit(function (err) {
            if(err) console.log(err);
            console.log(req.user.id +"=유저id "+req.query.movie_id +"=영화id wish table에 추가");
            res.redirect('/moviedetail?id='+movie_id); 
          });
        }
    });
    
});

module.exports = router;

