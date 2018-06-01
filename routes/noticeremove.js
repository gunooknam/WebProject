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

router.get('/:id',function (req,res,next) {
    var id = req.params.id;//id는 body에 없음
    var sql = 'DELETE from notice WHERE id=?';
    
    conn.query(sql,[id], function(err, rows, fields) {
    if(err) {
          //이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.
          console.log(err);
        console.log("req.params.id: "+ req.params.id);
          conn.rollback(function () {
            console.error('rollback error1');
          });
        }
        else
        {
          conn.commit(function (err) {
            if(err) console.log(err);
            console.log(id+"번글 삭제"); 
            res.redirect('/help');
          });
        }
    });

});

module.exports = router;
