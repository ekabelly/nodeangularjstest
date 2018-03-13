const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	desc:String,
	date:Date,
	customer:{type:Schema.Types.ObjectId, ref:'Costumer'},
	complete:Boolean
});

const Task = mongoose.model('task',TaskSchema);

module.exports = Task;