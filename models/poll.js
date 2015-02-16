var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {

	// add choices to new poll
	initPoll: function(choices, callback) {
		console.log(this.question);
		console.log(choices);
		console.log(this._id);

		this.save(callback);
	}
}

module.exports = mongoose.model('Poll', PollSchema);
