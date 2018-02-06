const express = require('express');
const app = express();
const config = require('./config.js');
const bodyParser = require('body-parser');

// Parse body to application/json
app.use(bodyParser.json());

// Router List
const apiEpisodesRouter = require('./controller/api.js');

// Binding Route
app.use('/api/episodes', apiEpisodesRouter);

// Start the Server Listening
app.listen(config.port);