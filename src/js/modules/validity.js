export var loginValidity = function () {

	var modalLogin = document.querySelector('.modal--login');
	var loginForm = modalLogin.querySelector('.form--login');
	var loginName = loginForm.querySelector('.form__login');
	var loginPassword = loginForm.querySelector('.form__password');


	var clearLoginValidity = function(){
		loginName.style.outline = '';
		loginName.setCustomValidity('');
	}

	var clearPasswordValidity = function(){
		loginPassword.style.outline = '';
		loginPassword.setCustomValidity('');
	}

	var checkLoginValidity = function() {
		clearLoginValidity();

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

		if(validityText !== ''){
			loginName.style.outline = "2px solid red";
			loginName.setCustomValidity(validityText);
		}
	}

	var checkPasswordValidity = function() {
		clearPasswordValidity();

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

		if(validityText !== ''){
			loginPassword.style.outline = "2px solid red";
			loginPassword.setCustomValidity(validityText);
		}
	}

	// loginForm.addEventListener('submit', function(evt){
	// 	alert('submit!');
	// 	evt.preventDefault();
	// 	checkLoginValidity();
	// 	checkPasswordValidity();
	// });

	// loginName.addEventListener('input', checkLoginValidity, false);
	// loginPassword.addEventListener('input', checkPasswordValidity, false);


	// loginForm.addEventListener('invalid', function(evt){
	// 	evt.target.style.outline = "2px solid red";
	// }, true);
}
