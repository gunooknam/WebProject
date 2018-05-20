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
    console.log('serializeUser', user);// 사용자의 식별자를 줘야한다.
    return done(null, user.authId); //그래서 두번째 인자로 전달된 값이 이 user가 되도록 약속한 것이다.
  }); //이 user라는 것은 사용자 정보가 있는데 그 사용자에 대한 식별자가 필요하다.

  passport.deserializeUser(function(id, done){
    console.log('deserializeUser', id);
    //id 값으로 사용자 조회인데 여기서 추가되는 코드가 있어야 한다.
    var sql = 'SELECT *FROM user WHERE authId =?';
    conn.query(sql, [id],function(err, results){
      if(err){ done('There is no user.'); }
      else {
        return done(null, results[0]); //에러가 없다면
      }
    });
  });

  passport.use(
    'local',
    new LocalStrategy({
      username : 'username',
      password : 'password',
      passReqToCallback :true
    }, // 인자를 세개를 받는다. username, password, done 이라고
    function(req, username, password, done){
       var uname = username; //body를 통하지 않고
       var pwd = password;
       var sql = 'SELECT * FROM user WHERE authId=?';
        conn.query(sql, ['local:'+uname], function(err, results){
        if(err){
          return done(err);
        }
        if(!results.length){
          return done(null, false, req.flash('loginMessage', 'No user found.'));
        }
        console.log("여기 왜감?");
        var user = results[0];
        return  hasher({password:pwd, salt: user.salt},
        function(err, pass, salt, hash){
          if(hash === user.password){
              console.log('LocalStrategy', user);
              done(null, user);
           } else {
              console.log("앙");
              done(null, false, req.flash('loginMessage','No user found.'));
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
        console.log(profile);
        var authId = 'google:' + profile.id;
        var sql = 'SELECT * FROM user WHERE authId=?';
        conn.query(sql, [authId], function(err, results){
          if(results.length>0){
            done(null, results[0]);
          } else {
            var newuser = {
              'authId': authId,
              'email':  profile.emails[0].value,
              'name': profile.name.familyName+profile.name.givenName,
              'nickname': profile.displayName,
              'image':profile.photos[0].value,
              'gender' :profile.gender
            };
            console.log(newuser);
            var sql = 'INSERT INTO user SET ?';
            conn.query(sql, newuser, function(err, results){
              if(err){
                console.log(err);
                done('Error');
              } else if(!results.length ){
                 return done(null, false, req.flash('loginMessage', 'No user found.'));
              }
              else {
                done(null, newuser);
              }
            });
          }
        });
      }
  ));
  return passport;
}
