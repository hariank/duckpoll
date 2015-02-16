var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {

	// add choices to new poll
	initPoll: function(inpchoices, callback) {
		console.log(this.question);
		console.log(this._id);

		var i;
		var choices = [];
		
		for (i = 0; i < inpchoices.length; i++) {
			if (inpchoices[i].length > 0)
				choices.push(inpchoices[i]);
		}

		console.log(choices);

		this.save(callback);
	}
}

module.exports = mongoose.model('Poll', PollSchema);
