// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the name of the Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'what is a description of this app?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what are the installation instructions for this app?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'what is the usage information for your app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'what are the test instructions for your app?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'what license should be chosen for your app?',
        name: 'license',
        choices: ['a', 'b', 'c', 'none']
    },
    {
        type: 'input',
        message: 'how may future contributions be made to this app?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'what is your github user-name?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'what is your email, so I may contact you with future questions, or contributing-inquirees?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((answers) => {
           writeToFile("README.md",generateMarkdown(answers));

        })
}

// Function call to initialize app
init();
