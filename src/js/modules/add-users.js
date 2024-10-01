import { users } from './mock.js';

let addUsers = function () {

	let usersElement = document.querySelector('.users');
	let userList = usersElement.querySelector('.users__list');
	let userTemplate = usersElement.querySelector('.user-template')
		.content.querySelector('.users-item');

	for (let i = 0; i < users.length; i++) {
		let userElement = userTemplate.cloneNode(true);

		userElement.querySelector('.user__link').textContent = users[i].name;
		userElement.querySelector('.user__link').id = users[i].id;

		userList.appendChild(userElement);
	}
}

export default addUsers;
