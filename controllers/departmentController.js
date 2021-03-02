const queries = require('./../db/queries.js')
const cTable = require("console.table");

module.exports.viewAllDepartments = (req, res) => {
        queries.department.getAll((err, data) => {
          if (err) throw err;
          const table = cTable.getTable(data);
          console.log(table);
        });
    
}
