const mongoose = require('mongoose');
const Customer = require('./models/customer.model');
const Task = require('./models/task.model');

const errorHandler = (err,res,cb) => {
	if (err) res.json(err);
	if (cb) cb();
}

const successHandler = (req, data, next) => {
	req.data = data;
	return next();
}

const saveNewItem = (req, res, next) => req.new.save((err, data)=>errorHandler(err, res, ()=>successHandler(req, data, next)));

const createCustomer = (req, res, next) => {
	req.new = new Customer(req.body);
	saveNewItem(req, res, next);
}

const fetchCustomers = (req, res, next) =>Customer.find({}).populate({path:'tasks', model:Task}).exec((err, data)=>errorHandler(err, res, () => successHandler(req, data, next)));

const fetchTasks = (req, res, next) =>Task.find({}).populate({path:'customer', select:'name', model:Customer}).exec((err, data)=>{
	console.log(data.customer);
	return errorHandler(err, res, () => successHandler(req, data, next))});

const createTask = (req, res, next) => {
	req.new = new Task(req.body);
	saveNewItem(req, res, next);
}

const updateTask = (req, res, next) => Task.update({_id:req.params.id}, { $set : {complete:req.body.complete}}, (err, data) => errorHandler(err, res, () => successHandler(req, data, next)));

const removeTask = (req, res, next) => Task.find({_id:req.params.id}).remove().exec((err, data)=>errorHandler(err, res, ()=>successHandler(req, data, next)));

module.exports = {
	createCustomer,
	createTask,
	fetchCustomers,
	createTask,
	fetchTasks,
	updateTask,
	removeTask
}