const inquire = require('inquirer');
const fs = require('fs');
const Shape = require('./library/shapes.js');

inquire
    .prompt([
        {
            name: 'text',
            message: 'Enter up to 3 characters for your logo.',
            type: 'input',
        },
        {
            name: 'textColor',
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
            name: 'shapeColor',
            message: 'Enter a shape color',
            type: 'input',
        },

    ])
    .then((data) => {
        console.log(data.shape);

    })
