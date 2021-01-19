const connection = require('./db/config.js')
const inquirer = require('inquirer')
const fs = require("fs")



// array of questions for user
const questions = [ 
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    
    },
    {
        type: "input",
        name: "description",
        message: "Write the description of your project:"
       
    },
    {
        type: "input",
        name: "installation",
        message: "What is needed for installation?" 
    },
    {
        type: "input",
        name: "usage",
        message: "What are the insctructions for usage?" 
    },
    {
        type: "input",
        name: "images",
        message: "Add any screenshots here (with relative path and seperated by commas)" 
    },
    {
        type: "input",
        name: "credits",
        message: "Please enter credits" 
    },
    {
        type: "list",
        name: "license",
        message: "What licenses did you use?",
        choices: ["MIT", "ISC", "SIL", "GNU", "No current licsense"] 
    },
    {
        type: "input",
        name: "features",
        message: "Please write your features here, If no features then leave blank" 
    },
    {
        type: "input",
        name: "contributing",
        message: "Add a guideline here for future contributers. If not leave blank" 
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for you application. If not leave blank" 
    },
    {
        type: "input",
        name: "links",
        message: "Enter github username here:" 
    },


   

];


// infoData is the data passing to fs.writeFile that is a object with data that will show up on the page
function writeToFile(fileName, infoData) {
    fs.writeFile(fileName, infoData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// function to initialize program before fs.writetoFile
function init() {
    inquirer.prompt(questions)
    // .promt(questions) result is taking the questions array. 
    .then( function (userAnswers) {
        console.log(userAnswers)
        writeToFile("README.md", generateMarkdown(userAnswers))
    }) 
}

// function call to initialize program
init();
