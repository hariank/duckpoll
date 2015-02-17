var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	question: String,
	choices: [], 
	createdAt: {type: Date, default: Date.now},
});

PollSchema.path('question').required(true);

PollSchema.methods = {

	// add choices to new poll
	// init: function(choices, callback) {
	// 	console.log(this.question);
	// 	console.log(this._id);

	// 	console.log(choices);

	// 	this.save(callback);
	// }
}

module.exports = mongoose.model('Poll', PollSchema);
