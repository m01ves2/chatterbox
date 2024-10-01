import webpack from 'webpack-stream'; //для подключения ES6-модулей используем webpack
import named from 'vinyl-named';


export const js = () => {

	// // convert Gulp array into entry property for Webpack
	// let fileName = null;
	// let entryObj = {};
	// path.src.js.map((filePath) => {
	//   fileName = filePath.split('/').pop().split('.').slice(0, -1).join('.');
	//   entryObj[fileName] = filePath;
	// });


	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev }) //файл стилей собираем один, из запчастей, создаем карту исходников для отслеживания ошибок - потому используем sourcemap для режима разработки
		.pipe(app.plugins.plumber( //обработка ошибок при компиляции добавим и в обработку scss
			app.plugins.notify.onError({ //уведомления об ошибках
				title: 'JS',
				message: 'Error: <%= error.message %>'
			}))
		)
		.pipe(named())
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development', //режим работы webpack - для продакшна и разработки
			// entry: {
			// 	app: './src/js/app.js',
			// 	chat: './src/js/chat.js',
			// },
			output: {
				filename: '[name].min.js', //минифицированный результат
			},
			// entry: entryObj,
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}
