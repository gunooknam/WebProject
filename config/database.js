module.exports = function(){
 var mysql = require('mysql');
 var conn = mysql.createConnection({
   host     : 'localhost',
   port     :  3306,
   user     : 'root',
   password : 'gkak2m7!',
   database : 'movie_hi'
 });
 conn.connect();
 console.log('connected');
 return conn;
}
