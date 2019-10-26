const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>
setTimeout(function () {
  var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve('hello world');
      }, 3000);
  });

  promise.then(function(data) {
      console.log(data + ' 1');
  });

  promise.then(function(data) {
      console.log(data + ' 2');
  });

  promise.then(function(data) {
      console.log(data + ' 3');
  });
        res.send("Yoyoyo");
    }, 2000));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//setTimeout(function() {console.log("Hello world")}, 2000);

/**/
