const express = require('express');
const Router = express.Router();

const {
	createCustomer,
	fetchCustomers,
	createTask,
	fetchTasks,
	updateTask,
	removeTask
} = require('../db/mongo');

const {responseMiddleware} = require('../services');

Router.post('/customer', createCustomer, responseMiddleware);

Router.get('/customers', fetchCustomers, responseMiddleware);

Router.post('/task', createTask, responseMiddleware);

Router.get('/tasks', fetchTasks, responseMiddleware);

Router.put('/:id/task', updateTask, responseMiddleware);

Router.delete('/:id/task', removeTask, responseMiddleware);


module.exports = Router;
