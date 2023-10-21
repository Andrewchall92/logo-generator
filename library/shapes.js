const fs = require('fs');

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.renderShape();
    };

    renderShape() {
        if(this.shape === 'Circle') {
            // append information to circle.svg file
            console.log(this.shape);
            const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
             </svg>`;
             
             fs.writeFile('./assets/circle.svg', circle, (err) => {
                if (err) throw err;
                console.log('circle selected');
             });

        } else if(this.shape === 'Square') {
            // append to square.svg file
            console.log(this.shape);
        } else if(this.shape === 'Triangle') {
            // append to triangle.svg file
            console.log(this.shape);
        } else {
            return;
        };
    }; 
};
module.exports = Shape;

// const newShape = new Shape();
// const newShape = require('../index');
// console.log(newShape);