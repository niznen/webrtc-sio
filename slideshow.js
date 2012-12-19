var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');

var server = http.createServer().listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

socketio = socketio.listen(server);

socketio.on('connection', function (socket) {

   socket.on('slidechange', function (slide) {
        console.log("Slide Change",slide);
        socket.broadcast.emit("turnslide",slide);
   });	

});
