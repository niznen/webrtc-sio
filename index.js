var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

/* serve static files */
app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use('/js', express.static(__dirname + '/js'));
  app.use(express.static(__dirname + '/public'));
});

app.listen(3000);

io.sockets.on('connection', function(socket) {
  socket.emit('news', { hello: 'world'});
  socket.on('my other event', function (data) {
    console.log(data);
  });
});