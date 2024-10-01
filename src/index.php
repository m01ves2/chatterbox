<!DOCTYPE html>
<html class="page" lang="en">

@@include('html/head.html', {"title": "Главная"})

<body>
	<div class="page-wrapper">
		@@include('html/header.html', {})

		<main class="main-content container">
			<h1 class="page__header visually-hidden">Вход в чат</h1>
			<div class="columns">
				<div class="column-left">
					<section class="search">
						<h2>Анкеты пользователей</h2>
						<ul class="search__list">
							<li class="search__item">
								<a href="profiles.html" class="search__link search__link--search">Поиск по анкетам</a>
							</li>
							<li class="search__item">
								<a href="my-profile.html" class="search__link search__link--myprofile">Моя анкета в чате</a>
							</li>
							<li class="search__item">
								<a href="gallery.html" class="search__link search__link--gallery">Фотогалерея чата</a>
								<!--TODO javascript всплывающее окно с галареей-->
							</li>
						</ul>
					</section>

					<section class="news">
						<h2>Новости</h2>
						<ul class="news__list">
						<li class="news__item">
								<time datetime="2024-10-02">2.10.2024</time>
								<p>Начали писать серверную часть на php</p>
							</li>
							<li class="news__item">
								<time datetime="2024-10-01">1.10.2024</time>
								<p>Поправили верстку в чате. Добавили адресата сообщений</p>
							</li>
							<li class="news__item">
								<time datetime="2024-09-01">1.09.2024</time>
								<p>Добавили модальные окна регистрации и авторизации</p>
							</li>
							<li class="news__item">
								<time datetime="2024-08-28">28.08.2024</time>
								<p>Изменили логотип сайта</p>
							</li>
							<li class="news__item">
								<time datetime="2024-08-26">26.08.2024</time>
								<p>Продолжаем верстать страницы...</p>
							</li>
							<li class="news__item">
								<time datetime="2024-08-13">13.08.2024</time>
								<p>Добавлена страница обмена сообщениями</p>
							</li>
							<li class="news__item">
								<time datetime="2024-08-08">08.08.2024</time>
								<p>Основная стилизация главной страницы завершена</p>
							</li>
							<li class="news__item">
								<time datetime="2024-07-09">09.07.2024</time>
								<p>Написана базовая версия разметки</p>
							</li>
							<li class="news__item">
								<time datetime="2024-07-07">07.07.2024</time>
								<p>Ударными темпами начата работа над чатом!</p>
							</li>
						</ul>
						<a class="button button--news" href="news.html">Все новости</a>
					</section>
				</div>

				<div class="column-right">
					<div class="entrance__wrapper">
						<section class="enter">
							<h2>Вход в чат</h2>
							<form class="enter__form form" action="chat.php" method="get">
								<p>
									<label for="nickname" class="form__label">Введите ваш ник в чате:</label>
									<input class="form__nickname" id="nickname" type="text" placeholder="Ник в чате">
								</p>
								<p class="channels">
									<!--TODO-->
									<label for="channels__description" class="form__label">Выберите канал чата:</label>
									<select class="channels__list" name="channels" id="channels">
										<option class="channels__item" value="familiar">Знакомства</option>
										<option class="channels__item" value="Sex">Секс</option>
										<option class="channels__item" value="flirt">Флирт</option>
										<option class="channels__item" value="art">Искусство</option>
										<option class="channels__item" value="quiz">Викторина</option>
										<option class="channels__item" value="free">Свобода</option>
									</select>
								</p>
								<input type="submit" class="button enter__button" value="Войти в чат">
							</form>
						</section>
						<section class="rules">
							<h2 class="visually-hidden">Правила чата</h2>
							<ul class="rules__list">
								<li class="rules__item">
									<a href="licenses.html" class="rules__item">Лицензии канала</a>
								</li>
								<li class="rules__item">
									<a href="rules.html" class="rules__item">Правила чата</a>
								</li>
							</ul>
						</section>
					</div>

					<section class="vote">
						<h2>Голосование</h2>
						<!--тут должен быть javascript код для голосовалки. Голосовалка запускается любым админом чата-->
					</section>
				</div>
			</div>
		</main>

		@@include('html/footer.html', {})

		@@include('html/modal.html', {})
	</div>

	<script type="module" src="./js/app.min.js"></script>
</body>

</html>
