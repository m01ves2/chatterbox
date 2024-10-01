let addLoginHandler = function () {
	let login_open = document.querySelector('.user-navigation__item--login a');
	let popup = document.querySelector('.modal--login');
	let login_close = popup.querySelector('.modal__close');
	let form = popup.querySelector('.form--login');
	let login = form.querySelector('.form__login');
	let password = form.querySelector('.form__password');
	let overlay = document.querySelector('.modal-overlay');

	let isStorageSupport = true;
	let storageLogin = "";
	try {
		storageLogin = localStorage.getItem('login');
	}
	catch (err) {
		isStorageSupport = false;
	}


	let onPopupEscPress = function(evt) {
		if(evt.keyCode === 27){
			closePopup();
		}
	}

	let closePopup = function(evt) {
		popup.classList.remove('modal--show');
		overlay.classList.remove('modal--show');
		document.addEventListener('keydown', onPopupEscPress);
	}

	let openPopup = function(evt) {
		popup.classList.add('modal--show');
		overlay.classList.add('modal--show');
		document.addEventListener('keydown', onPopupEscPress);
	}


	login_open.addEventListener('click', function (evt) {
		evt.preventDefault();

		openPopup();

		if (storageLogin) {
			login.value = storageLogin;
			password.focus();
		}
		else {
			login.focus();
		}
	});

	login_open.addEventListener('keydown', function (evt) {
		if(evt.keyCode === 13){
			openPopup();
		}
	});


	login_close.addEventListener('click', function (evt) {
		evt.preventDefault();

		closePopup();
	});



	form.addEventListener('submit', function (evt) {
		if (!login.value || !password.value) {
			evt.preventDefault();

			// popup.classList.remove('modal--error');
			// popup.offsetWidth = modal.offsetWidth;
			popup.classList.add('modal--error');
		}
		else {
			if (isStorageSupport) {
				localStorage.setItem('login', login.value);
			}
		}
	});

}

export default addLoginHandler;
