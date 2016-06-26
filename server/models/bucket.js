var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BucketSchema = new mongoose.Schema({
	createdBy: {type: String},
	createdFor: {type: String},
  title: {type: String, required: true, minlength: 5},
  description: {type: String, required: true, minlength: 10},
  completed: {type: Boolean}
	}, {timestamps: true })

var Bucket = mongoose.model('Bucket', BucketSchema);
