const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;
const Triangle = require('./shapes').Triangle;

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Triangle', () => {
    it('should render a triangle with correct attributes', () => {
        const shape = new Triangle('DGG', 'blue', 'red');
        expect(shape.text).toBe('DGG')
        expect(shape.render()).toBe( `<svg version="1.1" height="250" width="450" xmlns="http://www.w3.org/2000/svg"\>
        <polygon points="225,10 100,210 350,210" style="fill:red"/>
        <text x="225" y="155" font-size="60" text-anchor="middle" fill="blue">DGG</text>
        </svg>`);
    });
});


