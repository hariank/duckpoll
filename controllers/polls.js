/* create a poll */
exports.create = function (req, res) {
	res.render('create', {
		title: 'Duckpolls'
	});
};

/* show poll */
exports.vote = function (req, res) {
	res.render('vote', {
		title: 'Duckpolls'
	});
};

/* show poll results*/
exports.show = function (req, res) {
	res.render('results', {
		title: 'Duckpolls'
	});
};