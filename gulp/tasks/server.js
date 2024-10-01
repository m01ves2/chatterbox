

export const server = (done) =>{
	// app.plugins.browsersync.init({
	// 	server: {
	// 		baseDir: `${app.path.build.html}`
	// 	},
	// 	notify: false,
	// 	port: 3000,
	// });
	app.plugins.connect.server({}, function(){
		app.plugins.browsersync.init({
				// server: {
				// 	baseDir: `${app.path.build.html}`
				// },
				proxy: 'localhost',
				notify: false,
				port: 3000,
			});
	});
}
