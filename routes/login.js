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
  var router=require('express').Router();

  router.get(
    '/google',
    passport.authenticate('google',
     {scope: ['email','openid']})
   );
  // 페이스 북과 같은 타사인증은 라우트가 두개다.
  router.get(
    '/google/redirect',
     passport.authenticate(
      'google',
      {
        successRedirect: '/welcome',
        failureRedirect: '/auth/login',
        failureFlash: false
      }
    )
  );
  router.post(
    '/login',
    passport.authenticate(
      'local',
       {
        successRedirect: '/welcome',
        failureRedirect: '/auth/login',
        failureFlash: false
       }
    )
  );
  router.get('/logout', function(req,res){
    req.logout();
    req.session.save(function(){
      res.redirect('/'); //save라는 함수가 있고 여기서 콜백을 준다.
    }); //저장이 끝났을 떄 인자로 전달한 콜백을 나중에 호출한다.
  });

  // 이제 포스트 부분을 구현한다.
  router.get('/login',function(req, res){
    if(req.user){
    res.render("welcome",{ user:req.user});
    }
    res.render('auth/login', { message : req.flash('loginMessage') } );
  });

  router.get('/register', function(req, res){
      var sql = 'SELECT * FROM user';
      conn.query(sql,function(err, rows, fields){
        res.render('auth/register', {rows: rows});
      });
  });

  router.post('/register', function(req,res){
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

  router.get('/passwdfind', function(req,res){
    var sql = 'SELECT * FROM user';
    conn.query(sql,function(err, rows, fields){
      res.render('auth/passwdfind', {rows: rows});
    });
  });

  router.post('/passwdfind', function(req,res){
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

  router.get('/newpasswd', function(req,res){
    res.render('auth/newpasswd',{ mail: req.query.email });
  });

  router.post('/newpasswd', function(req,res){
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
          res.redirect('/auth/login');
      });
    });
 });

    
router.get('/wishadd',function(req, res){
    res.render("moviedetail",{ user:req.user});    
});

    
  return router;
}
