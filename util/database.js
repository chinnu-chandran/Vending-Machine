const mysql = require('mysql2');

const pool = mysql.createPool ({
    host : 'localhost' ,
    user : 'root' ,
    password : '1234' ,
    database : 'vending-machine',
    port : '3308'

} );


module.exports = pool.promise();