import { messages, users } from './mock.js';

let addMessages = function () {

	let messagesElement = document.querySelector('.messages');
	let messagesList = messagesElement.querySelector('.all-messages__list');
	let messageTemplate = messagesElement.querySelector('.message-template')
		.content.querySelector('.all-messages__item');

	for (let i = 0; i < messages.length; i++) {
		let messageElement = messageTemplate.cloneNode(true);

		messageElement.querySelector('.all-messages__user').textContent = users.find( (u) => u.id == messages[i].user_id).name;
		messageElement.querySelector('.all-messages__user').setAttribute(`id`, messages[i].user_id);
		messageElement.querySelector('.all-messages__text').textContent = messages[i].text;
		messageElement.querySelector('.all-messages__time').textContent = messages[i].date;
		messageElement.querySelector('.all-messages__time').setAttribute('datetime',  messages[i].date);

		messagesList.appendChild(messageElement);

	}
}

export default addMessages;
