const machineModel = require('../models/machineModel');

exports.getProduct = async (rowName, columnName) => {
  // console.log('from service');
  try {
    const product =  await machineModel.getProductByPosition(rowName, columnName);
    return product;
  } 
  catch (err) {
    console.log(err);
  }
};

exports.updateProduct = async (rowName, columnName, productName, quantity) => {
    try {
      const result = await machineModel.updateProductByPosition(rowName, columnName, productName, quantity);
      return result;
    } 
    
    catch (err) {
      console.error(err);
      throw err;
    }
  };


  exports.getProductsInRow = async (rowName) => {
    try {
      const products = await machineModel.getProductsInRow(rowName);
      return products;
    } 
    
    catch (err) {
      console.error(err);
      throw err;
    }
  };


  exports.addRow = async (rowName) => {
    try {

        
      const rows = await machineModel.insertRow(rowName);
      return rows;
    } 
    catch (err) {
      console.error("Error in service layer adding row:", err);
    }
  };
  
  exports.addColumn = async (columnName) => {
    try {
      const columns =  await machineModel.insertColumn(columnName);
      return columns;
    } 
    catch (err) {
      console.error("Error in service layer adding column:", err);
    }
  };  


  exports.getRowDetails = async (rowName) => {
    try {
      const details = await machineModel.getRowDetails(rowName);
      return details;
    } 
    
    catch (err) {
      console.error("Error in service layer retrieving row details:", err);
    }
  };

  exports.getColumnDetails = async (columnName) => {
    try {
      const result =  await machineModel.getColumnDetails(columnName);
      return result;
    } 
    catch (err) {
      console.error("Error in service layer retrieving column details:", err);
      throw err;
    }
  };  