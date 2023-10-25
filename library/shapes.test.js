const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;
const Triangle = require('./shapes').Triangle;

describe('Circle', () => {
    it('should render a circle with correct attributes', () => {
        const shape = new Circle('DGG', 'blue', 'red');
        expect(shape.render()).toBe( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">DGG</text>
        </svg>`);
    });
});


describe('Square', () => {
    it('should render a square with correct attributes', () => {
        const shape = new Square('DGG', 'blue', 'red');
        expect(shape.render()).toBe( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill="red" />
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="blue">DGG</text>
        </svg>`);
    });
});


describe('Triangle', () => {
    it('should render a triangle with correct attributes', () => {
        const shape = new Triangle('DGG', 'blue', 'red');
        expect(shape.render()).toBe( `<svg version="1.1" height="250" width="450" xmlns="http://www.w3.org/2000/svg"\>
        <polygon points="225,10 100,210 350,210" style="fill:red"/>
        <text x="225" y="155" font-size="60" text-anchor="middle" fill="blue">DGG</text>
        </svg>`);
    });
});


