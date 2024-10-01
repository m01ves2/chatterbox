<!DOCTYPE html>
<html lang="en">

@@include('html/head.html', {"title": "Чат"})

<body>
	<div class="page-wrapper">
		@@include('html/header.html', {})

		<main class="container main-content">
			<h1 class="page__header visually-hidden">Обмен сообщениями</h1>
			<div class="columns">
				<div class="column-left">
					<section class="users">
						<ul class="users__list">
						</ul>
						<template  class="user-template">
							<li class="users-item"><a href="#" class="user__link"><!--user-name--></a></li>
						</template>
					</section>
				</div>
				<div class="column-right">
					<div class="messages">
						<section class="all-messages">
							<ul class="all-messages__list">
							</ul>
							<template class="message-template">
								<li class="all-messages__item">
									<time class="all-messages__time" datetime="2024-09-01"><!--message-time--></time> -
									<a class="all-messages__user" href="#" id="0"><!--user-name--></a>:
									<span class="all-messages__text"><!--user-message--></span>
								</li>
							</template>
						</section>

						<section class="add-message">
							<form action="chat.html" class="form-message" method="post">
								<p class="add-message__input">
									<label class="add-message__label" for="message">Вы:</label>
									<input type="hidden" class="add-message__receivers"></span>
									<input class="add-message__text" type="text" id="message" placeholder="Введите сообщение">
								</p>
								<p class="add-message__edit">
										<!-- TODO -->
								</p>
								<input type="submit" class="button add-message__button" value="Отправить">
							</form>
						</section>
					</div>
				</div>
			</div>
		</main>

		@@include('html/footer.html', {})
		@@include('html/modal.html', {})
	</div>

	<script type="module" src="./js/app.min.js"></script>
	<script type="module" src="./js/chat.min.js"></script>
</body>

</html>