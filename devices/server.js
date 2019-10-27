var express=require('express');
var app=express();

var mysql = require('mysql');

const bodyParser = require('body-parser');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser({limit: '50mb'}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

var connection = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'Devices_system'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

require('./router.js')(app, connection);

app.get('/',function(req,res)
{
res.send("Hello")
});



var server=app.listen(3000,function() {
  console.log("Successfully connected to the server")
});
