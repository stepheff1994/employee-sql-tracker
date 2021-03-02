const queries = require("./../db/queries.js");
const cTable = require("console.table");

module.exports.getAllEmployees = () => {
  queries.employee.getAll((err, data) => {
    if (err) throw err;
    const table = cTable.getTable(data);
    console.log(table);
  });
};

module.exports.addEmployee = (first, last) => {
  queries.employee.addOne(
    (err, data) => {
      if (err) throw err;
      const table = cTable.getTable(data);
      console.log(table);
    },
    first,
    last
  );
};
