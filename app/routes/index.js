'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/userHandler.server.js');

module.exports = function (app, passport) {

	var clickHandler = new ClickHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/')
		.get(clickHandler.getUserInfo);
};
