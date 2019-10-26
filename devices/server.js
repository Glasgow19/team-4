var express=require('express');
var app=express();

var mysql      = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: 'password'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

//./require('/router.js')(app, connection);


app.get('/',function(req,res)
{
res.send('Hello World!');
});

var server=app.listen(3000,function() {
  console.log("Successfully connected to the server")
});

connection.end(function(err) {
  // The connection is terminated now
  console.log('MySQL database connection disconnected');
});
