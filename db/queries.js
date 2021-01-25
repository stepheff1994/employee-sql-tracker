const connection = require("./config.js");
connection.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

const employee = {
  getAll: () => {
    connection.query("SELECT * FROM employee", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
  addOne: (first, last, role, manager) => {
    let sql =
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first}', '${last}', '${role});`
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  },
};
const role = {
    getAll: () => {
      connection.query("SELECT * FROM employee", function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    
    addOne: (first, last, role, manager) => {
      let sql =
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first}', '${last}', '${role});`
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    },
  };
  const department = {
    getAll: (cb) => {
      connection.query("SELECT * FROM department", function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);

      });
    },
    
    addOne: (first, last, role, manager) => {
      let sql =
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first}', '${last}', '${role});`
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    },
  };

module.exports = {employee,role,department}