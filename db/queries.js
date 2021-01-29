const connection = require("./config.js");
connection.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

const employee = {
  getAll: (cb) => {
    connection.query("SELECT * FROM employee", function (err, result) {
      if (err) throw err;
      cb(null, result);
    });
  },
  
  addOne: (first, last, role, manager) => {
    let sql =
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first}', '${last}', '${role});`
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  },
};
const role = {
    getAll: (cb) => {
      connection.query("SELECT * FROM employee", function (err, result) {
        if (err) throw err;
        cb(null, result);
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
        cb(null, result);

      });
    },
    
    addOne: (name, cb) => {
      let sql =
        `INSERT INTO department (name) VALUES ('${name}');`
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        cb(null ,result)
      });
    },
  };

module.exports = {employee,role,department}