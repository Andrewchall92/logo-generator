const inquirer = require('inquirer');
const fs = require('fs');

inquire
    .prompt([
        {
            name: 'text',
            message: 'Enter up to 3 characters for your logo.',
            type: 'input',
        },
        {
            name: 'text-color',
            message: 'Enter a text color.',
            type: 'input',
        },
        {
            name: 'shape',
            message: 'Choose a shape.',
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            name: 'shape-color',
            message: 'Enter a shape color',
            type: 'input',
        },

    ]);
    

