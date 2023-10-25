//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'wWat is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give us a description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please input steps required to install your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Are there any others who are contibuting to this project?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please select a license.',
        name: 'license',
        choices: [
            "MPL_2.0",
            "MIT",
            "ISC",
            "IPL-1.0",
            "unlicensed"
        ]
    },
    {
        type: 'input',
        message: 'How can others contribute to your project if desired? ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'If you have written tests for your application, please provide examples on how to run them.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    let fileName = `README.md`
    fs.writeFile(fileName, markdown(data), (err) =>
    err ? console.error(err) : console.log('Success!'))     
};

// TODO: Create a function to initialize app
function init(data) {
    inquirer.prompt(data)
    .then((data) => {
    writeToFile(data)
    });
}

// Function call to initialize app
init(questions);
