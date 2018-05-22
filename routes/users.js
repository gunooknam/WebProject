var express = require('express');
var router = express.Router();
var multer = require('multer');
var conn = require('../config/database')();
var bkfd2Password = require("pbkdf2-password");
var hasher = bkfd2Password();

var nodemailer = require('nodemailer');
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
  res.render('userlayout', { user:req.user});
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
        res.redirect('/welcome');
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


module.exports = router;
