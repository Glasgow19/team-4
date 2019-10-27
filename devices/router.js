
module.exports = (app, connection) => {
    app.get('/test', find_availability);
    app.put('/test', book_device);
    app.put('/return', return_device);

    function find_availability (req, res) {
      let device = req.body.device_borrowed;
      connection.query('SELECT * FROM `devices` WHERE Type_of_Devices = "'+ device+'"', function (err, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      if(err) throw err;

      if (results[0].Number_of_Available > 0) {
         console.log(true);
      } else {
         console.log(false);
      }
});}

    function book_device (req, res) {
      connection.query('', function (err, results, fields) {

      if(err) throw err;

      console.log(results);
});}

    function return_device (req, res) {

    }
}
