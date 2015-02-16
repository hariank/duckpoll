var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

module.exports = mongoose.model('Poll', PollSchema);
