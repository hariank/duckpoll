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


	var p = new Poll({question: req.body.question});

	p.initPoll(req.body.choicearr, function(err) {
		console.log("test");

		res.render('vote', {
			poll_id: p._id,
			title: 'Duckpoll'
		});
	});

	// res.render('vote', {
	// 	poll_id: p._id,
	// 	title: 'Duckpoll'
	// });
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