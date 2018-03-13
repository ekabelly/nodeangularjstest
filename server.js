const BP = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Route = require('./route/route');

const {
	dburl, 
	secret, 
	cookieName
} = require('./auth/config');

const startServer = () => app.listen(4001, ()=>console.log('server up on port 4001'));

app.use(BP.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(BP.json());

app.use('/', express.static('public'));

app.use('/app', Route);

mongoose.connect(dburl, err=>err ? console.log(err) : startServer());