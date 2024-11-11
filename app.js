const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const machineRoutes = require('./routes/machineRoutes');

app.use(bodyParser.json()); 

app.use('/', machineRoutes);

app.listen(3000);