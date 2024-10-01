`use strict`;

let addMessageReceiver = function () {
	let usersList = document.querySelector(`.users .users__list`);
	let users = usersList.querySelectorAll(`.user__link`);

	let allMessages = document.querySelector(`.all-messages`);
	let allMessagesUsers = allMessages.querySelectorAll(`.all-messages__user`);
	let inputMessage = document.querySelector(`.add-message__text`);
	let addMessageReceivers = document.querySelector(`.add-message .add-message__receivers`);

	let submitButton = document.querySelector(`.add-message__button`);

	// usersList.addEventListener(`click`, function (evt) {
	// 	//TODO убрать дублирование получателей.
	// 	//TODO зашить id получателей
	// 	if(evt.target.tagName !== `A` )
	// 		return;

	// 	inputMessage.value += `@` + evt.target.textContent + ` `;
	// 	inputMessage.focus();
	// });

	allMessages.addEventListener(`click`, function (evt) {
		if(evt.target.tagName !== `A` )
			return;

		let receiverId = evt.target.getAttribute(`id`);
		let receiverName = evt.target.textContent;

		if(!inReceiveList(receiverId)){
			inputMessage.value += `@` + receiverName + ` `;
		}

		inputMessage.focus();

	});

	let inReceiveList = function(receiver){
		let receivers = addMessageReceivers.textContent.trim().split(' ');
		if( receivers.includes(receiver)){
			return true;
		}

		addMessageReceivers.textContent += ` ` + receiver;
		return false;
	}

	submitButton.addEventListener(`click`, function(evt){
		// evt.preventDefault();

		//TODO form list of receivers, message
		//TODO send JSON object to server
	});

	//TODO удаление получателя
	//TODO отправка сообщения на сервер в JSON
}

export default addMessageReceiver;
