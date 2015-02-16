var mongoose = require('mongoose');

var ChoiceSchema = new mongoose.Schema({
	content: String,
	votes: Number,
});

ChoiceSchema.path('content').required(true);

module.exports = mongoose.model('Choice', ChoiceSchema);