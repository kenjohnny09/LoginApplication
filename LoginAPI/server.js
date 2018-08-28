const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

//Use Routes
app.use("/", users);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log('Server started on port '+ port));