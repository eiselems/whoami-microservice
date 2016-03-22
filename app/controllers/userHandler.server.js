'use strict';

function ClickHandler () {

	this.getUserInfo = function (req, res) {
			console.log(req.headers);
			let host = req.get('host');
			let language = req.get('accept-language').split(",")[0];
			let software = req.get('user-agent');
			let infos = {'host': host,'language': language, 'software': software};
			res.json(infos);
	};

}

module.exports = ClickHandler;
