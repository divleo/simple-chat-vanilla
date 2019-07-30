// 'use strict'

const express = require('express'),
			app = express();

//set the template engine ejs
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
// app.get('/', (req, res) => {
// 	res.send('Hello world')
// })
app.get('/', (req, res) => {
	res.render('index');
});

//listen on port 3000
// server = app.listen(3000)
server = app.listen(3000, '0.0.0.0');

//socket.io instantiation
const io = require('socket.io')(server);


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected');

	//default username
	socket.userInput = 'Anonymous';

	//listen on change_username
	socket.on('change_username', (data) => {
		socket.userInput = data.userInput;
	});

	//listen on new_message
	socket.on('new_message', (data) => {
		//broadcast the new message
		io.sockets.emit('new_message', {messageInput : data.messageInput, userInput : socket.userInput});
	});

	//listen on typing
	socket.on('typing', (data) => {
		socket.broadcast.emit('typing', {userInput : socket.userInput});
	});
});