var mongoose = require('mongoose');
var Poll = require('../models/poll.js');

/* user input */
exports.home = function (req, res) {
	res.render('create', {
		title: 'Duckpoll'
	});
};

/* create poll */
exports.create = function (req, res) {
	console.log(req.body);

	var choices = [];
	for (var i = 0; i < req.body.choicearr.length; i++) {
		if (req.body.choicearr[i].length > 0) {
			var curchoice = {};
			curchoice['content'] = req.body.choicearr[i];
			curchoice['index'] = i;
			curchoice['votes'] = 0;
			choices.push(curchoice);
		}
	}

	Poll.create({question: req.body.question, choices: choices}, function (err, p) {
		res.render('share', {
			poll: p,
			title: 'Duckpoll'
		});
	});
};

/* show poll for voting */
exports.show = function (req, res) {
	Poll.findById(req.params.id, function (err, p) {
		var choices = p.choices;

		res.render('show', {
			poll: p,
			title: 'Duckpoll'
		});
	});
};

/* vote on poll */
exports.vote = function (req, res) {
	console.log(req.body);

	Poll.findById(req.params.id, function (err, p) {
		for (var ind in req.body) {
			p.voteChoice(ind, function(err) {
				console.log(p.choices);
				res.render('results', {
					poll: p,
					title: 'Duckpoll'
				});
			});
		}
	});
};


/* show poll results*/
exports.results = function (req, res) {
	Poll.findById(req.params.id, function (err, p) {
		res.render('results', {
			poll: p,
			title: 'Duckpoll'
		});
	});
};