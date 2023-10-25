
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error("Child class must implement toSVGString() method.");
      }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        console.log(this.Shape);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">  
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>`;
      }
      
};

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
        console.log(this.Square);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" height="250" width="450" xmlns="http://www.w3.org/2000/svg"\>
        <polygon points="225,10 100,210 350,210" style="fill:${this.shapeColor}"/>
        <text x="225" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
};

module.exports = {Circle, Square, Triangle};








// class Shape {
//     constructor(text, textColor, shape, shapeColor) {
//         this.text = text;
//         this.textColor = textColor;
//         this.shape = shape;
//         this.shapeColor = shapeColor;
//         this.renderShape();
//     };

//     renderShape() {
//         if(this.shape === 'Circle') {
//             // append information to circle.svg file
//             console.log(this.shape);
//             const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//              <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
//              <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//              </svg>`;
             
//              fs.writeFile('./assets/logo.svg', circle, (err) => {
//                 if (err) throw err;
//                 console.log('circle selected');
//              });

//         } else if(this.shape === 'Square') {
//             // append to square.svg file
//             console.log(this.shape);
            // const square = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            //  <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />
            //  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            //  </svg>`;
             
//              fs.writeFile('./assets/logo.svg', square, (err) => {
//                 if (err) throw err;
//                 console.log('square selected');
//              });

//         } else if(this.shape === 'Triangle') {
//             console.log(this.shape);
            // const triangle = `<svg version="1.1" height="250" width="450" xmlns="http://www.w3.org/2000/svg"\>
            //  <polygon points="225,10 100,210 350,210" style="fill:${this.shapeColor}"/>
            //  <text x="225" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            //  </svg>`;

            //  <svg height="250" width="450">
            // <polygon points="225,10 100,210 350,210" style="fill:rgba(0,0,0,0);stroke:#609AAF;stroke-width:10" />
            // </svg>
             
//              fs.writeFile('./assets/logo.svg', triangle, (err) => {
//                 if (err) throw err;
//                 console.log('triangle selected');
//              });

//         } else {
//             return;
//         };
//     }; 
// };
// module.exports = Shape;