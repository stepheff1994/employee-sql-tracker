const connection = require("./db/config.js");
const dotenv = require("dotenv");
const inquirer = require("inquirer");
const cTable = require("console.table");
const employeeController = require("./controllers/employeeController.js");
const departmentController = require("./controllers/departmentController.js");

dotenv.config();
connection.connect(function (err) {
  if (err) throw err;
  console.log("it worked!");
});

// array of questions for user
const questions = {
  main: [
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add an employee",
        "Add a role",
      ],
    },
  ],

  employeeAddquestions: [
    {
      type: "input",
      name: "addEmployee",
      message:
        "add first name, last name and role: (eg. '<firstname> <lastname> <role id>')",
    },
  ],

  department: [
    {
      type: "input",
      name: "department",
      message: "enter department name",
    },
  ],
};

// Arrays
// depart questions

// role questions

// employee questions

inquirer.prompt(questions.main).then((answer) => {
  console.log(answer);
  if (answer.choice === "View all employees") {
    employeeController.getAllEmployees();
  } else if (answer.choice === "View all departments") {
    departmentController.viewAllDepartments();
  } else if (answer.choice === "Add an employee") {
    inquirer
      .prompt(questions.employeeAddquestions)
      .then((employeeAddAnswer) => {
        console.log(employeeAddAnswer);
        let addEmployeeValue = employeeAddAnswer.addEmployee
        let addEmployeeValueSplit = addEmployeeValue.split(' ')
        let first = addEmployeeValueSplit[0]
        let last = addEmployeeValueSplit[1]

        employeeController.addEmployee(first, last);
      });
  }
});

// inquirer.prompt(questions)
// .then(answer => {
//     console.log(answer)
//     if (answer.choice === 'View all employees') {
//         employee.getAll((err, data) => {
//             if (err) throw err
//             const table = cTable.getTable(data)
//             console.log(table)
//         })
//     }
// })
