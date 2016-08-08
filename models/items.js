var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
	name            : {type: String, required: true},
	reps            : {type: String},
	sets            : {type: String},
	weight          : {type: String},
	type            : {type: String},
	theDay          : {type: String},
	day             : {type: Number},
	current         : {type: Boolean},
	userId          : {type: String}
});

var Item = mongoose.model('item', itemSchema);
module.exports = Item;