class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    };

    renderShape() {
        if(this.shape === 'Circle') {
            // append information to circle.svg file
        } else if(this.shape === 'Square') {
            // append to square.svg file
        } else if(this.shape === 'Triangle') {
            // append to triangle.svg file
        } else {
            return;
        };
    };    
};

module.exports = Shape;

// const newShape = new Shapes('DMT', 'red', 'Circle', 'green')
// console.log(newShape);