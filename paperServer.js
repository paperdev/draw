var io = require('socket.io').listen(8888);

io.sockets.on('connection', function(socket){

	console.log('connect from ' + socket);

	socket.on('message', function(data){
		console.log(socket + ' : ' + data);
		socket.emit('message','server sent message');
	});

	socket.on('mouseInfo', function(data){
		console.log('mouseInfo = ', data);
		socket.broadcast.emit('mouseInfo', data);
	});

	socket.on('disconnect', function(){
		console.log(socket + ' disconnected.');
	});

	//socket.broadcast.emit('user connected.');

});
