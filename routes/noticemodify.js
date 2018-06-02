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

router.get('/:id',function (req,res,next) {//path방식 인자 받아오기, get방식 인자전달-> path, query
    console.log(req.params.id);
    var sql = 'SELECT * FROM notice';
    conn.query(sql, function(err, rows, fields) {
        var id = req.params.id;
        if(id){
          var sql = 'SELECT * FROM notice WHERE id=?';
          conn.query(sql, [id], function(err, rows, fields) {
            if(err){
              console.log(err);
              res.status.send('Internal Server Error');
            }
            else{
              res.render('noticemodify', {title:"공지사항 수정", rows:rows , user:req.user});
            }
      });
    } else {
      console.log('NO id');
      res.status(500).send('Internal Server Error');
    }
  });
});



router.post('/:id', function(req, res, next) {
  var body = req.body;
  var title = req.body.title;
  var content = req.body.content;
    var id = req.params.id;//id는 body에 없음
    
  var sql = "UPDATE notice SET title=?, content=? WHERE id=?";

    conn.query(sql,[title,content, id], function(err, rows, fields) {
    if(err) {
          /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
          console.log(err);
          conn.rollback(function () {
            console.error('rollback error1');
          });
        }
        else
        {
          conn.commit(function (err) {
            if(err) console.log(err);
            console.log("row : " + rows);
            res.redirect('/help');
          });
        }
  });
});


module.exports = router;
