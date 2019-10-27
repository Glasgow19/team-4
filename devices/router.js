//With the parameters Express and MySQL connection
module.exports = (app, connection) => {
    //routes, which call the functions below
    app.get('/test', find_availability);
    app.put('/test', book_device);
    app.put('/return', return_device);

    //Functions defined

    //User could check availability of the devices before
    // they attended to the science center
    function find_availability (req, res) {
      let device = req.body.device_borrowed;
      connection.query('SELECT * FROM Devices WHERE Type_of_Devices = ?',
      [device],
      function (err, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      if(err) throw err;

      if (results[0].Number_of_Available > 0) {
        //It should tell the front-end the device is available
         console.log(true);
      } else {
        // Tell the client the device is not available
         console.log(false);
      }
});}

//The user should be able to book the device online
    function book_device (req, res) {
      let device = req.body.device_borrowed;
      connection.query('UPDATE Devices SET Number_of_Available = Number_of_Available - 1 , Number_of_times_borrowed = Number_of_times_borrowed + 1, Number_of_borrowing_now = Number_of_borrowing_now + 1 WHERE Type_of_Devices = ?',
      [device],
      function(err, results, fields){

          if(err) throw err;

          //Maybe the system could tell the user how many devices left
          console.log(results);
    });}

    //The administrater who manage the app is responsible to make sure
    // the devices were returned and data were updated.
    //This method is for user to return the device
    function return_device (req, res) {
      let device = req.body.device_borrowed;
      connection.query('UPDATE Devices SET Number_of_Available = Number_of_Available + 1, Number_of_borrowing_now = Number_of_borrowing_now + 1 WHERE Type_of_Devices = "'+ device +'"' ,function(err, results, fields){

        if(err) throw err;

        //Maybe update the state of devices
        console.log(results);
      });}
  }
