export let CheckLoginValidity = function () {

	let loginModal = document.querySelector('.modal--login');
	let loginForm = loginModal.querySelector('.form--login');
	let login = loginForm.querySelector('.form__login');
	let password = loginForm.querySelector('.form__password');


	login.addEventListener('invalid', function (evt) {
		let validityText = '';
		if (login.validity.tooShort) {
			validityText = 'Имя должно содержать минимум 3 символа';
		}
		else if (login.validity.tooLong) {
			validityText = 'Имя должно содержать максимум 25 символов';
		}
		else if (login.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			login.style.outline = "";
			login.setCustomValidity("");
		}

		if (validityText !== '') {
			login.style.outline = "2px solid red";
			login.setCustomValidity(validityText);
		}
	});

	password.addEventListener('invalid', function (evt) {
		let validityText = '';

		if (password.validity.tooShort) {
			validityText = 'Пароль должен содержать минимум 5 символов';
		}
		else if (password.validity.tooLong) {
			validityText = 'Пароль должен содержать максимум 25 символов';
		}
		else if (password.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			password.style.outline = "";
			password.setCustomValidity("");
		}


		if (validityText !== '') {
			password.style.outline = "2px solid red";
			password.setCustomValidity(validityText);
		}
	});
}

export let CheckSignupValidity = function () {

	let signupModal = document.querySelector('.modal--signup');
	let signupForm = signupModal.querySelector('.form--signup');
	let login = signupForm.querySelector('.form__login');
	let password = signupForm.querySelector('.form__password');
	let email =  signupForm.querySelector('.form__email');


	login.addEventListener('invalid', function (evt) {
		let validityText = '';
		if (login.validity.tooShort) {
			validityText = 'Имя должно содержать минимум 3 символа';
		}
		else if (login.validity.tooLong) {
			validityText = 'Имя должно содержать максимум 25 символов';
		}
		else if (login.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			login.style.outline = "";
			login.setCustomValidity("");
		}

		if (validityText !== '') {
			login.style.outline = "2px solid red";
			login.setCustomValidity(validityText);
		}
	});

	password.addEventListener('invalid', function (evt) {
		let validityText = '';

		if (password.validity.tooShort) {
			validityText = 'Пароль должен содержать минимум 5 символов';
		}
		else if (password.validity.tooLong) {
			validityText = 'Пароль должен содержать максимум 25 символов';
		}
		else if (password.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			password.style.outline = "";
			password.setCustomValidity("");
		}


		if (validityText !== '') {
			password.style.outline = "2px solid red";
			password.setCustomValidity(validityText);
		}
	});

	email.addEventListener('invalid', function(evt){
		let validityText = '';

		if (email.validity.typeMismatch) {
			validityText = 'Адрес не соответствует реальному';
		}
		else if (email.validity.valueMissing) {
			validityText = 'Обязательное поле';
		}
		else{
			email.style.outline = "";
			email.setCustomValidity("");
		}


		if (validityText !== '') {
			email.style.outline = "2px solid red";
			email.setCustomValidity(validityText);
		}
	});
}
