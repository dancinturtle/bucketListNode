var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	bucketlist: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
	// bucketlist: {type: Array}
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
