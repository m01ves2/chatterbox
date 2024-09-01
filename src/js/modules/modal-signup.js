let addSignupHandler = function () {
	var link = document.querySelector('.user-navigation__item--signup a');
	var modal = document.querySelector('.modal--signup');
	var login_close = modal.querySelector('.modal__close');
	var form = modal.querySelector('.form--signup');
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

	link.addEventListener('click', function (evt) {
		evt.preventDefault();

		modal.classList.add('modal--show');
		overlay.classList.add('modal--show');

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

	login_close.addEventListener('click', function (evt) {
		evt.preventDefault();

		modal.classList.remove('modal--show');
		overlay.classList.remove('modal--show');
		modal.classList.remove('modal--error');
	});

	form.addEventListener('submit', function (evt) {
		if (!login.value || !password.value || !email.value) {
			evt.preventDefault();

			// modal.classList.remove('modal--error');
			// modal.offsetWidth = modal.offsetWidth;
			modal.classList.add('modal--error');
		}
		else {
			if (isStorageSupport) {
				localStorage.setItem('login', login.value);
				localStorage.setItem('email', email.value);
			}
		}
	});

	window.addEventListener('keydown', function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (modal.classList.contains('modal--show')) {
				modal.classList.remove('modal--show');
				overlay.classList.remove('modal--show');
				modal.classList.remove('modal--error');
			}
		}
	});

}

export default addSignupHandler;
