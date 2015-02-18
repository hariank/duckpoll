var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	unique: Boolean,
	totalVotes: Number,
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {
	addVotes: function (selected, callback) {

		if (this.unique) {
			for (var obj in selected) {
				this.choices[selected[obj]].votes += 1;
				this.totalVotes += 1;
			}
		}

		else {
			for (var ind in selected) {
				this.choices[ind].votes += 1;
				this.totalVotes += 1;
			}
		}
		this.markModified('choices');
		this.save(callback);
	}
}

module.exports = mongoose.model('Poll', PollSchema);
