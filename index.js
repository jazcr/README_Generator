// const genReadMe = require("./generateMarkdown")
const inquirer = require("inquirer")

// QUESTIONS FOR USER TO ANSWER
inquirer.prompt([
{   
    type: "input",
    name: "title",
    message: "What is the title of this project? ",
},

{
    type: "input",
    name: "description",
    message: "Write a detailed description of this project: ",
},

{
    type: "input",
    name: "install",
    message: "Provide installation instructions for this project. ",
},

{
    type: "input",
    name: "usage",
    message: "Provide instruction on how to use this app. ",
},

{
    type: "input",
    name: "contributing",
    message: "Who all contributed in building your application?",
},

{
    type: "input",
    name: "tests",
    message: "Please include test instructions for this app.",
},

{
    type: "input",
    name: "github",
    message: "What is your GitHub Username:",
},

{
    type: "input",
    name: "email",
    message: "What is your email address?",
},

{
    type: "list",
    name: "license",
    message: "Choose your license:",
    choices: [
        "MIT",
        "GPL 2.0",
        "Apache",
        "BSD",
        "IBM",
        "ISC",
        "None"
    ]
},

]).then(answers => {
    console.log(answers)
})
