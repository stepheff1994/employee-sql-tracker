const connection = require('./db/config.js')
const dotenv = require('dotenv')
const inquirer = require('inquirer')
const {emloyee,role,department} = require('./db/queries.js')

dotenv.config()
connection.connect(function(err){
    if (err) throw err
    console.log('it worked!')
}
)




// array of questions for user
const questions = [ 
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["View all Departments", "View all roles", "View all employees", "add a department", "Add an employee", "Add a role"]
    
    },
   

   

];

inquirer.prompt(questions)
.then(answer => {
    console.log(answer)
    if (answer.choice === 'View all Departments') {
        department.getAll((err, data) => {
            if (err) throw err
            console.log(data)
        })
    }
})