module.exports = function(passport){
  var nodemailer = require('nodemailer');
  var Transport = nodemailer.createTransport({
      service: 'gmail',
      auth : {
        user: 'gunooknam@gmail.com',
        pass: 'akdakdakd1!',

      }
   });

  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var conn = require('../config/database')();
  var route=require('express').Router();
  route.get(
    '/google',
    passport.authenticate('google',
     {scope: ['email','openid']})
   );
  // 페이스 북과 같은 타사인증은 라우트가 두개다.
  route.get(
    '/google/redirect',
     passport.authenticate(
      'google',
      {
        successRedirect: '/welcome',
        failureRedirect: '/auth/login'
      }
    )
  );
  route.post(
    '/login',
    passport.authenticate(
      'local', // 이 로컬이라는 인자에 의해서 passport의 strategy 중에 local이 실행된다.
      {
        successRedirect: '/welcome', //이 코드가  로그인에 성공하면 /welcome 페이지로 리 다이렉션 시킨다.
        failureRedirect: '/auth/login', //로그인에 실패했다. 그러면 후아유, 그래서 사용자가 다시 로그인 하도록 리 다이렉트
        failureFlash: true //로그인 페이지로가면 사용자는 왜 다시 로그인 페이지로 온지 모른다.
      } // 사용자에게 인증에 실패했다는 정보를 줄 수있는 이 Flash를 사용하면 // 사용자에게 딱 한번만 메세지를 보여줄 수 있다.
    )
  );
  route.get('/logout', function(req,res){
    console.log("dd");
    req.logout();
    req.session.save(function(){
      res.redirect('/welcome'); //save라는 함수가 있고 여기서 콜백을 준다.
    }); //저장이 끝났을 떄 인자로 전달한 콜백을 나중에 호출한다.
  });

  // 이제 포스트 부분을 구현한다.
  route.get('/login',function(req, res){
    if(req.user)
    res.redirect("../welcome");
    var sql = 'SELECT id, title FROM user';
      conn.query(sql,function(err, topics, fields){
        var string = req.flash('loginMessage');
        // flash는 변수로 감싸서 집어넣어야 한다..... 안그러면 전달이 안된다.
        res.render('auth/login', { message : string } );
      });
  });

  route.get('/register', function(req, res){
      var sql = 'SELECT * FROM user';
      conn.query(sql,function(err, rows, fields){
        res.render('auth/register', {rows: rows});
      });
  });

  route.post('/register', function(req,res){
     hasher({password:req.body.password}, function(err, pass, salt, hash){
      var user = {
        authId: 'local:'+req.body.email,
        email: req.body.email,
        password: hash,
        name: req.body.name,
        salt:salt,
        nickname:req.body.nickname,
        gender:req.body.gender
        };
        var sql = 'INSERT INTO user SET ?';
        conn.query(sql, user, function(err, results){
          if(err) {
            console.log(err);
            res.status(500);
          } else {
              req.login(user, function(err){
              req.session.save(function(){
              console.log("이게 찍히나?");
              res.redirect('../welcome');
            });
          });
        }
      });
     });
  });

  route.get('/passwdfind', function(req,res){
    var sql = 'SELECT * FROM user';
    conn.query(sql,function(err, rows, fields){
      res.render('auth/passwdfind', {rows: rows});
    });
  });

  route.post('/passwdfind', function(req,res){
    console.log(req.body.data);
    console.log(req.body.mail+":에게 메일전송하려고 함");
    var output = `
    <h3>안녕하세요. Movie_hi 입니다 요청하신 인증번호 보내드립니다.</h3>
      요청하신 당신의 인증번호는 : ${req.body.data} 입니다. 즐거운 하루 되십시오.
    `;
    var mailOptions = {
      from: 'gunooknam@gmail.com',
      to: req.body.mail,
      subject:"Movie Hi 인증번호 발송",
      html: output
    }
    Transport.sendMail(mailOptions, function(err, info){
      if(err) console.log(err);
      else {
        console.log('Email sent : ' + info.response);
      }
    });
  });

  route.get('/newpasswd', function(req,res){
    res.render('auth/newpasswd',{ mail: req.query.email });
  });

  route.post('/newpasswd', function(req,res){
      hasher({password:req.body.password}, function(err, pass, salt, hash){
        var set = [
           hash,
           salt,
          'local:'+req.body.email
        ]
      console.error(salt);
      var sql = "update user set password=?, salt=? where authid=?"
      conn.query(sql, set, function(err,rows){
        if(err) console.error(err);
          console.log("update에서 1개 글 조회 결과 확인 : ",rows);
          console.log("비밀번호 변경 후");
          res.redirect('/auth/login');
      });
    });
 });

  return route;
}
