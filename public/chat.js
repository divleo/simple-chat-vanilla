//make connection
const socket = io.connect('http://' + '192.168.0.102' + ':3000');

//buttons and inputs
const userInput = document.querySelector('.user-input'),
			userBtnChange = document.querySelector('.user-btn-change'),
			messageInput = document.querySelector('.message-input'),
			messageBtnSend = document.querySelector('.message-btn-send'),
			chatRoom = document.querySelector('.chat-room');

//emit a username
userBtnChange.addEventListener('click', () => {
	console.log(userInput.value);
	socket.emit('change_username', {userInput : userInput.value});
	userInput.value = '';
});

//emit a message
messageBtnSend.addEventListener('click', () => {
	console.log(messageInput.value);
	socket.emit('new_message', {messageInput : messageInput.value});
	messageInput.value = '';
});


//listen on new_message

//keep messages
// let arr = [];

socket.on('new_message', (data) => {
	console.log(data);

	
	// arr.push(data);
	// console.log(arr.length);

	//display our new_message
	// const displayMessage = () => {
	// 	let displayMessage = `
	// 	<p class='message'>${data.userInput}: ${data.messageInput}</p>`;
	// 	chatRoom.innerHTML = displayMessage;
	// }

	//display our new_message
	// const displayMessage = () => {
	// 	let displayMessage = '';
	// 	displayMessage += `<p class='message'>${data.userInput}: ${data.messageInput}</p>`;
	// 	chatRoom.innerHTML = displayMessage;
	// }

	//display our new_message
	// const displayMessage = () => {
	// 	let displayMessage = '';

	// 	arr.forEach((item, i) => {
	// 	displayMessage += `<p class='message' id='item_${i}'>${item.userInput}: ${item.messageInput}</p>`;
	// 	chatRoom.innerHTML = displayMessage;
	// 	});
	// }

	// displayMessage();

	// let p = document.createElement('p').className = 'message'.innerHTML = data.userInput + ": " + data.messageInput;
	let p = document.createElement('p');
	p.className = 'message';
	p.innerHTML = data.userInput + ": " + data.messageInput;

	chatRoom.append(p);
	// chatRoom.append(`<p class='message'>${data.userInput}: ${data.messageInput}</p>`);
	// chatRoom.append("<p class='message'>" + data.userInput + ": " + data.messageInput + "</p>");
	// chatRoom("<p class='message'>" + data.userInput + ": " + data.messageInput + "</p>");
});