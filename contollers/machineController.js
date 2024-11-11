const machineService = require('../service/machineService');

exports.getProductByPosition = async (req, res, next) => {
  // console.log('from cntrl layer')  
  const { rowName, columnName } = req.params;
  try {
    const result = await machineService.getProduct(rowName, columnName);
    // console.log(result);
    res.send(result);
  } 
  catch (err) {
    console.error(err);
  }
};


exports.updateProduct = async (req, res, next) => {
  const { rowName, columnName } = req.params;
  const { productName, quantity } = req.body;
  try {
    const result = await machineService.updateProduct(rowName, columnName, productName, quantity);
    // res.send (result);
    res.status(200).json({ message: 'Product updated successfully' });
  } 
  catch (err) {
    console.error(err);
  }
};

exports.getProductsByRow = async (req, res, next) => {
  const { rowName } = req.params;
  try {
    const result = await machineService.getProductsInRow(rowName);
    res.status(200).json(result);
  } 
  catch (err) {
    console.error(err);
  }
};

exports.addRow = async (req, res, next) => {
  const { rowName } = req.body;

  try {
    const result = await machineService.addRow(rowName);
    res.json({ message: 'Row added successfully', row: result });
  } 
  
  catch (err) {
    console.error(err);
  }
};


exports.addColumn = async (req, res, next) => {
  const { columnName } = req.body;
  try {
    const result = await machineService.addColumn(columnName);
    res.json({ message: 'Column added successfully', column: result });
  } 
  
  catch (err) {
    console.error(err);
  }
};


exports.getRowDetails = async (req, res, next) => {
  const { rowName } = req.params;
  // console.log(rowName);
  try {
    const result = await machineService.getRowDetails(rowName);
    // console.log(result);
    res.send(result);
  } 
  
  catch (err) {
    console.error(err);
  }
};

exports.getColumnDetails = async (req, res, next) => {
  const { columnName } = req.params;
  try {
    const result = await machineService.getColumnDetails(columnName);
    // console.log(result)
    res.send(result);
  } 
  
  catch (err) {
    console.error(err);
  }
};
