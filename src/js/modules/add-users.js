import { users } from './mock.js';

let addUsers = function () {

	var usersElement = document.querySelector('.users');
	var userList = usersElement.querySelector('.users__list');
	var userTemplate = usersElement.querySelector('.user-template')
		.content.querySelector('.users-item');

	for (var i = 0; i < users.length; i++) {
		var userElement = userTemplate.cloneNode(true);

		userElement.querySelector('.user__link').textContent = users[i].name;
		userElement.querySelector('.user__link').id = users[i].id;

		userList.appendChild(userElement);
	}
}

export default addUsers;
