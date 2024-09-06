import { messages, users } from './mock.js';

let addMessages = function () {

	var messagesElement = document.querySelector('.messages');
	var messagesList = messagesElement.querySelector('.all-messages__list');
	var messageTemplate = messagesElement.querySelector('.message-template')
		.content.querySelector('.all-messages__item');

	for (var i = 0; i < messages.length; i++) {
		var messageElement = messageTemplate.cloneNode(true);

		messageElement.querySelector('.all-messages__user').textContent = users.find( (u) => u.id == messages[i].user_id).name;
		messageElement.querySelector('.all-messages__text').textContent = messages[i].text;

		messagesList.appendChild(messageElement);
	}
}

export default addMessages;
