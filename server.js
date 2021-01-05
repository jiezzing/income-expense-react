// server
const express = require('express');

// create global variables for ports, database urls and etc.
const dotenv = require('dotenv');

// add colors to console (opitional)
const colors = require('colors');
const morgan = require('morgan');

// connect app to db
const connectDB = require('./config/database')

// assign the config.env file path to dotenv variable
dotenv.config({ path: './config/config.env' });

connectDB();

// calling the routes
const transactions = require('./routes/transactions');

const app = express();

// allows to use body parser
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORt || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));