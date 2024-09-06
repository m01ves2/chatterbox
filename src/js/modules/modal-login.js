let addLoginHandler = function () {
	var login_open = document.querySelector('.user-navigation__item--login a');
	var popup = document.querySelector('.modal--login');
	var login_close = popup.querySelector('.modal__close');
	var form = popup.querySelector('.form--login');
	var login = form.querySelector('.form__login');
	var password = form.querySelector('.form__password');
	var overlay = document.querySelector('.modal-overlay');

	var isStorageSupport = true;
	var storageLogin = "";
	try {
		storageLogin = localStorage.getItem('login');
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
