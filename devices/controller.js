const mysql = require('mysql');
const model = require('/model');

var mysql      = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();

exports.find_availability = (req, res) => {

}

exports.book_device = (req, res) => {

}
