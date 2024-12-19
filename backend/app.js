// file is responsible for setting up and configuring our Express app
// will define the middleware/routes/errorhandling that our server will use

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const groupRoutes = require('./routes/groupRoutes');

const globalErrorHandler = require('./globalErrorHandler');

// initialize our Express App
const app = express();

// cors middleware allows any origin to make requests to our server
app.use(cors());
// express.json() -> will parse incoming JSON data in the request body as a JavaScript object

app.use(express.json());

// MOUNTING ROUTES
// mount authRoutes router at base path of '/auth'
app.use('/auth', authRoutes);
app.use('/', groupRoutes);

app.use(globalErrorHandler);

module.exports = app;
