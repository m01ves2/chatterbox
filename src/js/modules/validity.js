export var Validity = function () {

	var loginModal = document.querySelector('.modal--login');
	var loginForm = loginModal.querySelector('.form--login');
	var loginName = loginForm.querySelector('.form__login');
	var loginPassword = loginForm.querySelector('.form__password');


	loginName.addEventListener('invalid', function (evt) {
		var validityText = '';
		if (loginName.validity.tooShort) {
			validityText = 'Имя должно содержать минимум 3 символа';
		}
		else if (loginName.validity.tooLong) {
			validityText = 'Имя должно содержать максимум 25 символов';
		}
		else if (loginName.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			loginName.style.outline = "";
			loginName.setCustomValidity("");
		}

		if (validityText !== '') {
			loginName.style.outline = "2px solid red";
			loginName.setCustomValidity(validityText);
		}
	});

	loginPassword.addEventListener('invalid', function (evt) {
		var validityText = '';

		if (loginPassword.validity.tooShort) {
			validityText = 'Пароль должен содержать минимум 5 символов';
		}
		else if (loginPassword.validity.tooLong) {
			validityText = 'Пароль должен содержать максимум 25 символов';
		}
		else if (loginPassword.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			loginPassword.style.outline = "";
			loginPassword.setCustomValidity("");
		}


		if (validityText !== '') {
			loginPassword.style.outline = "2px solid red";
			loginPassword.setCustomValidity(validityText);
		}
	});
}
