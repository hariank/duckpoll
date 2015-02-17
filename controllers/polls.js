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

	var choiceIds = [];
	req.body.choicearr.forEach(function (el, index) {
		if (el.length > 0) {
			Choice.create({content: el, votes: 0}, function (err, c) {
				choiceIds.push(c._id);
			});
		}
	});

	Poll.create({question: req.body.question, choices: choiceIds}, function (err, p) {
		res.render('share', {
			poll_id: p._id, 
			title: 'Duckpoll'
		});
	});
};

/* show poll */
exports.vote = function (req, res) {
	res.render('vote', {
		poll_id: req.params.id,
		title: 'Duckpoll'
	});
};

/* show poll results*/
exports.show = function (req, res) {
	res.render('results', {
		poll_id: req.params.id,
		title: 'Duckpoll'
	});
};