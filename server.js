const connection = require('./db/config.js')
const dotenv = require('dotenv')
const inquirer = require('inquirer')
const cTable = require('console.table')
const {employee,role,department} = require('./db/queries.js')

dotenv.config()
connection.connect(function(err){
    if (err) throw err
    console.log('it worked!')
}
)




// array of questions for user
const questions = {
    main: [ 
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Departments", "View all roles", "View all employees", "add a department", "Add an employee", "Add a role"]
    
    },

    ],

    department: [
        {
            type: 'input',
            name: 'department', 
            message: 'enter department name'
        }
    ]

};

// Arrays
// depart questions

// role questions

// employee questions

inquirer.prompt(questions.main)
.then(answer => {
    console.log(answer)
    if (answer.choice === 'View all employees') {
        employee.getAll((err, data) => {
            if (err) throw err
            const table = cTable.getTable(data)
            console.log(table)
        })
    } else if (answer.choice === "add a department") {
        inquirer.prompt(questions.department)
        .then(answers => {
            console.log(answers)
            department.addOne(answers.department, (err, data) => {
                if (err) throw err
                console.log(data)
            })  
        })
    }
    
    
})


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