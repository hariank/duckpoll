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
			curchoice['votes'] = 0;
			choices.push(curchoice);
		}
	}

	console.log(choices);


	Poll.create({question: req.body.question, choices: choices}, function (err, p) {
		res.render('share', {
			poll_id: p._id, 
			// poll_choices: p.choices,
			title: 'Duckpoll'
		});
	});
};

/* show poll */
exports.vote = function (req, res) {

	Poll.findById(req.params.id, function (err, p) {

		console.log(p);
		var choices = p.choices;
		console.log(choices);

		res.render('vote', {
			poll_id: req.params.id,
			poll_choices: choices,
			title: 'Duckpoll'
		});
	});

};

/* show poll results*/
exports.show = function (req, res) {
	res.render('results', {
		poll_id: req.params.id,
		title: 'Duckpoll'
	});
};