var mongoose = require('mongoose');
var Poll = require('../models/poll.js');

/* user input */
exports.home = function (req, res) {
	res.render('create', {
		title: 'DUCK POLL'
	});
};

/* create poll */
exports.create = function (req, res) {
	console.log(req.body);

	var unique = true;
	if ('unique' in req.body)
		var unique = false;
	console.log(unique);

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


	Poll.create({question: req.body.question, unique: unique, choices: choices, totalVotes: 0}, function (err, p) {
		res.render('share', {
			poll: p,
			title: 'DUCK POLL'
		});
	});
};

/* show poll for voting */
exports.show = function (req, res) {
	Poll.findById(req.params.id, function (err, p) {
		var choices = p.choices;

		res.render('show', {
			poll: p,
			title: 'DUCK POLL'
		});
	});
};

/* vote on poll */
exports.vote = function (req, res) {
	Poll.findById(req.params.id, function (err, p) {
		p.addVotes(req.body, function(err) {
			res.redirect(req.params.id + '/results');
		});
	});
};


/* show poll results*/
exports.results = function (req, res) {
	Poll.findById(req.params.id, function (err, p) {
		var sorted = p.choices;
		sorted.sort(function (a, b) {
			return b.votes - a.votes;
		});

		res.render('results', {
			poll: p,
			sorted_res: sorted,
			title: 'DUCK POLL'
		});
	});
};