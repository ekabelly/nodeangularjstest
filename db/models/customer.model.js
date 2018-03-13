const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	email:{
		type:String,
		required:true,
		unique:true
	},
	name:String,
	occupancy: String,
	pNumber:String
});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;