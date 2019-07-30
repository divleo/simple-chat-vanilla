//make connection
const socket = io.connect('http://' + '192.168.0.102' + ':3000');

//buttons and inputs
const userInput = document.querySelector('.user-input'),
			userBtnChange = document.querySelector('.user-btn-change'),
			messageInput = document.querySelector('.message-input'),
			messageBtnSend = document.querySelector('.message-btn-send'),
			chatRoom = document.querySelector('.chat-room'),
			typing = document.querySelector('.typing');

// const allInputs = () => {
// 	if (messageInput.value !== '') {
// 	socket.emit('new_message', {messageInput : messageInput.value});
// 	messageInput.value = '';
// 	} else if (userInput.value !== '') {
// 		socket.emit('change_username', {userInput : userInput.value});
// 	userInput.value = '';
// 	}
// }

// change user if input isn't empty
const userInputCheck = () => {
	if (userInput.value !== '') {
		socket.emit('change_username', {userInput : userInput.value});
		userInput.value = '';
	}
}

// send message if input isn't empty
const messageInputCheck = () => {
	if (messageInput.value !== '') {
		socket.emit('new_message', {messageInput : messageInput.value});
		messageInput.value = '';
	}
}

//emit a username (click)
userBtnChange.addEventListener('click', () => {
	//console.log(userInput.value);
	// socket.emit('change_username', {userInput : userInput.value});
	// userInput.value = '';
	userInputCheck();
});

//emit a username (enter)
userInput.addEventListener('keypress', (event) => {
	if (event.which == 13 || event.keyCode == 13) {
		userInputCheck();
	}
});

//emit a message (click)
messageBtnSend.addEventListener('click', () => {
	//console.log(messageInput.value);
	// socket.emit('new_message', {messageInput : messageInput.value});
	// messageInput.value = '';
	messageInputCheck();
});

//emit a message (enter)
messageInput.addEventListener('keypress', (event) => {
	if (event.which == 13 || event.keyCode == 13) {
		// socket.emit('new_message', {messageInput : messageInput.value});
		// messageInput.value = '';
		messageInputCheck();
		// return false;
}
// return true;
});


//listen on new_message

// keep messages
// let arr = [];

socket.on('new_message', (data) => {
	//console.log(data);

	// arr.push(data);
	// console.log(arr.length);

	//display our new_message
	// const displayMessage = () => {
	// 	let displayMessage = '';

	// 	arr.forEach((item, i) => {
	// 	displayMessage += `<p class='message' id='item_${i}'>${item.userInput}: ${item.messageInput}</p>`;
	// 	chatRoom.innerHTML = displayMessage;
	// 	});
	// }

	// displayMessage();


	//display our new_message
	let p = document.createElement('p');
	p.className = 'message';
	// p.innerHTML = data.userInput + ": " + data.messageInput;
	// p.innerHTML = `${data.userInput}: ${data.messageInput}`;
	p.innerHTML = `${data.userInput}:&nbsp${data.messageInput}`;
	chatRoom.append(p);
});

//emit typing
// messageInput.bind('keypress', () => {
// 	socket.emit('typing');
// });

// messageInput.addEventListener('keypress', () => {
// 	console.log('typing')
// 	socket.emit('typing');
// });

//listen on typing
// socket.on('typing', (data) => {
	// typing.html("<p><i>" + data.userInput + " is typing a message..." + "</i></p>");
	// document.getElementsByClassName('typing').innerHtml = "<p><i>" + data.userInput + " is typing a message..." + "</i></p>";
	
	// let p = document.createElement('p');
	// p.className = 'message';
	// p.innerHTML = data.userInput;
	// typing.append(p);
// });