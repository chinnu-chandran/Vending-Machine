const express = require('express');

const routes = express.Router();

const machineController = require('../contollers/machineController');

routes.get('/api/:rowName/:columnName' , machineController.getProductByPosition);

routes.put('/api/:rowName/:columnName' , machineController.updateProduct);

routes.get('/api/products/row/:rowName', machineController.getProductsByRow);

routes.post('/api/row', machineController.addRow);

routes.post('/api/column', machineController.addColumn);

routes.get('/api/row/details/:rowName', machineController.getRowDetails);

routes.get('/api/column/details/:columnName', machineController.getColumnDetails);

module.exports = routes;