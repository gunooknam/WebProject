module.exports = function(){
 var mysql = require('mysql');
 var conn = mysql.createConnection({
   host     : 'localhost',
   port     :  3306,
   user     : 'root',
   password : '123456',
   database : 'movie_hi'
 });
 conn.connect();
 console.log('connected');
 return conn;
}
