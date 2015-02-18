var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {
	addVotes: function (selected, callback) {
		for (var ind in selected) {
			this.choices[ind].votes += 1;
		}
		this.markModified('choices');
		this.save(callback);
	}
}

module.exports = mongoose.model('Poll', PollSchema);
