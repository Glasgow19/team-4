
module.exports = (app, connection) => {
    app.get('/test', find_availability);
    app.put('/test', book_device);

    function find_availability (req, res) {
      connection.query('SELECT * FROM `devices`', function (error, results, fields) {
// error will be an Error if one occurred during the query
// results will contain the results of the query
// fields will contain information about the returned results fields (if any)
      console.log(results);
});}

    function book_device (req, res) {
      connection.query('SELECT * FROM `devices`', function (error, results, fields) {
// error will be an Error if one occurred during the query
// results will contain the results of the query
// fields will contain information about the returned results fields (if any)
      console.log(results);
});}
    }
