module.exports = function(){
  const pw = require('./pw');
  var mysql = require('mysql');
 var conn = mysql.createConnection({
   host     : 'localhost',
   port     :  3306,
   user     : 'root',
   password : pw,
   database : 'movie_hi'
 });
 conn.connect();
 console.log('connected');
 return conn;
}
