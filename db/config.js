const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "d875e508",
  database: 'employee_sql_tracker'
});
 
module.exports = connection