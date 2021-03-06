require('dotenv').config()

const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const monitor = require('./config/monitor')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
// app.use(monitor)

require('./config/db')
require('./config/router')(app)

module.exports = app;