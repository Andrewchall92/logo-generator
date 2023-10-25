const inquire = require('inquirer');
const fs = require('fs');
const Circle = require('./library/shapes').Circle;
const Square = require('./library/shapes').Square;
const Triangle = require('./library/shapes').Triangle;

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
        console.log(data);
        if(data.shape === 'Circle') {
            const newCircle = new Circle(data.text, data.textColor,data.shapeColor);
            let svgString = newCircle.render();

            fs.writeFile('./assets/logo.svg', svgString, (err) => {
                console.log("Generated circle logo.svg!");
             });
        } else if(data.shape === 'Square') {
            const newSquare = new Square(data.text, data.textColor,data.shapeColor);
            let svgString = newSquare.render();

            fs.writeFile('./assets/logo.svg', svgString, (err) => {
                console.log("Generated square logo.svg!");
             });
        } else if(data.shape === 'Triangle') {
            const newTriangle = new Triangle(data.text, data.textColor,data.shapeColor);
            let svgString = newTriangle.render();

            fs.writeFile('./assets/logo.svg', svgString, (err) => {
                console.log("Generated triangle logo.svg!");
             });
        } else {
            return
        }
    });

    