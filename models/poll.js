var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {
	voteChoice: function (choiceInd, callback) {
		this.choices[choiceInd].votes += 1;
		this.save(function() {
			callback();
		});
	}
}

module.exports = mongoose.model('Poll', PollSchema);
