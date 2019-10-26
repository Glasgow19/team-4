var express=require('express');
var app=express();

var mysql      = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();

app.get('/',function(req,res)
{
res.send('Hello World!');
});

var server=app.listen(3000,function() {
  console.log("Successfully connected to the server")
});
