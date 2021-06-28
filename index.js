const genReadMe = require("./genReadMe")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")

// function that writes user input to a file 
function writeToFile(fileName, data) {
    //
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// QUESTIONS FOR USER TO ANSWER
const questions = [
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
        "GPL",
        "Apache",
        "MPL",
        "BSL",
        "Unlicense"
    ]
},

]


// function to write README file
function writeToReadMe(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to 
function init() {
    inquirer.prompt(questions)
    .then(response => {
    writeToReadMe("README.md", genReadMe(response))
    })
}

init();

