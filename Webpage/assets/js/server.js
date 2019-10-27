var app = require('http').createServer();
var io = require('socket.io')(app);
var PORT = 8000;
app.listen(PORT);

io.on('connection', function(socket) {
    socket.on('send_img', function(data) {
        console.log(data);
    });
});