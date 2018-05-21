module.exports = function(app){
  var conn = require('./database')();
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var GoogleStrategy = require('passport-google-oauth20');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done){
    console.log('serializeUser',user.authId);
    return done(null, user.authId);
  });

  passport.deserializeUser(function(id, done){
    console.log('deserializeUser', id);
    var sql = 'SELECT * FROM user WHERE authId =?';
    conn.query(sql, [id],function(err, results){
      if(err){ done('There is no user.'); }
      else {
        return done(null, results[0]);
      }
    });
  });

  passport.use(
    'local',
    new LocalStrategy({
      username : 'username',
      password : 'password',
      passReqToCallback :true
    },
    function(req, username, password, done){
       var uname = username;
       var pwd = password;
       var sql = 'SELECT * FROM user WHERE authId=?';
        conn.query(sql, ['local:'+uname], function(err, results){
        if(err){
          return done(err);
        }
        if(!results.length){
          return done(null, false, req.flash('loginMessage', '검색된 사용자가 없습니다.'));
        }
        console.log("여기 왜감?");
        var user = results[0];
        return  hasher({password:pwd, salt: user.salt},
        function(err, pass, salt, hash){
          if(hash === user.password){
              console.log('LocalStrategy', user);
              done(null, user);
           } else {
              done(null, false, req.flash('loginMessage','비밀번호가 틀립니다.'));
           }
         });
      });
      }
  ));

  passport.use(new GoogleStrategy({
      callbackURL:'http://localhost:3000/auth/google/redirect',
      clientID: '215504541044-qse6141f1rm9283cma55u4gtq08nh1rh.apps.googleusercontent.com',
      clientSecret: '-TnJ2fPNe-RrySP8Kotwj_hf'
    },
    function(accessToken, refreshToken, profile, done) {
        console.log("여기는 구글 스트렛티지");
        var authId = 'google:' + profile.id;
        var sql = 'SELECT * FROM user WHERE authId=?';
        conn.query(sql, [authId], function(err, results){
          if(results.length>0){
            return done(null, results[0]);
          } else {
            var newuser = {
              'authId': authId,
              'email':  profile.emails[0].value,
              'name': profile.name.familyName+profile.name.givenName,
              'nickname': profile.displayName,
              'image':profile.photos[0].value,
              'gender' :profile.gender
            };
            var sql = 'INSERT INTO user SET ?';
            conn.query(sql, newuser, function(err, results){
              if(err){
                console.log(err);
                done('Error');
              }
              else {
                console.log("4");
                 done(null, newuser);
              }
            });
          }
        });
      }
  ));
  return passport;
}
