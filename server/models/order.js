var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:1},
  product: {type: String, required: true, minlength: 1},
  quantity: {type: Number, required: true}
	}, {timestamps: true })

var Order = mongoose.model('Order', OrderSchema);
