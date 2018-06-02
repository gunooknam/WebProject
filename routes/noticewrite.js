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

/* Write Page */
// GET 방식의 요청이 들어왔을 때 write페이지로 이동합니다.
router.get('/',function (req,res,next) {
  res.render('./noticewrite',{title:'공지사항 작성', user:req.user});
});

// POST 방식의 요청이 들어왔을 때 데이터를 DB에 저장하고 해당하는 DB의 IDX값을
// 가지고 온 후 Read 페이지로 이동합니다.
router.post('/',function (req,res,next) {
  /*
  *POST 방식의 요청을 URL에 데이터가 포함되지 않고 BODY에 포함되어 전송됩니다.
  * 때문에 request 객체를 통해 body에 접근 후 데이터를 가지고 옵니다.
   *  */
  var body = req.body;
  var title = req.body.title;
  var content = req.body.content;

  connection.beginTransaction(function(err) {
    if(err) console.log(err);
    connection.query('insert into notice(title,content) values(?,?)'
        ,[title,content]
        ,function (err) {
          if(err) {
            /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
            console.log(err);
            connection.rollback(function () {
              console.error('rollback error1');
            });
          }
          connection.query('SELECT LAST_INSERT_ID() as id',function (err,rows) {
            if(err) {
              /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
              console.log(err);
              connection.rollback(function () {
                console.error('rollback error1');
              });
            }
            else
            {
              connection.commit(function (err) {
                if(err) console.log(err);
                console.log("row : " + rows);
                res.redirect('help');
              });
            }
          });
    });
  });
});
module.exports = router;

