var mongoose = require('mongoose');
var Poll = require('../models/poll.js');
var Choice = require('../models/choice.js');

/* user input */
exports.home = function (req, res) {
	res.render('create', {
		title: 'Duckpoll'
	});
};

/* create poll */
exports.create = function (req, res) {
	console.log(req.body);

	res.render('create', {
		title: 'Duckpoll'
	});
};

/* show poll */
exports.vote = function (req, res) {
	res.render('vote', {
		title: 'Duckpoll'
	});
};

/* show poll results*/
exports.show = function (req, res) {
	res.render('results', {
		title: 'Duckpoll'
	});
};