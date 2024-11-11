const db = require('../util/database');

module.exports = class Machine {
    // fetch the product by row and column name
    static getProductByPosition = async (rowName, columnName) => {
      // console.log('from models');
      try {
        const rows = await db.execute( 'SELECT m.productName, m.quantity  FROM machine m JOIN tbl_row r ON m.rowId = r.rowId   JOIN tbl_column c ON m.columnId = c.columnId  WHERE r.rowName = ? AND c.columnName = ? ',  [rowName, columnName]);
         return rows[0]; 
      } 
      catch (err) {
        console.error(err);
      }
    };

    static updateProductByPosition = async (rowName, columnName, productName, quantity) => {
      //update name and quantity of product using rowname,colname
        try {
          const rows = await db.execute(
            'UPDATE machine m  JOIN tbl_row r ON m.rowId = r.rowId JOIN tbl_column c ON m.columnId = c.columnId SET m.productName = ?, m.quantity = ? WHERE r.rowName = ? AND c.columnName = ?',[productName, quantity, rowName, columnName] );
          return rows;
        } 
        catch (err) {
          console.error(err);
        }
      };

    
    static getProductsInRow = async (rowName) => {
        try {
          //here using array for avoiding the metadata otherwise in output grt both array of obj and metadata
          const [rows] = await db.execute( 'SELECT c.columnName, m.productName, m.quantity FROM machine m JOIN tbl_row r ON m.rowId = r.rowId JOIN tbl_column c ON m.columnId = c.columnId WHERE r.rowName = ?',[rowName] );
          return rows;
        } 
        catch (err) {
          console.error(err);
        }
      };


    static insertRow = async (rowName) => {
        try {
          const result = await db.execute( 'INSERT INTO tbl_row (rowName) VALUES (?)',[rowName]);
          return { id: result.insertId, rowName };
        } 
        catch (err) {
          console.log(err)
        }
      };
    
    static insertColumn = async (columnName) => {
        try {
          const result = await db.execute( 'INSERT INTO tbl_column (columnName) VALUES (?)',[columnName]);
          return { id: result.insertId, columnName };
        } 
        catch (err) {
          console.log(err);
        }
    };


    static getRowDetails = async (rowName) => {
        try {
            const [rows] = await db.execute( 'SELECT c.columnName, m.productName, m.quantity FROM machine m JOIN tbl_row r ON m.rowId = r.rowId  JOIN tbl_column c ON m.columnId = c.columnId WHERE r.rowName = ? ' , [rowName]);
            return rows;
        } 
        catch (err) {
         console.log(err);
      };
    }

    static getColumnDetails = async (columnName) => {
        try {
          const [rows] = await db.execute( 'SELECT r.rowName, m.productName, m.quantity FROM machine m JOIN tbl_row r ON m.rowId = r.rowId JOIN tbl_column c ON m.columnId = c.columnId WHERE c.columnName = ?', [columnName] );
          return rows;
        } 
        catch (err) {
            console.log(err);
        }
      };


    // static productExists = async (rowName, columnName) => {
    //     try {
    //       const rows = await db.execute();
    //         return rows[0]; // Returns true if the product exists, otherwise false
    //     } 
    //     catch (err) {
    //       console.log(err);
    //     }
    //   };
    
}
