let addSignupHandler = function () {
	var signup_open = document.querySelector('.user-navigation__item--signup a');
	var popup = document.querySelector('.modal--signup');
	var signup_close = popup.querySelector('.modal__close');
	var form = popup.querySelector('.form--signup');
	var login = form.querySelector('.form__login');
	var password = form.querySelector('.form__password');
	var email = form.querySelector('.form__email');
	var overlay = document.querySelector('.modal-overlay');

	var isStorageSupport = true;
	var storageLogin = "";
	try {
		storageLogin = localStorage.getItem('login');
		storageEmail = localStorage.getItem('email');
	}
	catch (err) {
		isStorageSupport = false;
	}


	var onPopupEscPress = function(evt) {
		if(evt.keyCode === 27){
			closePopup();
		}
	}

	var closePopup = function(evt) {
		popup.classList.remove('modal--show');
		overlay.classList.remove('modal--show');
		document.addEventListener('keydown', onPopupEscPress);
	}

	var openPopup = function(evt) {
		popup.classList.add('modal--show');
		overlay.classList.add('modal--show');
		document.addEventListener('keydown', onPopupEscPress);
	}


	signup_open.addEventListener('click', function (evt) {
		evt.preventDefault();

		openPopup();

		if (storageLogin) {
			login.value = storageLogin;
			if(storageEmail){
				email.value = storageEmail;
			}
			password.focus();
		}
		else {
			login.focus();
		}
	});


	signup_open.addEventListener('keydown', function (evt) {
		if(evt.keyCode === 13){
			openPopup();
		}
	});

	signup_close.addEventListener('click', function (evt) {
		evt.preventDefault();

		closePopup();
	});

	form.addEventListener('submit', function (evt) {
		if (!login.value || !password.value || !email.value) {
			evt.preventDefault();

			// popup.classList.remove('modal--error');
			// popup.offsetWidth = modal.offsetWidth;
			popup.classList.add('modal--error');
		}
		else {
			if (isStorageSupport) {
				localStorage.setItem('login', login.value);
				localStorage.setItem('email', email.value);
			}
		}
	});

}

export default addSignupHandler;
