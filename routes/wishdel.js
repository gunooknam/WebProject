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
    console.log("wish del page");
    const user_id = req.user.id;
    const movie_id = req.query.movie_id;
    var sql = 'DELETE from wish WHERE user_id=? and movie_id=?';
		console.log(movie_id);

		
   /*conn.query('select * from wish where user_id=? and movie_id=?',[user_id,movie_id], function(err,rows, fields) {
      if (err) { console.log(err);  conn.rollback(function () {console.error('rollback error1');} ); }
       res.send('<script type="text/javascript">alert("찜한 영화가 아닙니다.");</script>');
   });*/

    conn.query(sql,[user_id,movie_id], function(err, rows, fields) {
    if(err) {
          //이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.
          console.log(err);
        console.log(req.user.id +"=유저id "+req.query.movie_id +"=영화id wish table에서 삭제 에러");
          conn.rollback(function () {
            console.error('rollback error1');
          });
        }
        else
        {
          conn.commit(function (err) {
            if(err) console.log(err);
            console.log(req.user.id +"=유저id "+req.query.movie_id +"=영화id wish table에서 삭제");
               // res.render('check',{checkcase:'wishdel_success', movie_id: movie_id});
              res.redirect('/moviedetail?id='+movie_id);
          });
        }
    });

});

module.exports = router;
