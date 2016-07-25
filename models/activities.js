var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var activitySchema = new Schema({
	name            : {type: String, required: true},
	reps            : {type: String},
	sets            : {type: String},
	weight          : {type: String},
	type            : {type: String},
	day             : {type: String},
	userId          : {type: String}
});

var Activity = mongoose.model('activity', activitySchema);
module.exports = Activity;