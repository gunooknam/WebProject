var express = require('express');
var router = express.Router();
var multer = require('multer');
var conn = require('../config/database')();
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();
var nodemailer = require('nodemailer');
const WishlistApp = require('../react/pages/wishlist/wishlistApp').default;
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const getHtml = (page, bundleName) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset='utf-8'>
      <link rel='stylesheet' href='/stylesheets/main.css' />
  </head>
  <body>
      <div id='root'>${ReactDOMServer.renderToString(page)}</div>
      <script src="/${bundleName}.js"></script>
  </body>
  `;
}

var Transport = nodemailer.createTransport({
    service: 'gmail',
    auth : {
      user: 'gunooknam@gmail.com',
      pass: 'akdakdakd1!',
    }
 });

var _storage = multer.diskStorage({
  destination: function(req, file, cb){
      cb(null, 'public/images');
  },
  filename: function(req,file,cb){
      cb(null, file.originalname );
  }
});
var upload = multer({ storage :_storage });
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  var sql = "select * from ticket where authId=?";
  conn.query(sql, [req.user.authId], function(err, rows){
      console.log(rows);
      res.render('userlayout', { user: req.user, ticket : rows}) ;
  });
});


router.post('/image', upload.single('userfile'), function(req, res, next) {
  var image=req.file;
  var authId=req.user.authId;
  console.log(req.user.authId);
  var sql = "update user set image=? where authId=?"
  conn.query(sql, ["/images/"+image.filename,authId], function(err, rows){
    if(err) console.log("실패");
    req.user.image="/images/"+image.filename;
    console.log("/images/"+req.user.image);
    res.render('userlayout', {user:req.user});
  });
});


router.post('/authnum', function(req, res, next) {
  console.log(req.body.email + req.body.data +":에게 메일전송하려고 함");
  var output = `
  <h3>안녕하세요. Movie_hi 입니다 요청하신 인증번호 보내드립니다.</h3>
    요청하신 당신의 인증번호는 : ${req.body.data} 입니다. 즐거운 하루 되십시오.
  `;
  var mailOptions = {
    from: 'gunooknam@gmail.com',
    to: req.body.email,
    subject:"Movie Hi 인증번호 발송",
    html: output
  }
  Transport.sendMail(mailOptions, function(err, info){
    if(err) console.log(err);
    else {
      console.log('Email sent : ' + info.response);
      res.render('userlayout', {user:req.user });
    }
  });
});

router.post('/pwdreset', function(req, res, next) {
  console.log(req.user.email+"의 비밀번호를 바꿉니다.");
  hasher({password:req.body.password}, function(err, pass, salt, hash){
      var set = [
         hash,
         salt,
        'local:'+ req.user.email
      ]
    console.error(salt);
    var sql = "update user set password=?, salt=? where authid=?"
    conn.query(sql, set, function(err,rows){
      if(err) console.error(err);
        res.redirect('../');
    });
  });
});

router.post('/removeuser', function(req, res, next) {
  var authId = req.user.authId;
  var sql = "delete from user where authId=?";
  conn.query(sql, authId, function(err, rows){
    if(err) console.log("실패");
    req.logout();
    req.session.save(function(){
      res.redirect('/');
    });
  });
});

router.get('/pay', function(req, res, next) {
  res.render('user/pay',{ term : req.query.term, user:req.user});
});

router.post('/pay', function(req, res, next) {
  var term=req.body.term;
  console.log('test');
  var selsql= "select * from ticket where authId=?"
  conn.query(selsql, req.user.authId, function(err, rows){
        if(err) console.log("없음");
        else if(rows[0]){
          console.log("기간추가")
          var sqr= "update ticket SET expired=DATE_ADD(expired, INTERVAL "+req.body.term+" MONTH) where authId=?";
          console.log(sqr);
          conn.query(sqr,  [req.user.authId] , function(err,rows){
          if(err) {
          console.error(err);
          res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
          return res.write("<script>alert('기간을 추가하지 못했습니다.'); location.href='http://localhost:3000/users';</script>");
          }
          res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
          return res.write("<script>alert('기간이 추가되었습니다.'); location.href='http://localhost:3000/users';</script>");
          });
        }
        else {
        var term=req.body.term;
        var now=new Date();
        var time=now.toISOString().slice(0, 19).replace('T', ' ');
        now.setMonth(new Date().getMonth() + Number(req.body.term));
        var expiredtime=now.toISOString().slice(0, 19).replace('T', ' ');
        var sql = "insert into ticket (authId, term, buyday, expired) values(?,?,?,?)";
        conn.query(sql, [ req.user.authId, term, time , expiredtime] , function(err,rows){
        if(err) { console.error(err); }
        console.log(" 이용권 충전완료 ", rows);
        res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
        return res.write("<script>alert('이용권을 구매하였습니다.'); location.href='http://localhost:3000/users';</script>");
        });
      }
    });
});
router.get('/paycash', function(req, res, next) {
  res.render('user/cashpay', {cash : req.query.cash, user:req.user});
});

router.post('/paycash', function(req, res, next) {
  console.log(req.body.cash);
  console.log(req.user.authId);
    var sql = "update user set cash=? where authId=?"
    var num=Number(req.user.cash)+Number(req.body.cash);
    conn.query(sql, [String(num), req.user.authId] , function(err,rows){
      if(err) console.error(err);
        console.log("캐쉬 충전 완료",rows);
        res.writeHead('200', {'Content-Type':'text/html; charset=utf-8'});
        res.write("<script>alert('캐쉬가 충전되었습니다.');location.href='http://localhost:3000/users';</script>");
    });

});

router.get('/wishlist', function(req, res, next) {
  if(!req.user) res.redirect('/auth/login')
  conn.query(`select *, '1' type from wish, movie where movie.id = wish.movie_id and wish.user_id=3 union
  select *, '2' type from purchase, movie where movie.id = purchase.movie_id and purchase.user_id=3;`, (err, rows) => {
    const data = {
      user: req.user,
      data: rows
    }
    res.send(getHtml(<WishlistApp data={data} />, 'wishlist_bundle'));
  });
});

module.exports = router;
