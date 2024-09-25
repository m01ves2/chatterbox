"use strict";

let loadJSONP = function () {
	let URL = "https://24.javascript.pages.academy/code-and-magick/data";
	let CALLBACK_NAME = "__jsonpCallback";
	let loader = document.createElement('script');
	loader.src = URL + "?callback=" + CALLBACK_NAME;

	let createWizardElement = function (wizardElement, wizard) {
		wizardElement.querySelector(".setup-similar-label").textContent =
			wizard.name;
		wizardElement.querySelector(".wizard-coat").style.fill =
			wizard.colorCoat;
		wizardElement.querySelector(".wizard-eyes").style.fill =
			wizard.colorEyes;
		return wizardElement;
	};

	window[CALLBACK_NAME] = function (wizards) {
		let fragment = document.createDocumentFragment();
		let template = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");
		let setupSimilar = document.querySelector(".setup-similar");
		let setupSimilarList = setupSimilar.querySelector(".setup-similar-list");

		for (let i = 0; i < 4; i++) {
			let wizardElement = template.cloneNode(true); //глубочайшее копирование, с ключом 'TRUE'
			fragment.appendChild(createWizardElement(wizardElement, wizards[i]));
		}
		setupSimilarList.appendChild(fragment);
	}

	document.body.append(loader);
}

let load = function (onLoad, onError) {
	let xhr = new XMLHttpRequest();
	// let URL = "https://js.dump.academy/code-and-magick/data"; //сюда нет прав доступа
	let URL = "https://24.javascript.pages.academy/code-and-magick/data"; //а вот сюда есть, редирект с первой ссылки :D
	xhr.responseType = "json"; //для автоматического парсинга средствами XMLHttpRequest
	xhr.timeout = 5000; //устанавливаем таймаут на запрос 5 сек

	xhr.addEventListener("load", function (evt) {
		let error = "";
		switch (xhr.status) {
			case 200:
				onLoad(xhr.response);
				break;
			case 400:
				error = "Неверный запрос";
				break;
			case 401:
				error = "Пользователь не авторизован";
				break;
			case 404:
				error = "Ничего не найдено";
				break;
			default:
				error =
					"Произошла ошибка. Статус ответа: " +
					xhr.status +
					" " +
					xhr.statusText;
				break;
		}

		if (error) {
			onError(error);
		}
	});

	xhr.addEventListener("error", function (evt) { //ошибка сервера, обычно статус 500. обрабатывается отдельно
		onError("Произошла ошибка соединения");
	});

	xhr.addEventListener("timeout", function (evt) {
		onError(
			"Запрос не успел выполниться за время " + xhr.timeout + "мс"
		);
	});

	xhr.open("GET", URL);
	xhr.send();
};

let save = function (data, onSave, onError) {
	let xhr = new XMLHttpRequest();
	// let URL = " https://js.dump.academy/code-and-magick"; //сюда нет прав доступа
	let URL = "https://24.javascript.pages.academy/code-and-magick"; //а вот сюда есть, редирект с первой ссылки :D
	xhr.responseType = "json";

	xhr.addEventListener("load", function (evt) {
		let error = "";
		switch (xhr.status) {
			case 200:
				onSave(xhr.response);
				break;
			case 400:
				error = "Неверный запрос";
				break;
			case 401:
				error = "Пользователь не авторизован";
				break;
			case 404:
				error = "Ничего не найдено";
				break;
			default:
				error =
					"Произошла ошибка. Статус ответа: " +
					xhr.status +
					" " +
					xhr.statusText;
				break;
		}

		if (error) {
			onError(error);
		}
	});

	xhr.addEventListener("error", function (evt) {
		onError("Произошла ошибка соединения");
	});

	xhr.addEventListener("timeout", function (evt) {
		onError(
			"Запрос не успел выполниться за время " + xhr.timeout + "мс"
		);
	});
	xhr.open("POST", URL);
	xhr.send(data);
};

export {loadJSONP, load, save};
